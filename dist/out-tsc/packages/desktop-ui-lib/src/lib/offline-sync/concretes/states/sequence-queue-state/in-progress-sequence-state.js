"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InProgressSequenceState = void 0;
const queue_state_1 = require("../../../interfaces/queue-state");
const completed_sequence_state_1 = require("./completed-sequence-state");
class InProgressSequenceState extends queue_state_1.QueueState {
    enqueue(data) {
        if (this.context.isEmpty()) {
            this.context.state = new InProgressSequenceState(this.context);
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
            ? new completed_sequence_state_1.CompletedSequenceState(this.context)
            : new InProgressSequenceState(this.context);
    }
}
exports.InProgressSequenceState = InProgressSequenceState;
//# sourceMappingURL=in-progress-sequence-state.js.map