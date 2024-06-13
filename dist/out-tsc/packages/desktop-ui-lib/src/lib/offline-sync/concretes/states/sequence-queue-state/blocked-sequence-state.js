"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockedSequenceState = void 0;
const _1 = require(".");
const queue_state_1 = require("../../../interfaces/queue-state");
class BlockedSequenceState extends queue_state_1.QueueState {
    enqueue(data) {
        if (this.context.isEmpty()) {
            this.context.state = new _1.InProgressSequenceState(this.context);
        }
        this.context.queue.append(data);
    }
    dequeue() {
        console.log('⭕️ - blocked');
    }
}
exports.BlockedSequenceState = BlockedSequenceState;
//# sourceMappingURL=blocked-sequence-state.js.map