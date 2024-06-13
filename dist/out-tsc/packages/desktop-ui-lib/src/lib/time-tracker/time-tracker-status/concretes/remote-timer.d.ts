import { ITimeLog, TimeLogSourceEnum } from '@gauzy/contracts';
import { IRemoteTimer } from '../interfaces';
export declare class RemoteTimer implements IRemoteTimer {
    private _source;
    private _isRunning;
    private _startedAt;
    private _stoppedAt;
    private _lastLog;
    constructor(timeLog?: ITimeLog);
    get isExternalSource(): boolean;
    get lastLog(): ITimeLog;
    set lastLog(value: ITimeLog);
    get source(): TimeLogSourceEnum;
    set source(value: TimeLogSourceEnum);
    get running(): boolean;
    set running(value: boolean);
    get startedAt(): Date;
    set startedAt(value: Date);
    get stoppedAt(): Date;
    set stoppedAt(value: Date);
}
//# sourceMappingURL=remote-timer.d.ts.map