"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedSequenceState = void 0;
const _1 = require(".");
const queue_state_1 = require("../../../interfaces/queue-state");
class CompletedSequenceState extends queue_state_1.QueueState {
    enqueue(data) {
        this.context.state = new _1.InProgressSequenceState(this.context);
        this.context.queue.append(data);
    }
    dequeue() {
        console.log('✅ - Completed');
    }
}
exports.CompletedSequenceState = CompletedSequenceState;
//# sourceMappingURL=completed-sequence-state.js.map