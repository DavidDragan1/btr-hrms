import { Observable } from 'rxjs';
import { ActivityWatchViewService } from '../activity-watch-view.service';
export declare class ActivityWatchComponent {
    private readonly activityWatchViewService;
    constructor(activityWatchViewService: ActivityWatchViewService);
    get isTimerRunning$(): Observable<boolean>;
    setActivityWatch(isChecked: boolean): Promise<void>;
    get aw$(): Observable<boolean>;
    get log$(): Observable<string>;
    get status$(): Observable<string>;
    get icon$(): Observable<string>;
}
//# sourceMappingURL=activity-watch.component.d.ts.map