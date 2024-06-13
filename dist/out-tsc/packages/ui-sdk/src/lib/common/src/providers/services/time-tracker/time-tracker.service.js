"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerService = exports.TimerQuery = exports.TimerStore = exports.createInitialTimerState = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
const moment_1 = require("moment");
const akita_1 = require("@datorama/akita");
const until_destroy_1 = require("@ngneat/until-destroy");
const ui_config_1 = require("@gauzy/ui-config");
const contracts_1 = require("@gauzy/contracts");
const store_service_1 = require("../store/store.service");
const shared_utils_1 = require("../../../utils/shared-utils");
const constants_1 = require("../../../constants");
function createInitialTimerState() {
    let timerConfig = {
        isBillable: true,
        organizationId: null,
        tenantId: null,
        projectId: null,
        taskId: null,
        organizationContactId: null,
        description: '',
        logType: contracts_1.TimeLogType.TRACKED,
        source: contracts_1.TimeLogSourceEnum.WEB_TIMER,
        tags: [],
        startedAt: null,
        stoppedAt: null
    };
    try {
        const config = localStorage.getItem('timerConfig');
        if (config) {
            timerConfig = {
                ...timerConfig,
                ...JSON.parse(config)
            };
        }
    }
    catch (error) { }
    return {
        showTimerWindow: false,
        duration: 0,
        currentSessionDuration: 0,
        running: false,
        position: { x: 0, y: 0 },
        timerConfig
    };
}
exports.createInitialTimerState = createInitialTimerState;
let TimerStore = exports.TimerStore = class TimerStore extends akita_1.Store {
    constructor() {
        super(createInitialTimerState());
    }
};
exports.TimerStore = TimerStore = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    (0, akita_1.StoreConfig)({ name: 'timer' }),
    tslib_1.__metadata("design:paramtypes", [])
], TimerStore);
let TimerQuery = exports.TimerQuery = class TimerQuery extends akita_1.Query {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
exports.TimerQuery = TimerQuery = tslib_1.__decorate([
    (0, core_1.Injectable)({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [TimerStore])
], TimerQuery);
let TimeTrackerService = exports.TimeTrackerService = class TimeTrackerService {
    constructor(timerStore, timerQuery, store, http) {
        this.timerStore = timerStore;
        this.timerQuery = timerQuery;
        this.store = store;
        this.http = http;
        this.showTimerWindow$ = this.timerQuery.select((state) => state.showTimerWindow);
        this.duration$ = this.timerQuery.select((state) => state.duration);
        this.currentSessionDuration$ = this.timerQuery.select((state) => state.currentSessionDuration);
        this.$running = this.timerQuery.select((state) => state.running);
        this.$timerConfig = this.timerQuery.select((state) => state.timerConfig);
        this._trackType$ = new BehaviorSubject_1.BehaviorSubject(this.timeType);
        this.trackType$ = this._trackType$.asObservable();
        this.timer$ = (0, rxjs_1.timer)(constants_1.BACKGROUND_SYNC_INTERVAL);
        this._runWorker();
        this.store.selectedOrganization$
            .pipe((0, operators_1.filter)((organization) => !!organization), (0, operators_1.tap)((organization) => (this.organization = organization)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe((organization) => {
            this.timerStore.update({
                timerConfig: {
                    ...this.timerConfig,
                    organizationId: organization.id,
                    tenantId: organization.tenantId
                }
            });
        });
    }
    /*
     * Check current timer status for employee only
     */
    async checkTimerStatus(payload) {
        delete payload.source;
        await this.getTimerStatus(payload)
            .then((status) => {
            this.duration = status.duration;
            if (status.lastLog && status.lastLog.isRunning) {
                this.currentSessionDuration = (0, moment_1.default)().diff((0, shared_utils_1.toLocal)(status.lastLog.startedAt), 'seconds');
            }
            else {
                this.currentSessionDuration = 0;
            }
            // On refresh/delete TimeLog, we need to clear interval to prevent duplicate interval
            this.turnOffTimer();
            if (status.running) {
                this.turnOnTimer();
            }
        })
            .catch(() => { });
    }
    get showTimerWindow() {
        const { showTimerWindow } = this.timerQuery.getValue();
        return showTimerWindow;
    }
    set showTimerWindow(value) {
        this.timerStore.update({
            showTimerWindow: value
        });
    }
    get duration() {
        const { duration } = this.timerQuery.getValue();
        return duration;
    }
    set duration(value) {
        this.timerStore.update({
            duration: value
        });
    }
    get currentSessionDuration() {
        const { currentSessionDuration } = this.timerQuery.getValue();
        return currentSessionDuration;
    }
    set currentSessionDuration(value) {
        this.timerStore.update({
            currentSessionDuration: value
        });
    }
    get timerConfig() {
        const { timerConfig } = this.timerQuery.getValue();
        return timerConfig;
    }
    set timerConfig(value) {
        this.timerStore.update({
            timerConfig: value
        });
    }
    get running() {
        const { running } = this.timerQuery.getValue();
        return running;
    }
    set running(value) {
        this.timerStore.update({
            running: value
        });
    }
    get position() {
        const { position } = this.timerQuery.getValue();
        return position;
    }
    set position(offSet) {
        this.timerStore.update({
            position: offSet
        });
    }
    /**
     * Retrieves the timer status using the provided parameters.
     * @param params The input parameters for retrieving timer status.
     * @returns A promise that resolves to the timer status.
     */
    getTimerStatus(params) {
        const todayStart = (0, shared_utils_1.toUTC)((0, moment_1.default)().startOf('day')).format('YYYY-MM-DD HH:mm:ss');
        const todayEnd = (0, shared_utils_1.toUTC)((0, moment_1.default)().endOf('day')).format('YYYY-MM-DD HH:mm:ss');
        return (0, rxjs_1.firstValueFrom)(this.http.get(`${constants_1.API_PREFIX}/timesheet/timer/status`, {
            params: (0, shared_utils_1.toParams)({
                ...params,
                todayStart,
                todayEnd
            })
        }));
    }
    // toggleTimer(request: ITimerToggleInput): Promise<ITimeLog> {
    // 	return firstValueFrom(
    // 		this.http.post<ITimeLog>(`${API_PREFIX}/timesheet/timer/toggle`, request)
    // 	);
    // }
    openAndStartTimer() {
        this.showTimerWindow = true;
        if (!this.running) {
            if (this.canStartTimer()) {
                this.currentSessionDuration = 0;
                this.toggle();
            }
        }
    }
    toggle() {
        if (this.running) {
            this.turnOffTimer();
            delete this.timerConfig.source;
            this.timerConfig = {
                ...this.timerConfig,
                stoppedAt: (0, shared_utils_1.toUTC)((0, moment_1.default)()).toDate()
            };
            this.currentSessionDuration = 0;
            return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/timer/stop`, this.timerConfig));
        }
        else {
            this.currentSessionDuration = 0;
            this.turnOnTimer();
            this.timerConfig = {
                ...this.timerConfig,
                startedAt: (0, shared_utils_1.toUTC)((0, moment_1.default)()).toDate(),
                source: contracts_1.TimeLogSourceEnum.WEB_TIMER
            };
            return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/timer/start`, this.timerConfig));
        }
    }
    turnOnTimer() {
        this.running = true;
        // post state of timer to worker on start timer
        this._worker.postMessage({
            isRunning: this.running,
            session: this.currentSessionDuration,
            duration: this.duration
        });
    }
    turnOffTimer() {
        this.running = false;
        // post running state to worker on turning off
        this._worker.postMessage({
            isRunning: this.running
        });
    }
    canStartTimer() {
        let isValid = true;
        if (this.organization) {
            if (this.organization.requireProject && !this.timerConfig.projectId) {
                isValid = false;
            }
            if (this.organization.requireTask && !this.timerConfig.taskId) {
                isValid = false;
            }
            if (this.organization.requireDescription && !this.timerConfig.description) {
                isValid = false;
            }
        }
        else {
            isValid = false;
        }
        return isValid;
    }
    setTimeLogType(timeType) {
        this._trackType$.next(timeType);
        this.timeType = timeType === contracts_1.TimeLogType.TRACKED ? contracts_1.TimeLogType.TRACKED : contracts_1.TimeLogType.MANUAL;
    }
    get timeType() {
        return this.timerConfig.logType;
    }
    set timeType(value) {
        this.timerConfig = {
            ...this.timerConfig,
            logType: value
        };
    }
    /*
     * Clear time tracker local store
     */
    clearTimeTracker() {
        this.timerStore.reset();
    }
    _runWorker() {
        if (typeof Worker !== 'undefined') {
            try {
                this._worker = new Worker(new URL(ui_config_1.environment.CLIENT_BASE_URL + '/assets/workers/time-tracker.js'), {
                    type: 'module'
                });
                // retrieve message post from time tracker worker
                this._worker.onmessage = ({ data }) => {
                    this.currentSessionDuration = data.session;
                    this.duration = data.todayWorked;
                };
            }
            catch (err) {
                console.log('Invalid Time Tracker worker configuration', err.message);
            }
        }
        else {
            console.log('Web worker does not supported on your browser');
        }
    }
    remoteToggle() {
        if (this.running) {
            this.turnOffTimer();
            this.timerConfig = {
                ...this.timerConfig,
                source: this.timerSynced.source,
                startedAt: this.timerSynced.startedAt,
                stoppedAt: this.timerSynced.stoppedAt
            };
            this.currentSessionDuration = 0;
            return this.timerSynced.lastLog;
        }
        else {
            this.duration = this.timerSynced.lastLog.duration;
            this.timerConfig = {
                ...this.timerConfig,
                organizationId: this.timerSynced.lastLog.organizationId,
                tenantId: this.timerSynced.lastLog.tenantId,
                projectId: this.timerSynced.lastLog.projectId,
                taskId: this.timerSynced.lastLog.taskId,
                organizationContactId: this.timerSynced.lastLog.organizationContactId,
                description: this.timerSynced.lastLog.description,
                source: this.timerSynced.source,
                tags: this.timerSynced.lastLog.tags,
                startedAt: this.timerSynced.startedAt,
                stoppedAt: this.timerSynced.stoppedAt
            };
            this.turnOnTimer();
            return this.timerSynced.lastLog;
        }
    }
    get timerSynced() {
        return this._timerSynced;
    }
    set timerSynced(value) {
        this._timerSynced = value;
    }
    ngOnDestroy() {
        this._worker.terminate();
    }
};
exports.TimeTrackerService = TimeTrackerService = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)(),
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [TimerStore,
        TimerQuery,
        store_service_1.Store,
        http_1.HttpClient])
], TimeTrackerService);
//# sourceMappingURL=time-tracker.service.js.map