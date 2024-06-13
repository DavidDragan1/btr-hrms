import { QueueState } from '../../../interfaces/queue-state';
import { ISequence } from '../../sequence-queue';
export declare class InProgressSequenceState extends QueueState<ISequence> {
    enqueue(data: ISequence): void;
    dequeue(): Promise<void>;
}
//# sourceMappingURL=in-progress-sequence-state.d.ts.map