import { BehaviorSubject } from 'rxjs';
import { ActivityWatchEventService } from './activity-watch-event.service';
import { ActivityWatchElectronService } from './activity-watch-electron.service';
export declare class ActivityWatchViewService {
    private readonly activityWatchElectronService;
    private readonly activityWatchEventService;
    private readonly environment;
    private readonly _isTimerRunning$;
    private readonly _aw$;
    private readonly _icon$;
    private readonly _status$;
    private readonly _log$;
    constructor(activityWatchElectronService: ActivityWatchElectronService, activityWatchEventService: ActivityWatchEventService, environment: any);
    get isTimerRunning$(): BehaviorSubject<boolean>;
    get aw$(): BehaviorSubject<boolean>;
    get aw(): boolean;
    get icon$(): BehaviorSubject<string>;
    get status$(): BehaviorSubject<string>;
    get log$(): BehaviorSubject<string>;
    pingActivityWatchServer(): Promise<void>;
}
//# sourceMappingURL=activity-watch-view.service.d.ts.map