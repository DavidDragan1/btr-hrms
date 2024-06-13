"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterruptedSequenceQueue = void 0;
const sequence_queue_1 = require("./sequence-queue");
const _1 = require(".");
class InterruptedSequenceQueue extends sequence_queue_1.SequenceQueue {
    constructor(_electronService, _errorHandlerService, _store, _timeSlotQueueService, _timeTrackerService, _timeTrackerStatusService) {
        super(_electronService, _errorHandlerService, _store, _timeSlotQueueService, _timeTrackerService, _timeTrackerStatusService);
        this._electronService = _electronService;
        this._errorHandlerService = _errorHandlerService;
        this._store = _store;
        this._timeSlotQueueService = _timeSlotQueueService;
        this._timeTrackerService = _timeTrackerService;
        this._timeTrackerStatusService = _timeTrackerStatusService;
    }
    async synchronize({ timer, intervals }) {
        console.log('🛠 - Create queue');
        // Create the queue
        const timeSlotQueue = new _1.TimeSlotQueue(this._timeTrackerService, this._timeSlotQueueService, this._electronService, this._store);
        // append data to queue;
        for (const interval of intervals)
            timeSlotQueue.enqueue({
                ...interval,
                timesheetId: timer.timesheetId
            });
        intervals = []; // empty the array
        console.log('🏗 - Begin processing interrupted time slot queue');
        // Begin processing
        await timeSlotQueue.process();
        console.log('✅ - End processing interrupted time slot queue');
        // End processing
    }
}
exports.InterruptedSequenceQueue = InterruptedSequenceQueue;
//# sourceMappingURL=interrupted-sequence-queue.js.map