import { ITimeSlot } from '@gauzy/contracts';
import { QueueState } from '../../../interfaces/queue-state';
export declare class InProgressTimeSlotState extends QueueState<ITimeSlot> {
    enqueue(data: ITimeSlot): void;
    dequeue(): Promise<void>;
}
//# sourceMappingURL=in-progress-time-slot-state.d.ts.map