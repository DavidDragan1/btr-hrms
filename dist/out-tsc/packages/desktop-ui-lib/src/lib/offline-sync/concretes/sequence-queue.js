"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceQueue = void 0;
const rxjs_1 = require("rxjs");
const time_slot_queue_1 = require("./time-slot-queue");
const offline_queue_1 = require("../interfaces/offline-queue");
const states_1 = require("./states");
const app_constants_1 = require("../../constants/app.constants");
/**
 * SequenceQueue
 */
class SequenceQueue extends offline_queue_1.OfflineQueue {
    constructor(_electronService, _errorHandlerService, _store, _timeSlotQueueService, _timeTrackerService, _timeTrackerStatusService) {
        super();
        this._electronService = _electronService;
        this._errorHandlerService = _errorHandlerService;
        this._store = _store;
        this._timeSlotQueueService = _timeSlotQueueService;
        this._timeTrackerService = _timeTrackerService;
        this._timeTrackerStatusService = _timeTrackerStatusService;
        this.state = new states_1.BlockedSequenceState(this);
    }
    async synchronize({ timer, intervals }) {
        try {
            console.log('🛠 - Preprocessing time slot');
            const params = {
                note: timer.note,
                organizationContactId: timer.organizationContactId,
                taskId: timer.taskId,
                projectId: timer.projectId,
                organizationId: this._store.organizationId,
                tenantId: this._store.tenantId
            };
            let latest = null;
            if (timer.isStartedOffline) {
                console.log('⏱ - Silent start');
                latest = await this._timeTrackerService.toggleApiStart({
                    ...timer,
                    ...params
                });
            }
            console.log('🛠 - Create queue');
            // Create the queue
            const timeSlotQueue = new time_slot_queue_1.TimeSlotQueue(this._timeTrackerService, this._timeSlotQueueService, this._electronService, this._store);
            // append data to queue;
            if (intervals.length > 0) {
                for (const interval of intervals)
                    timeSlotQueue.enqueue(interval);
                intervals = []; // empty the array
                console.log('🏗 - Begin processing time slot queue');
                // Begin processing
                await timeSlotQueue.process();
                console.log('✅ - End processing time slot queue');
                // End processing
            }
            if (timer.isStoppedOffline) {
                console.log('⏱ - Silent stop');
                latest = await this._timeTrackerService.toggleApiStop({
                    ...timer,
                    ...params
                });
            }
            const status = await this._timeTrackerStatusService.status();
            rxjs_1.asapScheduler.schedule(async () => {
                try {
                    await this._electronService.ipcRenderer.invoke('UPDATE_SYNCED_TIMER', {
                        lastTimer: latest
                            ? latest
                            : {
                                ...timer,
                                id: status.lastLog.id
                            },
                        ...timer
                    });
                    console.log('⏱ - local database updated');
                }
                catch (error) {
                    console.error('🚨 - Error updating local database', error);
                    this._errorHandlerService.handleError(error);
                }
            });
        }
        catch (error) {
            console.error('🚨 - Error processing time slot queue', error);
            this._timeSlotQueueService.viewQueueStateUpdater = {
                size: this.queue.size,
                inProgress: false
            };
        }
    }
    process() {
        console.log('🚀 - Sequence processing started');
        return new Promise((resolve) => {
            // Create an observable to process the queue
            const process$ = (0, rxjs_1.defer)(() => (0, rxjs_1.of)(true)).pipe((0, rxjs_1.concatMap)(() => this.dequeue()), (0, rxjs_1.repeat)({
                delay: () => (0, rxjs_1.timer)(app_constants_1.BACKGROUND_SYNC_OFFLINE_INTERVAL)
            }));
            console.log('🚀 - Sequence processing observable created');
            // Subscribe to the observable
            const subscription = process$.subscribe({
                next: () => console.log('✅ - Sequence done')
            });
            console.log('🚀 - Sequence processing observable subscribed');
            // Unsubscribe and resolve the promise when the queue is completed
            this.state$.subscribe((state) => {
                console.log('🚀 - Sequence state updated');
                this._timeSlotQueueService.viewQueueStateUpdater = {
                    size: this.queue.size,
                    inProgress: state instanceof states_1.InProgressSequenceState
                };
                if (state instanceof states_1.CompletedSequenceState) {
                    console.log('🚀 - Sequence processing completed');
                    subscription.unsubscribe();
                    resolve();
                }
            });
        });
    }
}
exports.SequenceQueue = SequenceQueue;
//# sourceMappingURL=sequence-queue.js.map