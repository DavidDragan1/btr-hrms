import { ElectronService } from './electron.service';
import * as Log from 'electron-log';
export declare class LoggerService {
    private readonly _electronService;
    private _log;
    constructor(_electronService: ElectronService);
    get log(): Log.ElectronLog;
}
//# sourceMappingURL=logger.service.d.ts.map