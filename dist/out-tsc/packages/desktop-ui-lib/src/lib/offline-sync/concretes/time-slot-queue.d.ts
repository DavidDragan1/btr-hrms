import { ITimeSlot } from '@gauzy/contracts';
import { ElectronService } from '../../electron/services';
import { Store } from '../../services';
import { TimeTrackerService } from '../../time-tracker/time-tracker.service';
import { OfflineQueue } from '../interfaces/offline-queue';
import { TimeSlotQueueService } from '../time-slot-queue.service';
export declare class TimeSlotQueue extends OfflineQueue<ITimeSlot> {
    private _timeTrackerService;
    private _timeSlotQueueService;
    private _electronService;
    private _store;
    constructor(_timeTrackerService: TimeTrackerService, _timeSlotQueueService: TimeSlotQueueService, _electronService: ElectronService, _store: Store);
    synchronize(interval: ITimeSlot): Promise<void>;
    private _uploadScreenshots;
    process(): Promise<void>;
}
//# sourceMappingURL=time-slot-queue.d.ts.map