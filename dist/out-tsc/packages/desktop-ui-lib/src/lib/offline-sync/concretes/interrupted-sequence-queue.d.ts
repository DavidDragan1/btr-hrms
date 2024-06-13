import { ISequence } from './sequence-queue';
import { SequenceQueue } from './sequence-queue';
import { Store } from '../../services/store.service';
import { TimeSlotQueueService } from '..';
import { ElectronService } from '../../electron/services';
import { ErrorHandlerService } from '../../services';
import { TimeTrackerStatusService } from '../../time-tracker/time-tracker-status/time-tracker-status.service';
import { TimeTrackerService } from '../../time-tracker/time-tracker.service';
export declare class InterruptedSequenceQueue extends SequenceQueue {
    protected _electronService: ElectronService;
    protected _errorHandlerService: ErrorHandlerService;
    protected _store: Store;
    protected _timeSlotQueueService: TimeSlotQueueService;
    protected _timeTrackerService: TimeTrackerService;
    protected _timeTrackerStatusService: TimeTrackerStatusService;
    constructor(_electronService: ElectronService, _errorHandlerService: ErrorHandlerService, _store: Store, _timeSlotQueueService: TimeSlotQueueService, _timeTrackerService: TimeTrackerService, _timeTrackerStatusService: TimeTrackerStatusService);
    synchronize({ timer, intervals }: ISequence): Promise<void>;
}
//# sourceMappingURL=interrupted-sequence-queue.d.ts.map