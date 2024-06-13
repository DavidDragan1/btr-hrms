import { Observable } from 'rxjs';
import { ITimerIcon } from './interfaces';
import { TimeTrackerStatusService } from './time-tracker-status.service';
export declare class TimeTrackerStatusComponent {
    private readonly _timeTrackerStatusService;
    constructor(_timeTrackerStatusService: TimeTrackerStatusService);
    get icon$(): Observable<ITimerIcon>;
}
//# sourceMappingURL=time-tracker-status.component.d.ts.map