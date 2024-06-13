"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchElectronService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const desktop_ui_lib_1 = require("@gauzy/desktop-ui-lib");
const rxjs_1 = require("rxjs");
const contracts_1 = require("@gauzy/contracts");
const until_destroy_1 = require("@ngneat/until-destroy");
let ActivityWatchElectronService = exports.ActivityWatchElectronService = class ActivityWatchElectronService {
    constructor(electronService, activityWatchEventService, ngZone) {
        this.electronService = electronService;
        this.activityWatchEventService = activityWatchEventService;
        this.ngZone = ngZone;
        this.isSetupLocked = false;
        this.activities = [
            {
                type: contracts_1.ActivityWatchEventType.APP,
                ipcEvent: contracts_1.ActivityWatchCollectEvent.WINDOW,
                collectEventFn: async (arg) => this.activityWatchEventService.collectWindowsEvents(arg),
                sendEventFn: (result) => this.send('push_window_activity', result)
            },
            {
                type: contracts_1.ActivityWatchEventType.AFK,
                ipcEvent: contracts_1.ActivityWatchCollectEvent.AFK,
                collectEventFn: async (arg) => this.activityWatchEventService.collectAfkEvents(arg),
                sendEventFn: (result) => this.send('push_afk_activity', result)
            },
            {
                type: contracts_1.ActivityWatchEventType.URL,
                ipcEvent: contracts_1.ActivityWatchCollectEvent.CHROME,
                collectEventFn: async (arg) => this.activityWatchEventService.collectChromeEvents(arg),
                sendEventFn: (result) => this.send('push_chrome_activity', result)
            },
            {
                type: contracts_1.ActivityWatchEventType.URL,
                ipcEvent: contracts_1.ActivityWatchCollectEvent.FIREFOX,
                collectEventFn: async (arg) => this.activityWatchEventService.collectFirefoxEvents(arg),
                sendEventFn: (result) => this.send('push_firefox_activity', result)
            },
            {
                type: contracts_1.ActivityWatchEventType.URL,
                ipcEvent: contracts_1.ActivityWatchCollectEvent.EDGE,
                collectEventFn: async (arg) => this.activityWatchEventService.collectEdgeEvents(arg),
                sendEventFn: (result) => this.send('push_edge_activity', result)
            }
        ];
    }
    setupActivitiesCollection() {
        if (this.isSetupLocked) {
            return;
        }
        this.isSetupLocked = true;
        this.activities.forEach((activity) => {
            this.collectActivity(activity)
                .pipe((0, rxjs_1.tap)((result) => {
                this.ngZone.run(() => {
                    activity.sendEventFn(result);
                });
            }), (0, until_destroy_1.untilDestroyed)(this))
                .subscribe();
        });
    }
    send(channel, message) {
        this.electronService.ipcRenderer.send(channel, message);
    }
    fromIpcEvent(ipcEvent) {
        return new rxjs_1.Observable((observer) => {
            this.electronService.ipcRenderer.on(ipcEvent, (_, arg) => {
                observer.next(arg);
            });
        });
    }
    collectActivity(activity) {
        return this.fromIpcEvent(activity.ipcEvent).pipe((0, rxjs_1.mergeMap)(async (arg) => {
            const event = await activity.collectEventFn(arg);
            return {
                timerId: arg.timerId,
                type: activity.type,
                event
            };
        }), (0, until_destroy_1.untilDestroyed)(this));
    }
};
exports.ActivityWatchElectronService = ActivityWatchElectronService = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [desktop_ui_lib_1.ElectronService,
        desktop_ui_lib_1.ActivityWatchEventService,
        core_1.NgZone])
], ActivityWatchElectronService);
//# sourceMappingURL=activity-watch-electron.service.js.map