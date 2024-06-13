"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchViewService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const activity_watch_event_service_1 = require("./activity-watch-event.service");
const constants_1 = require("../../constants");
const activity_watch_electron_service_1 = require("./activity-watch-electron.service");
const common_1 = require("@gauzy/ui-sdk/common");
const until_destroy_1 = require("@ngneat/until-destroy");
let ActivityWatchViewService = exports.ActivityWatchViewService = class ActivityWatchViewService {
    constructor(activityWatchElectronService, activityWatchEventService, environment) {
        this.activityWatchElectronService = activityWatchElectronService;
        this.activityWatchEventService = activityWatchEventService;
        this.environment = environment;
        this._isTimerRunning$ = new rxjs_1.BehaviorSubject(false);
        this._aw$ = new rxjs_1.BehaviorSubject(false);
        this._icon$ = new rxjs_1.BehaviorSubject('close-square-outline');
        this._status$ = new rxjs_1.BehaviorSubject('success');
        this._log$ = new rxjs_1.BehaviorSubject(null);
        this._status$
            .pipe((0, rxjs_1.filter)((status) => !!status), (0, rxjs_1.tap)((status) => {
            this.activityWatchElectronService.send('aw_status', status === 'success');
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.aw$
            .pipe((0, common_1.distinctUntilChange)(), (0, rxjs_1.tap)(async (isChecked) => {
            await this.pingActivityWatchServer();
            this.activityWatchElectronService.send('set_tp_aw', {
                host: this.environment?.AWHost,
                isAw: isChecked
            });
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    get isTimerRunning$() {
        return this._isTimerRunning$;
    }
    get aw$() {
        return this._aw$;
    }
    get aw() {
        return this._aw$.getValue();
    }
    get icon$() {
        return this._icon$;
    }
    get status$() {
        return this._status$;
    }
    get log$() {
        return this._log$;
    }
    async pingActivityWatchServer() {
        if (!this.aw) {
            return;
        }
        const isAlive = await this.activityWatchEventService.ping();
        if (isAlive) {
            this.icon$.next('checkmark-square-outline');
            this.status$.next('success');
            this.log$.next('TIMER_TRACKER.AW_CONNECTED');
        }
        else {
            this.icon$.next('close-square-outline');
            this.status$.next('danger');
            this.log$.next('TIMER_TRACKER.AW_DISCONNECTED');
        }
    }
};
exports.ActivityWatchViewService = ActivityWatchViewService = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__param(2, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [activity_watch_electron_service_1.ActivityWatchElectronService,
        activity_watch_event_service_1.ActivityWatchEventService, Object])
], ActivityWatchViewService);
//# sourceMappingURL=activity-watch-view.service.js.map