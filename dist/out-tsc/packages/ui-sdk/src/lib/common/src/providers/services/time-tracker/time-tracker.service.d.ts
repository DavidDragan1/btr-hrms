import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, Query } from '@datorama/akita';
import { ITimeLog, ITimerToggleInput, TimeLogType, ITimerStatus, IOrganization, TimerState, ITimerStatusInput } from '@gauzy/contracts';
import { Store as AppStore } from '../store/store.service';
import { ITimerSynced } from './interfaces';
export declare function createInitialTimerState(): TimerState;
export declare class TimerStore extends Store<TimerState> {
    constructor();
}
export declare class TimerQuery extends Query<TimerState> {
    protected readonly store: TimerStore;
    constructor(store: TimerStore);
}
export declare class TimeTrackerService implements OnDestroy {
    protected readonly timerStore: TimerStore;
    protected readonly timerQuery: TimerQuery;
    protected readonly store: AppStore;
    private readonly http;
    interval: any;
    showTimerWindow$: Observable<boolean>;
    duration$: Observable<number>;
    currentSessionDuration$: Observable<number>;
    $running: Observable<boolean>;
    $timerConfig: Observable<ITimerToggleInput>;
    organization: IOrganization;
    private _trackType$;
    trackType$: Observable<string>;
    private _worker;
    private _timerSynced;
    timer$: Observable<number>;
    constructor(timerStore: TimerStore, timerQuery: TimerQuery, store: AppStore, http: HttpClient);
    checkTimerStatus(payload: ITimerStatusInput): Promise<void>;
    get showTimerWindow(): boolean;
    set showTimerWindow(value: boolean);
    get duration(): number;
    set duration(value: number);
    get currentSessionDuration(): number;
    set currentSessionDuration(value: number);
    get timerConfig(): ITimerToggleInput;
    set timerConfig(value: ITimerToggleInput);
    get running(): boolean;
    set running(value: boolean);
    get position(): any;
    set position(offSet: any);
    /**
     * Retrieves the timer status using the provided parameters.
     * @param params The input parameters for retrieving timer status.
     * @returns A promise that resolves to the timer status.
     */
    getTimerStatus(params: ITimerStatusInput): Promise<ITimerStatus>;
    openAndStartTimer(): void;
    toggle(): Promise<ITimeLog>;
    turnOnTimer(): void;
    turnOffTimer(): void;
    canStartTimer(): boolean;
    setTimeLogType(timeType: string): void;
    get timeType(): TimeLogType;
    set timeType(value: TimeLogType);
    clearTimeTracker(): void;
    private _runWorker;
    remoteToggle(): ITimeLog;
    get timerSynced(): ITimerSynced;
    set timerSynced(value: ITimerSynced);
    ngOnDestroy(): void;
}
//# sourceMappingURL=time-tracker.service.d.ts.map