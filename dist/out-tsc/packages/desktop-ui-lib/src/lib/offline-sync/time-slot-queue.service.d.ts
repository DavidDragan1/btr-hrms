import { ITimeSlot } from '@gauzy/contracts';
import { Observable } from 'rxjs';
import { Updatable, ViewQueueStateUpdater } from './interfaces';
export declare class TimeSlotQueueService implements Updatable<ITimeSlot> {
    private _updater$;
    private _viewQueueStateUpdater$;
    set viewQueueStateUpdater(value: ViewQueueStateUpdater);
    get viewQueueStateUpdater$(): Observable<ViewQueueStateUpdater>;
    set updater(value: ITimeSlot);
    get updater$(): Observable<ITimeSlot>;
}
//# sourceMappingURL=time-slot-queue.service.d.ts.map