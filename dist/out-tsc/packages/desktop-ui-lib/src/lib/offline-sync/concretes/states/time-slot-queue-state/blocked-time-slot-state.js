"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockedTimeSlotState = void 0;
const _1 = require(".");
const queue_state_1 = require("../../../interfaces/queue-state");
class BlockedTimeSlotState extends queue_state_1.QueueState {
    enqueue(data) {
        if (this.context.isEmpty()) {
            this.context.state = new _1.InProgressTimeSlotState(this.context);
        }
        this.context.queue.append(data);
    }
    dequeue() {
        console.log('⭕️ - blocked');
    }
}
exports.BlockedTimeSlotState = BlockedTimeSlotState;
//# sourceMappingURL=blocked-time-slot-state.js.map