import { ITimeSlot } from '@gauzy/contracts';
import { TimeSlotQueueService } from '../time-slot-queue.service';
import { ElectronService } from '../../electron/services';
import { ErrorHandlerService, Store } from '../../services';
import { TimeTrackerStatusService } from '../../time-tracker/time-tracker-status/time-tracker-status.service';
import { TimeTrackerService } from '../../time-tracker/time-tracker.service';
import { OfflineQueue } from '../interfaces/offline-queue';
export interface ISequence {
    timer: any;
    intervals: ITimeSlot[];
}
/**
 * SequenceQueue
 */
export declare class SequenceQueue extends OfflineQueue<ISequence> {
    protected _electronService: ElectronService;
    protected _errorHandlerService: ErrorHandlerService;
    protected _store: Store;
    protected _timeSlotQueueService: TimeSlotQueueService;
    protected _timeTrackerService: TimeTrackerService;
    protected _timeTrackerStatusService: TimeTrackerStatusService;
    constructor(_electronService: ElectronService, _errorHandlerService: ErrorHandlerService, _store: Store, _timeSlotQueueService: TimeSlotQueueService, _timeTrackerService: TimeTrackerService, _timeTrackerStatusService: TimeTrackerStatusService);
    synchronize({ timer, intervals }: ISequence): Promise<void>;
    process(): Promise<void>;
}
//# sourceMappingURL=sequence-queue.d.ts.map