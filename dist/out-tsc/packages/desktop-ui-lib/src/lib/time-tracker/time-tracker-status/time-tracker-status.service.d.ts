import { ITimerStatus } from '@gauzy/contracts';
import { Observable } from 'rxjs';
import { IRemoteTimer } from './interfaces';
import { TimeTrackerService } from '../time-tracker.service';
import { Store } from '../../services';
export declare class TimeTrackerStatusService {
    private readonly _timeTrackerService;
    private readonly _store;
    private _icon$;
    private _external$;
    private _backgroundSync$;
    private _remoteTimer;
    constructor(_timeTrackerService: TimeTrackerService, _store: Store);
    get icon$(): Observable<any>;
    get external$(): Observable<any>;
    status(): Promise<ITimerStatus>;
    get remoteTimer(): IRemoteTimer;
    set remoteTimer(value: IRemoteTimer);
}
//# sourceMappingURL=time-tracker-status.service.d.ts.map