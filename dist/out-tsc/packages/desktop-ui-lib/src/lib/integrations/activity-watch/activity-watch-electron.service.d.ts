import { NgZone } from '@angular/core';
import { ActivityWatchEventService, ElectronService } from '@gauzy/desktop-ui-lib';
export declare class ActivityWatchElectronService {
    private readonly electronService;
    private readonly activityWatchEventService;
    private readonly ngZone;
    private readonly activities;
    private isSetupLocked;
    constructor(electronService: ElectronService, activityWatchEventService: ActivityWatchEventService, ngZone: NgZone);
    setupActivitiesCollection(): void;
    send<T>(channel: string, message?: T): void;
    private fromIpcEvent;
    private collectActivity;
}
//# sourceMappingURL=activity-watch-electron.service.d.ts.map