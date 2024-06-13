"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerStatusService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const until_destroy_1 = require("@ngneat/until-destroy");
const common_1 = require("@gauzy/ui-sdk/common");
const rxjs_1 = require("rxjs");
const factory_1 = require("./factory");
const concretes_1 = require("./concretes");
const time_tracker_service_1 = require("../time-tracker.service");
const services_1 = require("../../services");
const app_constants_1 = require("../../constants/app.constants");
let TimeTrackerStatusService = exports.TimeTrackerStatusService = class TimeTrackerStatusService {
    constructor(_timeTrackerService, _store) {
        this._timeTrackerService = _timeTrackerService;
        this._store = _store;
        this._icon$ = new rxjs_1.BehaviorSubject(null);
        this._external$ = new rxjs_1.Subject();
        this._backgroundSync$ = (0, rxjs_1.timer)(app_constants_1.BACKGROUND_SYNC_INTERVAL);
        (0, rxjs_1.defer)(() => (0, rxjs_1.of)(!!this._store.token && !this._store.isOffline && !!this._store.user.employeeId && !!this._store.tenantId).pipe((0, rxjs_1.switchMap)((isEmployeeLoggedIn) => isEmployeeLoggedIn
            ? (0, rxjs_1.from)(this.status()).pipe((0, rxjs_1.catchError)(() => rxjs_1.EMPTY), (0, until_destroy_1.untilDestroyed)(this))
            : rxjs_1.EMPTY), (0, until_destroy_1.untilDestroyed)(this)))
            .pipe((0, rxjs_1.tap)((status) => {
            const remoteTimer = new concretes_1.RemoteTimer({
                ...status.lastLog,
                duration: status.duration
            });
            this._icon$.next(factory_1.TimerIconFactory.create(remoteTimer.source));
            if (!remoteTimer.running || !remoteTimer.isExternalSource)
                this._icon$.next(null);
            this._external$.next(remoteTimer);
        }), (0, rxjs_1.repeat)({
            delay: () => this._backgroundSync$
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.external$
            .pipe((0, common_1.distinctUntilChange)(), (0, rxjs_1.tap)((remoteTimer) => (this.remoteTimer = remoteTimer)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    get icon$() {
        return this._icon$.asObservable();
    }
    get external$() {
        return this._external$.asObservable();
    }
    status() {
        if (!this._store?.tenantId || !this._store?.organizationId) {
            return;
        }
        const { tenantId, organizationId } = this._store;
        return this._timeTrackerService.getTimerStatus({
            tenantId,
            organizationId
        });
    }
    get remoteTimer() {
        return this._remoteTimer;
    }
    set remoteTimer(value) {
        this._remoteTimer = value;
    }
};
exports.TimeTrackerStatusService = TimeTrackerStatusService = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService, services_1.Store])
], TimeTrackerStatusService);
//# sourceMappingURL=time-tracker-status.service.js.map