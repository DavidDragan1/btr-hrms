import { ITimeSlot } from '@gauzy/contracts';
import { QueueState } from '../../../interfaces/queue-state';
export declare class BlockedTimeSlotState extends QueueState<ITimeSlot> {
    enqueue(data: ITimeSlot): void;
    dequeue(): void;
}
//# sourceMappingURL=blocked-time-slot-state.d.ts.map