import { QueueState } from '../../../interfaces/queue-state';
import { ISequence } from '../../sequence-queue';
export declare class BlockedSequenceState extends QueueState<ISequence> {
    enqueue(data: ISequence): void;
    dequeue(): void;
}
//# sourceMappingURL=blocked-sequence-state.d.ts.map