"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InProgressTimeSlotState = void 0;
const _1 = require(".");
const queue_state_1 = require("../../../interfaces/queue-state");
class InProgressTimeSlotState extends queue_state_1.QueueState {
    enqueue(data) {
        if (this.context.isEmpty()) {
            this.context.state = new InProgressTimeSlotState(this.context);
        }
        this.context.queue.append(data);
    }
    async dequeue() {
        if (this.context.isEmpty()) {
            return;
        }
        const shifted = this.context.queue.shift().data;
        if (shifted) {
            await this.context.synchronize(shifted);
        }
        this.context.state = this.context.isEmpty()
            ? new _1.CompletedTimeSlotState(this.context)
            : new InProgressTimeSlotState(this.context);
    }
}
exports.InProgressTimeSlotState = InProgressTimeSlotState;
//# sourceMappingURL=in-progress-time-slot-state.js.map