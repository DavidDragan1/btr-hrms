import { QueueState } from '../../../interfaces/queue-state';
import { ISequence } from '../../sequence-queue';
export declare class CompletedSequenceState extends QueueState<ISequence> {
    enqueue(data: ISequence): void;
    dequeue(): void;
}
//# sourceMappingURL=completed-sequence-state.d.ts.map