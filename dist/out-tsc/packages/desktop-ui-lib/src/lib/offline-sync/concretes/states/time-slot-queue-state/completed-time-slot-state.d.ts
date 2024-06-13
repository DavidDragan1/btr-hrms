import { ITimeSlot } from '@gauzy/contracts';
import { QueueState } from '../../../interfaces/queue-state';
export declare class CompletedTimeSlotState extends QueueState<ITimeSlot> {
    enqueue(data: ITimeSlot): void;
    dequeue(): void;
}
//# sourceMappingURL=completed-time-slot-state.d.ts.map