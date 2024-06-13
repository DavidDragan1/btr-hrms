"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedTimeSlotState = void 0;
const _1 = require(".");
const queue_state_1 = require("../../../interfaces/queue-state");
class CompletedTimeSlotState extends queue_state_1.QueueState {
    enqueue(data) {
        this.context.state = new _1.InProgressTimeSlotState(this.context);
        this.context.queue.append(data);
    }
    dequeue() {
        console.log('✅ - Completed');
    }
}
exports.CompletedTimeSlotState = CompletedTimeSlotState;
//# sourceMappingURL=completed-time-slot-state.js.map