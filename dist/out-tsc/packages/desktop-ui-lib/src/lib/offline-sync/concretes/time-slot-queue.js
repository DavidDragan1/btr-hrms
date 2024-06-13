"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotQueue = void 0;
const rxjs_1 = require("rxjs");
const app_constants_1 = require("../../constants/app.constants");
const offline_queue_1 = require("../interfaces/offline-queue");
const states_1 = require("./states");
class TimeSlotQueue extends offline_queue_1.OfflineQueue {
    constructor(_timeTrackerService, _timeSlotQueueService, _electronService, _store) {
        super();
        this._timeTrackerService = _timeTrackerService;
        this._timeSlotQueueService = _timeSlotQueueService;
        this._electronService = _electronService;
        this._store = _store;
        this.state = new states_1.BlockedTimeSlotState(this);
    }
    async synchronize(interval) {
        const screenshots = interval.screenshots;
        console.log('prepare backup', interval);
        const activities = await this._timeTrackerService.pushToTimeSlot({
            ...interval,
            recordedAt: interval.startedAt,
            organizationId: this._store.organizationId,
            tenantId: this._store.tenantId,
        });
        console.log('backup', activities);
        const timeSlotId = activities.id;
        await this._uploadScreenshots(screenshots, interval, timeSlotId);
        await this._electronService.ipcRenderer.invoke('UPDATE_SYNCED', { ...interval, remoteId: timeSlotId });
        await this._electronService.ipcRenderer.invoke('UPDATE_SYNCED_TIMER', {
            id: interval.timerId,
            timeSlotId
        });
        this._timeSlotQueueService.updater = { ...interval, timeSlotId };
    }
    // upload screenshot to timeslot api
    async _uploadScreenshots(screenshots, interval, timeSlotId) {
        try {
            await Promise.all(screenshots.map(async (screenshot) => {
                try {
                    const resImg = await this._timeTrackerService.uploadImages({
                        ...interval,
                        recordedAt: interval.startedAt,
                        timeSlotId,
                    }, {
                        b64Img: screenshot.b64img,
                        fileName: screenshot.fileName,
                    });
                    console.log('Result upload', resImg);
                    return resImg;
                }
                catch (error) {
                    console.log('On upload Image', error);
                }
            }));
        }
        catch (error) {
            console.log('Backup-error', error);
        }
    }
    process() {
        return new Promise((resolve) => {
            // Create an observable to process the queue
            const process$ = (0, rxjs_1.defer)(() => (0, rxjs_1.of)(true)).pipe((0, rxjs_1.concatMap)(() => this.dequeue()), (0, rxjs_1.repeat)({
                delay: () => (0, rxjs_1.timer)(app_constants_1.BACKGROUND_SYNC_OFFLINE_INTERVAL),
            }));
            // Subscribe to the observable
            const subscription = process$.subscribe({
                next: () => console.log('✅ - Time slot done')
            });
            // Unsubscribe and resolve the promise when the queue is completed
            this.state$.subscribe((state) => {
                console.log('[Subscription]', this.queue.toString());
                if (state instanceof states_1.CompletedTimeSlotState) {
                    subscription.unsubscribe();
                    resolve();
                }
            });
        });
    }
}
exports.TimeSlotQueue = TimeSlotQueue;
//# sourceMappingURL=time-slot-queue.js.map