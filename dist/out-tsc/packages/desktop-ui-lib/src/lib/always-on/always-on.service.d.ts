import { Observable } from 'rxjs';
import { ElectronService } from '../electron/services';
export declare enum AlwaysOnStateEnum {
    STARTED = "Started",
    STOPPED = "Stopped",
    LOADING = "loading"
}
export interface ITimeCounter {
    current: string;
    today: string;
}
export declare class AlwaysOnService {
    private readonly _electronService;
    constructor(_electronService: ElectronService);
    run(state: AlwaysOnStateEnum): void;
    get state$(): Observable<AlwaysOnStateEnum>;
    get counter$(): Observable<ITimeCounter>;
    update(current: string, today: number): void;
}
//# sourceMappingURL=always-on.service.d.ts.map