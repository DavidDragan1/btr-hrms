import { IActivityWatchEventService } from './i-activity-watch';
import { HttpClient } from '@angular/common/http';
import { IActivityWatchAfkEvent, IActivityWatchWebEvent, IActivityWatchWindowEvent, IDateRange } from '@gauzy/contracts';
export declare class ActivityWatchEventService implements IActivityWatchEventService {
    private http;
    constructor(http: HttpClient);
    private buckets;
    private collectEvents;
    private bucketId;
    collectAfkEvents(range: IDateRange): Promise<IActivityWatchAfkEvent[]>;
    collectChromeEvents(range: IDateRange): Promise<IActivityWatchWebEvent[]>;
    collectFirefoxEvents(range: IDateRange): Promise<IActivityWatchWebEvent[]>;
    collectWindowsEvents(range: IDateRange): Promise<IActivityWatchWindowEvent[]>;
    ping(): Promise<boolean>;
    collectEdgeEvents(range: IDateRange): Promise<IActivityWatchWebEvent[]>;
}
//# sourceMappingURL=activity-watch-event.service.d.ts.map