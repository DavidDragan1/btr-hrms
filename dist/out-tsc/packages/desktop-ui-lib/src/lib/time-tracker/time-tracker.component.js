"use strict";
var TimeTrackerComponent_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const time_tracker_service_1 = require("./time-tracker.service");
const moment = require("moment");
const forms_1 = require("@angular/forms");
const _ = require("underscore");
const angular2_smart_table_1 = require("angular2-smart-table");
const platform_browser_1 = require("@angular/platform-browser");
const rxjs_1 = require("rxjs");
const services_1 = require("../electron/services");
const until_destroy_1 = require("@ngneat/until-destroy");
require("moment-duration-format");
const contracts_1 = require("@gauzy/contracts");
const common_1 = require("@gauzy/ui-sdk/common");
const services_2 = require("../services");
const time_tracker_status_service_1 = require("./time-tracker-status/time-tracker-status.service");
const offline_sync_1 = require("../offline-sync");
const image_viewer_service_1 = require("../image-viewer/image-viewer.service");
const auth_1 = require("../auth");
const language_selector_service_1 = require("../language/language-selector.service");
const core_2 = require("@ngx-translate/core");
const always_on_service_1 = require("../always-on/always-on.service");
const task_render_1 = require("./task-render");
const task_render_cell_component_1 = require("./task-render/task-render-cell/task-render-cell.component");
const task_status_component_1 = require("./task-render/task-status/task-status.component");
const constants_1 = require("../constants");
const tasks_component_1 = require("../tasks/tasks.component");
const integrations_1 = require("../integrations");
var TimerStartMode;
(function (TimerStartMode) {
    TimerStartMode["MANUAL"] = "manual";
    TimerStartMode["REMOTE"] = "remote";
    TimerStartMode["STOP"] = "stop";
})(TimerStartMode || (TimerStartMode = {}));
let TimeTrackerComponent = exports.TimeTrackerComponent = TimeTrackerComponent_1 = class TimeTrackerComponent {
    constructor(electronService, timeTrackerService, dialogService, toastrService, sanitize, _ngZone, iconLibraries, _errorHandlerService, _nativeNotifier, _toastrNotifier, _store, _loggerService, _timeTrackerStatus, _timeSlotQueueService, _imageViewerService, _authStrategy, _languageSelectorService, _translateService, _alwaysOnService, _environment, _activityWatchViewService) {
        this.electronService = electronService;
        this.timeTrackerService = timeTrackerService;
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.sanitize = sanitize;
        this._ngZone = _ngZone;
        this.iconLibraries = iconLibraries;
        this._errorHandlerService = _errorHandlerService;
        this._nativeNotifier = _nativeNotifier;
        this._toastrNotifier = _toastrNotifier;
        this._store = _store;
        this._loggerService = _loggerService;
        this._timeTrackerStatus = _timeTrackerStatus;
        this._timeSlotQueueService = _timeSlotQueueService;
        this._imageViewerService = _imageViewerService;
        this._authStrategy = _authStrategy;
        this._languageSelectorService = _languageSelectorService;
        this._translateService = _translateService;
        this._alwaysOnService = _alwaysOnService;
        this._environment = _environment;
        this._activityWatchViewService = _activityWatchViewService;
        this._lastTotalWorkedToday$ = new rxjs_1.BehaviorSubject(0);
        this._lastTotalWorkedWeek$ = new rxjs_1.BehaviorSubject(0);
        this._permissions$ = new rxjs_1.Subject();
        this._lastTime = 0;
        this._isLockSyncProcess = false;
        this._startMode = TimerStartMode.STOP;
        this._isSpecialLogout = false;
        this._isRestartAndUpdate = false;
        this._isOpenDialog = false;
        this._dialog = null;
        this._timeZoneManager = services_2.TimeZoneManager;
        this._remoteSleepLock = false;
        this._isReady = false;
        this.start$ = new rxjs_1.BehaviorSubject(false);
        this.organization = {};
        this.projectSelect = null;
        this.taskSelect = null;
        this.teamSelect = null;
        this.errors = {};
        this.note = null;
        this.todayDuration$ = new rxjs_1.BehaviorSubject('--h --m');
        this.weeklyDuration$ = new rxjs_1.BehaviorSubject('--h --m');
        this.userOrganization$ = new rxjs_1.BehaviorSubject({});
        this.lastScreenCapture$ = new rxjs_1.BehaviorSubject({});
        this.userPermission = [];
        this.quitApp = false;
        this.organizationContactId = null;
        this.employeeId = null;
        this.argFromMain = null;
        this.token = null;
        this.apiHost = null;
        this.screenshots$ = new rxjs_1.BehaviorSubject([]);
        this.selectedTimeSlot = null;
        this.lastTimeSlot = null;
        this.invalidTimeLog = null;
        this.loading = false;
        this.appSetting$ = new rxjs_1.BehaviorSubject(null);
        this.isExpand$ = new rxjs_1.BehaviorSubject(false);
        this.isCollapse$ = new rxjs_1.BehaviorSubject(true);
        this.dialogType = {
            deleteLog: {
                name: 'deleteLog',
                message: 'TIMER_TRACKER.DIALOG.REMOVE_SCREENSHOT'
            },
            changeClient: {
                name: 'changeClient',
                message: 'TIMER_TRACKER.DIALOG.CHANGE_CLIENT'
            },
            timeTrackingOption: {
                name: 'timeTrackingOption',
                message: 'TIMER_TRACKER.DIALOG.RESUME_TIMER'
            }
        };
        this.expandIcon = 'arrow-right';
        this.tableData = [];
        this.isTrackingEnabled = true;
        this.isAddTask = false;
        this.sound = null;
        this.hasTaskPermission$ = new rxjs_1.BehaviorSubject(false);
        this.hasProjectPermission$ = new rxjs_1.BehaviorSubject(false);
        this.hasContactPermission$ = new rxjs_1.BehaviorSubject(false);
        this._teams$ = new rxjs_1.BehaviorSubject([]);
        this._timeRun$ = new rxjs_1.BehaviorSubject('00:00:00');
        this._projects$ = new rxjs_1.BehaviorSubject([]);
        this._tasks$ = new rxjs_1.BehaviorSubject([]);
        this._organizationContacts$ = new rxjs_1.BehaviorSubject([]);
        this._isOffline$ = new rxjs_1.BehaviorSubject(false);
        this._inQueue$ = new rxjs_1.BehaviorSubject({ size: 0, inProgress: false });
        this._isRefresh$ = new rxjs_1.BehaviorSubject(false);
        this._weeklyLimit$ = new rxjs_1.BehaviorSubject(Infinity);
        this._isOver$ = new rxjs_1.BehaviorSubject(false);
        /* Adding a new project to the list of projects. */
        this.addProject = async (name) => {
            try {
                const { tenantId } = this._store;
                const organizationId = this._store.organizationId;
                const request = {
                    name,
                    organizationId,
                    tenantId,
                    owner: contracts_1.ProjectOwnerEnum.CLIENT,
                    ...(this.organizationContactId ? { organizationContactId: this.organizationContactId } : {})
                };
                request['members'] = [{ ...this.userData.employee }];
                console.log('Request', request);
                const project = await this.timeTrackerService.createNewProject(request, {
                    ...this.userData,
                    token: this.token,
                    apiHost: this.apiHost
                });
                const projects = this._projects$.getValue();
                this._projects$.next(projects.concat([project]));
                this.projectSelect = project.id;
                this._toastrNotifier.success(this._translateService.instant('TIMER_TRACKER.TOASTR.PROJECT_ADDED'));
            }
            catch (error) {
                console.log(error);
            }
        };
        /* Adding a new task to the list of tasks. */
        this.addNewTask = async (title) => {
            if (!title) {
                return;
            }
            const { tenantId, organizationId } = this._store;
            const data = {
                tenantId,
                organizationId,
                token: this.token,
                apiHost: this.apiHost,
                projectId: this.projectSelect
            };
            try {
                const member = { ...this.userData.employee };
                const task = await this.timeTrackerService.saveNewTask(data, {
                    title,
                    organizationId,
                    tenantId,
                    status: contracts_1.TaskStatusEnum.IN_PROGRESS,
                    dueDate: moment().add(1, 'day').utc().toDate(),
                    estimate: 3600,
                    ...(member.id && { members: [member] }),
                    ...(this.projectSelect && {
                        projectId: this.projectSelect,
                        project: this.selectedProject
                    })
                });
                const tasks = this._tasks$.getValue();
                this._tasks$.next(tasks.concat(task));
                this.taskSelect = task.id;
                this._toastrNotifier.success(this._translateService.instant('TIMER_TRACKER.TOASTR.TASK_ADDED'));
            }
            catch (error) {
                console.log('ERROR', error);
            }
        };
        /* Creating a new contact for the organization. */
        this.addContact = async (name) => {
            try {
                const { tenantId, organizationId } = this._store;
                const member = { ...this.userData.employee };
                const payload = {
                    name,
                    organizationId,
                    tenantId,
                    contactType: contracts_1.ContactType.CLIENT,
                    ...(member.id && { members: [member] })
                };
                const contact = await this.timeTrackerService.createNewContact(payload, {
                    ...this.userData,
                    token: this.token,
                    apiHost: this.apiHost
                });
                const contacts = this._organizationContacts$.getValue();
                this._organizationContacts$.next(contacts.concat([contact]));
                this.organizationContactId = contact.id;
                this._toastrNotifier.success(this._translateService.instant('TIMER_TRACKER.TOASTR.CLIENT_ADDED'));
            }
            catch (error) {
                console.log('ERROR', error);
            }
        };
        this.iconLibraries.registerFontPack('font-awesome', {
            packClass: 'fas',
            iconClassPrefix: 'fa'
        });
        this._permissions$
            .pipe((0, rxjs_1.filter)((permissions) => permissions.length > 0), (0, rxjs_1.tap)((permissions) => {
            this.hasTaskPermission$.next(permissions.includes(contracts_1.PermissionsEnum.ORG_TASK_ADD));
            this.hasProjectPermission$.next(permissions.includes(contracts_1.PermissionsEnum.ORG_PROJECT_ADD));
            this.hasContactPermission$.next(permissions.includes(contracts_1.PermissionsEnum.ORG_CONTACT_EDIT));
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.isOffline$
            .pipe((0, rxjs_1.tap)((value) => {
            this._store.isOffline = value;
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    get _sourceData() {
        return this._sourceData$.getValue();
    }
    get _hasTaskPermission() {
        return this.hasTaskPermission$.getValue();
    }
    get _isOffline() {
        return this._isOffline$.getValue();
    }
    get _lastTotalWorkedToday() {
        return this._lastTotalWorkedToday$.getValue();
    }
    get _lastTotalWorkedWeek() {
        return this._lastTotalWorkedWeek$.getValue();
    }
    get teams$() {
        return this._teams$.asObservable();
    }
    get teams() {
        return this._teams$.getValue();
    }
    get selectedTeam() {
        const [selected] = this.teams.filter((team) => team.id === this.teamSelect);
        return selected;
    }
    get tasks() {
        return this._tasks$.getValue();
    }
    get selectedTask() {
        const [selected] = this.tasks.filter((task) => task.id === this.taskSelect);
        return selected;
    }
    set taskTable(content) {
        if (content) {
            this._taskTable = content;
            this._onChangedSource();
        }
    }
    get timeRun$() {
        return this._timeRun$.asObservable();
    }
    get projects$() {
        return this._projects$.asObservable();
    }
    get tasks$() {
        return this._tasks$.asObservable();
    }
    get organizationContacts$() {
        return this._organizationContacts$.asObservable();
    }
    get sourceData$() {
        return this._sourceData$.asObservable();
    }
    get isOffline$() {
        return this._isOffline$.asObservable();
    }
    get inQueue$() {
        return this._inQueue$.asObservable();
    }
    get isRefresh$() {
        return this._isRefresh$.asObservable();
    }
    get weeklyLimit$() {
        return this._weeklyLimit$.asObservable();
    }
    get isOver$() {
        return this._isOver$.asObservable();
    }
    get start() {
        return this.start$.getValue();
    }
    get todayDuration() {
        return this.todayDuration$.getValue();
    }
    get userOrganization() {
        return this.userOrganization$.getValue();
    }
    get lastScreenCapture() {
        return this.lastScreenCapture$.getValue();
    }
    get screenshots() {
        return this.screenshots$.getValue();
    }
    get appSetting() {
        return this.appSetting$.getValue();
    }
    get isExpand() {
        return this.isExpand$.getValue();
    }
    get inQueue() {
        return this._inQueue$.getValue();
    }
    /**
     * It returns the project that matches the projectSelect value
     * @returns The project that matches the projectSelect id.
     */
    get selectedProject() {
        const projects = this._projects$.getValue();
        return projects.filter((project) => project.id === this.projectSelect)[0];
    }
    get _weeklyLimit() {
        return this._weeklyLimit$.getValue();
    }
    get isRemoteTimer() {
        return this._startMode === TimerStartMode.REMOTE;
    }
    async resetAtMidnight() {
        if (services_2.TimeTrackerDateManager.isMidnight) {
            try {
                await this.restart();
            }
            catch (error) {
                this._errorHandlerService.handleError(error);
            }
        }
    }
    merge(tasks, statistics) {
        let arr = [];
        arr = arr.concat(statistics, tasks);
        return arr.reduce((result, current) => {
            const existing = result.find((item) => item.id === current.id);
            if (existing) {
                const updatedAtMoment = moment(existing?.updatedAt, moment.ISO_8601).utc(true);
                Object.assign(existing, current, updatedAtMoment.isAfter(current?.updatedAt)
                    ? {
                        updatedAt: updatedAtMoment.toISOString()
                    }
                    : {});
            }
            else {
                result.push(current);
            }
            return result.filter((task) => !!task?.id);
        }, []);
    }
    countDuration(count, isForcedSync) {
        if (!this.start || isForcedSync) {
            this._lastTotalWorkedToday$.next(count.todayDuration);
            this._lastTotalWorkedWeek$.next(count.weekDuration);
            this._alwaysOnService.update('00:00:00', this._lastTotalWorkedToday);
        }
    }
    async _deleteSyncedTimeslot() {
        try {
            await this.getTimerStatus(this.argFromMain);
            if (this.timerStatus.running) {
                await this.toggleStart(false);
            }
            const res = await this.timeTrackerService.deleteTimeSlot({
                ...this.argFromMain,
                timeSlotId: this.selectedTimeSlot.id
            });
            if (res) {
                // Delete selected time slot and return last time slot
                const timeSlotId = await this.electronService.ipcRenderer.invoke('DELETE_TIME_SLOT', this.selectedTimeSlot.id);
                this.selectedTimeSlot.id = timeSlotId;
                // Refresh screen
                await Promise.allSettled([
                    this.getTodayTime(this.argFromMain, true),
                    this.getLastTimeSlotImage({ timeSlotId })
                ]);
            }
        }
        catch (e) {
            console.log('error on delete', e);
        }
    }
    /**
     * Check if user have required authorization to use time tracker
     */
    _passedAllAuthorizations() {
        let isPassed = false;
        // Verify if tracking is enabled
        if (!this.userData?.employee?.isTrackingEnabled) {
            this.toastrService.show(this._translateService.instant('TIMER_TRACKER.TOASTR.CANT_RUN_TIMER'), `Warning`, {
                status: 'danger'
            });
            isPassed = false;
        }
        // Verify work status of user
        else if (!this.userData?.employee?.startedWorkOn ||
            !this.userData?.employee?.isActive ||
            this.userData?.employee?.workStatus) {
            // Verify if user are already started to work for organization, if yes you can run time tracker else no
            if (!this.userData?.employee?.startedWorkOn) {
                this.toastrService.show(this._translateService.instant('TIMER_TRACKER.TOASTR.NOT_AUTHORIZED'), `Warning`, {
                    status: 'danger'
                });
            }
            // Verify if user are deleted for organization, if yes can't run time tracker
            if (this.userData?.employee?.startedWorkOn && !this.userData?.employee?.isActive) {
                this.toastrService.show(this._translateService.instant('TIMER_TRACKER.TOASTR.ACCOUNT_DELETED'), `Warning`, {
                    status: 'danger'
                });
            }
            isPassed = false;
        }
        else
            isPassed = true;
        return isPassed;
    }
    _onChangedSource() {
        this._taskTable.source.onChangedSource
            .pipe((0, rxjs_1.tap)(() => this._clearItem()), (0, rxjs_1.tap)(() => {
            if (this.taskSelect) {
                this._taskTable.grid.dataSet.getRows().map((row) => {
                    if (row.getData().id === this.taskSelect) {
                        return this._taskTable.grid.dataSet.selectRow(row);
                    }
                });
            }
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    _clearItem() {
        if (this._taskTable && this._taskTable.grid) {
            this._taskTable.grid.dataSet['willSelect'] = 'indexed';
            this._taskTable.grid.dataSet.deselectAll();
        }
    }
    async _mappingScreenshots(args) {
        try {
            let screenshots = await Promise.all(args.map(async (arg) => {
                if (!arg.screenshots.length)
                    return null;
                const fullUrl = 'data:image/png;base64,' + arg.screenshots[0].b64img;
                const thumbUrl = await (0, common_1.compressImage)(fullUrl, 320, 200);
                return {
                    textTime: moment(arg.recordedAt).fromNow(),
                    createdAt: arg.recordedAt,
                    recordedAt: arg.recordedAt,
                    id: arg.id,
                    fullUrl,
                    thumbUrl
                };
            }));
            screenshots = screenshots.filter((screenshot) => !!screenshot);
            if (screenshots.length > 0) {
                const [lastCaptureScreen] = screenshots;
                console.log('Last Capture Screen:', lastCaptureScreen);
                this.lastScreenCapture$.next(lastCaptureScreen);
                this.screenshots$.next(screenshots);
                console.log('screenshots from db', screenshots);
                await this.localImage(this.lastScreenCapture.thumbUrl);
            }
        }
        catch (error) {
            this._errorHandlerService.handleError(error);
        }
    }
    async _toggle(timer, onClick) {
        try {
            const { lastTimer, isStarted } = timer;
            const isRemote = this._timeTrackerStatus.remoteTimer &&
                this.xor(!isStarted, this._timeTrackerStatus.remoteTimer.running) &&
                this._startMode === TimerStartMode.REMOTE;
            const params = {
                token: this.token,
                note: this.note,
                projectId: this.projectSelect,
                taskId: this.taskSelect,
                organizationId: this._store.organizationId,
                tenantId: this._store.tenantId,
                organizationContactId: this.organizationContactId,
                apiHost: this.apiHost
            };
            let timelog = null;
            console.log('[TIMER_STATE]', lastTimer);
            if (isStarted) {
                if (!this._isOffline && !this._remoteSleepLock) {
                    try {
                        timelog = isRemote
                            ? this._timeTrackerStatus.remoteTimer.lastLog
                            : await this.timeTrackerService.toggleApiStart({
                                ...lastTimer,
                                ...params
                            });
                    }
                    catch (error) {
                        lastTimer.isStartedOffline = true;
                        this._loggerService.log.error(error);
                    }
                }
                this.loading = false;
            }
            else {
                if (!this._isOffline) {
                    try {
                        timelog =
                            isRemote ||
                                this._remoteSleepLock ||
                                (this.isRemoteTimer && (this._isSpecialLogout || this.quitApp))
                                ? this._timeTrackerStatus.remoteTimer.lastLog
                                : await this.timeTrackerService.toggleApiStop({
                                    ...lastTimer,
                                    ...params
                                });
                    }
                    catch (error) {
                        lastTimer.isStoppedOffline = true;
                        this._loggerService.log.error(error);
                    }
                }
                this.start$.next(false);
                this.loading = false;
            }
            rxjs_1.asapScheduler.schedule(async () => {
                try {
                    await this.electronService.ipcRenderer.invoke('UPDATE_SYNCED_TIMER', {
                        lastTimer: timelog,
                        ...lastTimer
                    });
                    await this.getTimerStatus(params);
                }
                catch (error) {
                    this._errorHandlerService.handleError(error);
                }
            });
        }
        catch (error) {
            let messageError = error.message;
            if (messageError.includes('Http failure response')) {
                messageError = `Can't connect to api server`;
            }
            else {
                messageError = 'Internal server error';
            }
            this.toastrService.show(messageError, `Warning`, {
                status: 'danger'
            });
            this._loggerService.log.info(`Timer Toggle Catch: ${moment().format()}`, error);
            this.loading = false;
        }
    }
    _loadSmartTableSettings() {
        this.smartTableSettings = {
            columns: {
                title: {
                    title: this._translateService.instant('TIMER_TRACKER.TASK'),
                    type: 'custom',
                    renderComponent: task_render_cell_component_1.TaskRenderCellComponent,
                    width: '40%',
                    componentInitFunction: (instance, cell) => {
                        instance.rowData = cell.getRow().getData();
                    }
                },
                duration: {
                    title: this._translateService.instant('TIMESHEET.DURATION'),
                    type: 'custom',
                    renderComponent: task_render_1.TaskDurationComponent,
                    componentInitFunction: (instance, cell) => {
                        instance.rowData = cell.getRow().getData();
                    }
                },
                taskProgress: {
                    title: this._translateService.instant('MENU.IMPORT_EXPORT.PROGRESS'),
                    type: 'custom',
                    renderComponent: task_render_1.TaskProgressComponent,
                    width: '192px',
                    componentInitFunction: (instance, cell) => {
                        instance.rowData = cell.getRow().getData();
                        instance.updated.subscribe({
                            next: async (estimate) => {
                                const { tenantId, organizationId } = this._store;
                                const id = instance.task.id;
                                const title = instance.task.title;
                                const status = instance.task.status;
                                const taskUpdateInput = {
                                    organizationId,
                                    tenantId,
                                    estimate,
                                    status,
                                    title
                                };
                                await this.timeTrackerService.updateTask(id, taskUpdateInput);
                                this._toastrNotifier.success(this._translateService.instant('TOASTR.MESSAGE.UPDATED'));
                                this.refreshTimer();
                            },
                            error: (err) => {
                                console.warn(err);
                            }
                        });
                    }
                },
                taskStatus: {
                    title: this._translateService.instant('SM_TABLE.STATUS'),
                    type: 'custom',
                    renderComponent: task_status_component_1.TaskStatusComponent,
                    componentInitFunction: (instance, cell) => {
                        instance.rowData = cell.getRow().getData();
                        instance.updated.subscribe({
                            next: async (taskStatus) => {
                                const { tenantId, organizationId } = this._store;
                                const id = instance.task.id;
                                const title = instance.task.title;
                                const status = taskStatus.name;
                                const taskUpdateInput = {
                                    organizationId,
                                    tenantId,
                                    status,
                                    title,
                                    taskStatus
                                };
                                await this.timeTrackerService.updateTask(id, taskUpdateInput);
                                this._toastrNotifier.success(this._translateService.instant('TOASTR.MESSAGE.UPDATED'));
                                this.refreshTimer();
                            },
                            error: (err) => {
                                console.warn(err);
                            }
                        });
                    }
                }
            },
            hideSubHeader: true,
            actions: false,
            noDataMessage: this._translateService.instant('SM_TABLE.NO_DATA.TASK'),
            pager: {
                display: true,
                perPage: 10,
                page: 1
            }
        };
    }
    async loadStatuses() {
        if (!this._store.organizationId && !this._store.tenantId) {
            return;
        }
        const { organizationId, tenantId } = this._store;
        this._store.statuses = await this.timeTrackerService.statuses({
            tenantId,
            organizationId,
            ...(this.projectSelect
                ? {
                    projectId: this.projectSelect
                }
                : {})
        });
    }
    ngOnInit() {
        this._sourceData$ = new rxjs_1.BehaviorSubject(new angular2_smart_table_1.LocalDataSource(this.tableData));
        this._sourceData.setSort([{ field: 'updatedAt', direction: 'desc' }]);
        this.tasks$
            .pipe((0, rxjs_1.tap)(async (tasks) => {
            if (tasks.length > 0) {
                tasks = tasks.map((row) => ({ ...row, isSelected: row.id === this.taskSelect }));
            }
            else {
                tasks = [];
                this.taskSelect = null;
            }
            this.tableData = tasks;
            await this._sourceData.load(this.tableData);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._lastTotalWorkedToday$
            .pipe((0, rxjs_1.tap)((todayDuration) => {
            this.todayDuration$.next(moment.duration(todayDuration, 'seconds').format('hh[h] mm[m]', { trim: false, trunc: true }));
            this.electronService.ipcRenderer.send('update_tray_time_update', this.todayDuration);
            this.electronService.ipcRenderer.send('update_tray_time_title', {
                timeRun: moment.duration(todayDuration, 'seconds').format('hh:mm:ss', { trim: false })
            });
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._timeRun$
            .pipe((0, rxjs_1.tap)((current) => {
            this._alwaysOnService.update(current, this._lastTotalWorkedToday);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._lastTotalWorkedWeek$
            .pipe((0, rxjs_1.tap)((weekDuration) => {
            this.weeklyDuration$.next(moment.duration(weekDuration, 'seconds').format('hh[h] mm[m]', { trim: false, trunc: true }));
            this._isOver$.next(weekDuration > this._weeklyLimit * 3600);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.start$
            .pipe((0, rxjs_1.tap)((isStart) => {
            this._alwaysOnService.run(isStart ? always_on_service_1.AlwaysOnStateEnum.STARTED : always_on_service_1.AlwaysOnStateEnum.STOPPED);
            this._activityWatchViewService.isTimerRunning$.next(isStart);
        }), (0, rxjs_1.filter)((isStart) => !isStart), (0, rxjs_1.tap)(() => {
            this._timeRun$.next('00:00:00');
            this._lastTime = 0;
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._timeTrackerStatus.external$
            .pipe((0, rxjs_1.filter)((remoteTimer) => this.xor(this.start, remoteTimer.running) &&
            !this._isLockSyncProcess &&
            this._isReady &&
            this.inQueue.size === 0), (0, rxjs_1.tap)(async (remoteTimer) => {
            this.projectSelect = remoteTimer.lastLog.projectId;
            this.taskSelect = remoteTimer.lastLog.taskId;
            this.note = remoteTimer.lastLog.description;
            this.teamSelect = remoteTimer.lastLog.organizationTeamId;
            this.organizationContactId = remoteTimer.lastLog.organizationContactId;
            await this.toggleStart(remoteTimer.running, false);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._timeSlotQueueService.updater$
            .pipe((0, common_1.distinctUntilChange)(), (0, rxjs_1.tap)((interval) => (0, rxjs_1.from)(this.getLastTimeSlotImage(interval))), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._timeSlotQueueService.viewQueueStateUpdater$
            .pipe((0, rxjs_1.tap)(({ inProgress }) => this._inQueue$.next({
            ...this.inQueue,
            inProgress
        })), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.userOrganization$
            .pipe((0, rxjs_1.tap)((organization) => (services_2.TimeTrackerDateManager.organization = organization)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._alwaysOnService.state$
            .pipe((0, rxjs_1.filter)((state) => state === always_on_service_1.AlwaysOnStateEnum.LOADING), (0, rxjs_1.concatMap)(() => this.toggleStart(!this.start, true)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this._loadSmartTableSettings();
    }
    xor(a, b) {
        return (a && !b) || (!a && b);
    }
    ngAfterViewInit() {
        this.electronService.ipcRenderer.on('timer_push', (event, arg) => this._ngZone.run(async () => {
            await this.setTime(arg);
        }));
        this.electronService.ipcRenderer.on('timer_tracker_show', (event, arg) => this._ngZone.run(async () => {
            if (!this._store.user?.employee)
                return;
            this._isOffline$.next(arg.isOffline ? arg.isOffline : this._isOffline);
            this._store.host = arg.apiHost;
            this.apiHost = arg.apiHost;
            this.argFromMain = arg;
            this.taskSelect = arg.taskId;
            this.projectSelect = arg.projectId;
            this.organizationContactId = arg.organizationContactId;
            this.teamSelect = arg.organizationTeamId;
            this.token = arg.token;
            this.note = arg.note;
            this._activityWatchViewService.aw$.next(!!arg.aw?.isAw);
            this.appSetting$.next(arg.settings);
            this._timeZoneManager.changeZone(this.appSetting?.zone || services_2.ZoneEnum.LOCAL);
            if (!this._isReady && this.appSetting?.alwaysOn) {
                this.electronService.ipcRenderer.send('show_ao');
            }
            const parallelizedTasks = [
                this.loadStatuses(),
                this.getTeams(arg),
                this.getClient(arg),
                this.getProjects(arg),
                this.getTask(arg),
                this.getTodayTime(arg),
                this.setTimerDetails()
            ];
            if (arg.timeSlotId) {
                parallelizedTasks.push(this.getLastTimeSlotImage(arg));
            }
            await Promise.allSettled(parallelizedTasks);
            this._isReady = true;
            this._isRefresh$.next(false);
            if (!this._isLockSyncProcess && this.inQueue.size > 0) {
                this.electronService.ipcRenderer.send('check-interrupted-sequences');
            }
        }));
        this.electronService.ipcRenderer.on('start_from_tray', async (event, arg) => this._ngZone.run(async () => {
            this.taskSelect = arg.taskId;
            this.projectSelect = arg.projectId;
            this.teamSelect = arg.organizationTeamId;
            this.note = arg.note;
            this._activityWatchViewService.aw$.next(!!arg.aw?.isAw);
            await this.setTimerDetails();
            await this.toggleStart(true);
        }));
        this.electronService.ipcRenderer.on('stop_from_tray', (event, arg) => this._ngZone.run(async () => {
            // Check if arg is defined and has the quitApp property set to true
            if (arg?.quitApp) {
                // Set the quitApp flag to true
                this.quitApp = true;
            }
            // Check if quitApp flag is already set, and if so, force stop the timer and return
            if (this.quitApp) {
                await this.stopTimer(true, true);
                return;
            }
            console.log('stop_from_tray this.start=', this.start);
            // Check if the start flag is set, and if so, toggle the start state to false
            if (this.start) {
                await this.toggleStart(false);
            }
            else {
                console.log('this.start is false, doing nothing.');
            }
        }));
        this.electronService.ipcRenderer.on('set_project_task_reply', (event, arg) => this._ngZone.run(async () => {
            await this.setProject(arg.projectId);
            this.setTask(arg.taskId);
            this.note = arg.note;
            this._activityWatchViewService.aw$.next(arg.aw && arg.aw.isAw ? arg.aw.isAw : false);
        }));
        this.electronService.ipcRenderer.on('take_screenshot', (event, arg) => this._ngZone.run(async () => {
            try {
                this._loggerService.log.info(`Take Screenshot:`, arg);
                const screens = [];
                const thumbSize = this.determineScreenshot(arg.screenSize);
                const sources = await this.electronService.desktopCapturer.getSources({
                    types: ['screen'],
                    thumbnailSize: thumbSize
                });
                sources.forEach((source) => {
                    this._loggerService.log.info('screenshot_res', source);
                    screens.push({
                        img: source.thumbnail.toPNG(),
                        name: source.name,
                        id: source.display_id
                    });
                    this._loggerService.log.info('screenshot data', screens);
                });
                if (!arg.isTemp) {
                    event.sender.send('save_screen_shoot', {
                        screens: screens,
                        timeSlotId: arg.timeSlotId,
                        quitApp: this.quitApp
                    });
                }
                else {
                    event.sender.send('save_temp_screenshot', {
                        screens: screens,
                        timeSlotId: arg.timeSlotId,
                        quitApp: this.quitApp
                    });
                }
            }
            catch (error) {
                this._errorHandlerService.handleError(error);
            }
        }));
        this.electronService.ipcRenderer.on('refresh_time_log', (event, arg) => this._ngZone.run(async () => {
            await this.getTodayTime(arg);
        }));
        this.electronService.ipcRenderer.on('show_last_capture', (event, arg) => this._ngZone.run(async () => {
            await this.getLastTimeSlotImage(arg);
        }));
        this.electronService.ipcRenderer.on('last_capture_local', (event, arg) => this._ngZone.run(() => {
            console.log('Last Capture Screenshot:');
            this.lastScreenCapture$.next({
                fullUrl: this.sanitize.bypassSecurityTrustUrl(arg.fullUrl),
                thumbUrl: this.sanitize.bypassSecurityTrustUrl(arg.fullUrl),
                textTime: moment().fromNow(),
                createdAt: Date.now(),
                recordedAt: Date.now()
            });
            this.screenshots$.next([...this.screenshots]);
        }));
        this.electronService.ipcRenderer.on('get_user_detail', (event, arg) => this._ngZone.run(async () => {
            try {
                const res = await this.timeTrackerService.getUserDetail();
                if (res) {
                    event.sender.send('user_detail', res);
                }
            }
            catch (error) {
                console.log('[User Error]: ', error);
            }
        }));
        this.electronService.ipcRenderer.on('update_setting_value', (event, arg) => this._ngZone.run(() => {
            this.appSetting$.next(arg);
        }));
        this.electronService.ipcRenderer.on('device_sleep', () => this._ngZone.run(async () => {
            if (this.start)
                await this.toggleStart(false);
        }));
        this.electronService.ipcRenderer.on('activity-proof-request', () => {
            this._ngZone.run(() => {
                this._dialog?.close();
                this._isOpenDialog = false;
            });
        });
        this.electronService.ipcRenderer.on('inactivity-result-not-accepted', (event, arg) => this._ngZone.run(async () => {
            if (this.start) {
                await this.toggleStart(false);
                this._dialog?.close();
                this._isOpenDialog = false;
            }
        }));
        this.electronService.ipcRenderer.on('stop_from_inactivity_handler', () => {
            this._ngZone.run(async () => {
                if (this.start)
                    await this.toggleStart(false);
            });
        });
        this.electronService.ipcRenderer.on('start_from_inactivity_handler', () => {
            this._ngZone.run(async () => {
                await this.toggleStart(true);
            });
        });
        this.electronService.ipcRenderer.on('device_wake_up', () => this._ngZone.run(() => {
            if (!this._isOpenDialog) {
                const elBtn = this.btnDialogOpen.nativeElement;
                elBtn.click();
                this._isOpenDialog = true;
            }
        }));
        this.electronService.ipcRenderer.on('timer_status', (event, arg) => this._ngZone.run(async () => {
            await this.getTimerStatus(arg);
        }));
        this.electronService.ipcRenderer.on('timer_already_stop', (event, arg) => this._ngZone.run(() => {
            this.loading = false;
        }));
        this.electronService.ipcRenderer.on('logout', (event, arg) => this._ngZone.run(async () => {
            this._isRestartAndUpdate = arg;
            if (this.isExpand)
                this.expand();
            if (this.start && !this.isRemoteTimer) {
                this._isSpecialLogout = true;
                await this.stopTimer();
            }
            if (!this._isSpecialLogout) {
                await this.logout();
            }
        }));
        this.electronService.ipcRenderer.on('prepare_activities_screenshot', (event, arg) => this._ngZone.run(async () => {
            await this.sendActivities(arg);
        }));
        this.electronService.ipcRenderer.on('play_sound', (event, arg) => this._ngZone.run(() => {
            try {
                if (!this.sound && arg.soundFile) {
                    this.sound = new Audio(arg.soundFile);
                    this.sound.play();
                }
                else {
                    this.sound.play();
                }
            }
            catch (error) {
                this._errorHandlerService.handleError(error);
            }
        }));
        this.electronService.ipcRenderer.on('show_error_message', (event, arg) => this._ngZone.run(() => {
            this.showErrorMessage(arg);
        }));
        this.electronService.ipcRenderer.on('expand', (event, arg) => this._ngZone.run(() => {
            this.isExpand$.next(arg);
            this.expandIcon = arg ? 'arrow-left' : 'arrow-right';
        }));
        this.electronService.ipcRenderer.on('refresh_today_worked_time', (event, arg) => this._ngZone.run(async () => {
            await this.getTodayTime(arg);
        }));
        this.electronService.ipcRenderer.on('offline-handler', (event, isOffline) => {
            this._ngZone.run(() => {
                this._isOffline$.next(isOffline);
                this._loggerService.log.info('You switched to ' + (isOffline ? 'offline' : 'online') + ' mode now');
                if (!isOffline) {
                    this.refreshTimer();
                }
            });
        });
        this.electronService.ipcRenderer.on('count-synced', (event, arg) => {
            this._ngZone.run(() => {
                this._inQueue$.next(arg);
            });
        });
        this.electronService.ipcRenderer.on('latest_screenshots', (event, args) => {
            this._ngZone.run(async () => {
                if (this._isOffline) {
                    await this._mappingScreenshots(args);
                }
            });
        });
        this.electronService.ipcRenderer.on('backup-timers-no-synced', (event, args) => {
            this._ngZone.run(async () => {
                if (this._isLockSyncProcess || this.isRemoteTimer) {
                    this._inQueue$.next({
                        ...this.inQueue,
                        inProgress: false
                    });
                    return;
                }
                else {
                    this._isLockSyncProcess = true;
                }
                this._inQueue$.next({
                    ...this.inQueue,
                    inProgress: true
                });
                console.log('🛠 - Preprocessing sequence');
                const sequenceQueue = new offline_sync_1.SequenceQueue(this.electronService, this._errorHandlerService, this._store, this._timeSlotQueueService, this.timeTrackerService, this._timeTrackerStatus);
                console.log('⌗', args);
                for (const arg of args)
                    sequenceQueue.enqueue(arg);
                args = []; // empty the array
                console.log('🚀 - Begin processing sequence queue');
                await sequenceQueue.process();
                console.log('🚨 - End processing sequence queue');
                rxjs_1.asapScheduler.schedule(async () => {
                    try {
                        await this.electronService.ipcRenderer.invoke('FINISH_SYNCED_TIMER');
                        this._isLockSyncProcess = false;
                        if (!this.start) {
                            this.refreshTimer();
                        }
                        else {
                            this.electronService.ipcRenderer.send('check-interrupted-sequences');
                        }
                        console.log('✅ - Finish synced');
                    }
                    catch (error) {
                        this._errorHandlerService.handleError(error);
                    }
                });
            });
        });
        if (!this._isReady) {
            this.electronService.ipcRenderer.send('time_tracker_ready');
        }
        this.electronService.ipcRenderer.on('remove_idle_time', (event, arg) => {
            this._ngZone.run(async () => {
                try {
                    const { tenantId, organizationId } = this._store;
                    const { employeeId } = this.userData;
                    const timeSlotPayload = {
                        timeslotIds: [...new Set(arg.timeslotIds)],
                        token: this.token,
                        apiHost: this.apiHost,
                        tenantId,
                        organizationId
                    };
                    const notification = {
                        message: 'Idle time successfully deleted',
                        title: this._environment.DESCRIPTION
                    };
                    const isReadyForDeletion = !this._isOffline && timeSlotPayload.timeslotIds.length > 0;
                    if (isReadyForDeletion) {
                        const apiParams = {
                            token: this.token,
                            note: this.note,
                            projectId: this.projectSelect,
                            taskId: this.taskSelect,
                            organizationId,
                            tenantId,
                            organizationContactId: this.organizationContactId,
                            apiHost: this.apiHost
                        };
                        let timeLog = null;
                        if (arg.isWorking) {
                            if (this.start) {
                                await this.timeTrackerService.toggleApiStop({
                                    ...apiParams,
                                    ...arg.timer,
                                    stoppedAt: new Date()
                                });
                            }
                            const isDeleted = await this.timeTrackerService.deleteTimeSlots(timeSlotPayload);
                            if (isDeleted) {
                                console.log('SUCCESS: Deleted');
                            }
                            else {
                                console.warn('WARN: Unexpected error appears.');
                            }
                            timeLog = await this.timeTrackerService.toggleApiStart({
                                ...apiParams,
                                startedAt: new Date()
                            });
                            await this.getTodayTime({ ...timeSlotPayload, employeeId }, true);
                        }
                        else {
                            const timer = await this.electronService.ipcRenderer.invoke('STOP_TIMER', {
                                quitApp: this.quitApp
                            });
                            timeLog = await this.timeTrackerService.toggleApiStop({
                                ...apiParams,
                                ...timer,
                                stoppedAt: new Date()
                            });
                            const isDeleted = await this.timeTrackerService.deleteTimeSlots(timeSlotPayload);
                            if (isDeleted) {
                                console.log('SUCCESS: Deleted');
                            }
                            else {
                                console.warn('WARN: Unexpected error appears.');
                            }
                        }
                        rxjs_1.asapScheduler.schedule(async () => {
                            event.sender.send('update_session', { ...timeLog });
                            try {
                                const timeSlotId = arg.timer?.timeslotId;
                                await this.electronService.ipcRenderer.invoke('UPDATE_SYNCED_TIMER', {
                                    lastTimer: timeLog,
                                    ...arg.timer,
                                    ...(timeSlotId && { timeSlotId })
                                });
                            }
                            catch (error) {
                                this._errorHandlerService.handleError(error);
                            }
                        });
                    }
                    if (this._isOffline || isReadyForDeletion) {
                        this.refreshTimer();
                        this._toastrNotifier.success(notification.message);
                        this._nativeNotifier.success(notification.message);
                    }
                }
                catch (error) {
                    this._errorHandlerService.handleError(error);
                }
            });
        });
        this.electronService.ipcRenderer.on('update_view', (event, arg) => {
            this._ngZone.run(async () => {
                const idle = arg?.idleDuration ?? 0;
                this._lastTotalWorkedToday$.next(this._lastTotalWorkedToday - idle);
                this._lastTotalWorkedWeek$.next(this._lastTotalWorkedWeek - idle);
                await this.electronService.ipcRenderer.invoke('UPDATE_SYNCED_TIMER', {
                    ...arg?.timer,
                    startedAt: arg?.stoppedAt
                });
                if (this.start) {
                    event.sender.send('update_session', arg);
                }
            });
        });
        this.electronService.ipcRenderer.on('auth_success_tray_init', (event, arg) => {
            this._ngZone.run(() => {
                if (!this._isReady) {
                    this.electronService.ipcRenderer.send('time_tracker_ready');
                }
            });
        });
        this.electronService.ipcRenderer.on('emergency_stop', (event, arg) => {
            this._ngZone.run(async () => {
                console.log('Emergency stop');
                if (this.start) {
                    console.log('Emergency stop timer');
                    await this.stopTimer(!this.isRemoteTimer, true);
                }
            });
        });
        this.electronService.ipcRenderer.on('clear_store', (event, arg) => {
            this._ngZone.run(async () => {
                await this.getTimerStatus(this.argFromMain);
                this._store.clear();
                localStorage.clear();
                event.sender.send('remove_current_user');
            });
        });
        this.electronService.ipcRenderer.on('interrupted-sequences', (event, args) => this._ngZone.run(async () => {
            if (this._isLockSyncProcess || this.isRemoteTimer) {
                this._inQueue$.next({
                    ...this.inQueue,
                    inProgress: false
                });
                return;
            }
            else {
                this._isLockSyncProcess = true;
            }
            this._inQueue$.next({
                ...this.inQueue,
                inProgress: true
            });
            console.log('🛠 - Preprocessing sequence');
            const sequenceQueue = new offline_sync_1.InterruptedSequenceQueue(this.electronService, this._errorHandlerService, this._store, this._timeSlotQueueService, this.timeTrackerService, this._timeTrackerStatus);
            console.log('⌗', args);
            for (const arg of args)
                sequenceQueue.enqueue(arg);
            args = []; // empty the array
            console.log('🚀 - Begin processing interrupted sequence queue');
            await sequenceQueue.process();
            console.log('🚨 - End processing interrupted sequence queue');
            rxjs_1.asapScheduler.schedule(async () => {
                try {
                    await this.electronService.ipcRenderer.invoke('FINISH_SYNCED_TIMER');
                    this._isLockSyncProcess = false;
                    if (!this.start) {
                        this.refreshTimer();
                    }
                    console.log('✅ - Finish synced');
                    if (this.inQueue.size > 0) {
                        this.electronService.ipcRenderer.send('check-waiting-sequences');
                    }
                }
                catch (error) {
                    this._errorHandlerService.handleError(error);
                }
            });
        }));
        this.electronService.ipcRenderer.on('preferred_language_change', (event, language) => {
            this._ngZone.run(() => {
                this._languageSelectorService.setLanguage(language, this._translateService);
                services_2.TimeTrackerDateManager.locale(language);
                rxjs_1.asyncScheduler.schedule(() => this._loadSmartTableSettings(), 150);
            });
        });
        (0, rxjs_1.from)(this.electronService.ipcRenderer.invoke('PREFERRED_LANGUAGE'))
            .pipe((0, rxjs_1.tap)((language) => {
            this._languageSelectorService.setLanguage(language, this._translateService);
            services_2.TimeTrackerDateManager.locale(language);
            rxjs_1.asyncScheduler.schedule(() => this._loadSmartTableSettings(), 150);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.electronService.ipcRenderer.on('sleep_remote_lock', (event, state) => {
            this._ngZone.run(async () => {
                (0, rxjs_1.of)(state)
                    .pipe((0, common_1.distinctUntilChange)(), (0, rxjs_1.tap)((isPaused) => (this._remoteSleepLock = isPaused)), (0, rxjs_1.filter)((isPaused) => !!isPaused && this.start), (0, rxjs_1.concatMap)(() => this.toggleStart(false, false)), (0, until_destroy_1.untilDestroyed)(this))
                    .subscribe();
            });
        });
        this.electronService.ipcRenderer.on('ready_to_show_renderer', (event, arg) => {
            this._ngZone.run(() => {
                if (!this._isReady) {
                    this.electronService.ipcRenderer.send('time_tracker_ready');
                }
            });
        });
    }
    /*
        Start/Stop Timer
        if val is true, we start the timer
        if val is false, we stop the timer
     */
    async toggleStart(val, onClick = true) {
        // check that user is authorized to track time. If not, we return.
        if (val && !this.start && !this._passedAllAuthorizations())
            return;
        this.loading = true;
        if (!val) {
            console.log('Stop tracking');
            await this.stopTimer(onClick);
            this.refreshTimer();
            this.loading = false;
            return;
        }
        else {
            console.log('Start tracking');
            // check that required inputs are set before we can start timer
            if (this.validationField()) {
                console.log('Validation passed');
                if (!this.start) {
                    console.log('Starting timer');
                    await this.startTimer(onClick);
                }
                else {
                    console.log('Timer is already running');
                    this.loading = false;
                }
                this.refreshTimer();
            }
            else {
                this.loading = false;
                console.log('Error', 'validation failed');
            }
        }
    }
    async setTime({ second }) {
        if (second < this._lastTime)
            this._lastTime = 0;
        const dt = second - this._lastTime;
        this._lastTotalWorkedToday$.next(this._lastTotalWorkedToday + dt);
        this._lastTotalWorkedWeek$.next(this._lastTotalWorkedWeek + dt);
        this._lastTime = second;
        this._timeRun$.next(moment.duration(second, 'seconds').format('hh:mm:ss', { trim: false }));
        if (second % 5 === 0) {
            await this._activityWatchViewService.pingActivityWatchServer();
            if (this.lastScreenCapture.createdAt) {
                this.lastScreenCapture$.next({
                    ...this.lastScreenCapture,
                    textTime: moment(this.lastScreenCapture.createdAt).fromNow()
                });
            }
        }
        await this.resetAtMidnight();
    }
    async startTimer(onClick = true) {
        try {
            this.loading = true;
            if (onClick) {
                await this.getTodayTime(this.argFromMain);
                this._startMode = TimerStartMode.MANUAL;
            }
            else {
                this._startMode = TimerStartMode.REMOTE;
            }
            this.start$.next(true);
            try {
                this.electronService.ipcRenderer.send('update_tray_start');
            }
            catch (error) {
                console.log('Error in update_tray_start', error);
            }
            const timer = await this.electronService.ipcRenderer.invoke('START_TIMER', {
                projectId: this.projectSelect,
                taskId: this.taskSelect,
                note: this.note,
                organizationContactId: this.organizationContactId,
                aw: {
                    host: this._environment?.AWHost,
                    isAw: this._activityWatchViewService.aw
                },
                timeLog: null,
                isRemoteTimer: this.isRemoteTimer,
                organizationTeamId: this.teamSelect
            });
            // update counter
            if (this.isRemoteTimer) {
                try {
                    this.electronService.ipcRenderer.send('update_session', {
                        startedAt: this._timeTrackerStatus.remoteTimer.startedAt
                    });
                }
                catch (error) {
                    console.log('Error in update_session', error);
                }
            }
            await this._toggle(timer, onClick);
            if (this._startMode === TimerStartMode.MANUAL) {
                console.log('Taking screen capture in startTimer');
                const activities = await this.electronService.ipcRenderer.invoke('TAKE_SCREEN_CAPTURE', {
                    quitApp: this.quitApp
                });
                console.log('Sending activities');
                await this.sendActivities(activities);
            }
            console.log('Updating Task Status');
            await this.updateTaskStatus();
            console.log('Updating Organization Team Employee');
            await this.updateOrganizationTeamEmployee();
            this.electronService.ipcRenderer.send('request_permission');
        }
        catch (error) {
            this._startMode = TimerStartMode.STOP;
            this.start$.next(false);
            this._errorHandlerService.handleError(error);
        }
        finally {
            this.loading = false;
        }
    }
    async stopTimer(onClick = true, isEmergency = false) {
        try {
            this.loading = true;
            const config = { quitApp: this.quitApp, isEmergency };
            if (this._startMode === TimerStartMode.MANUAL) {
                console.log('Stopping timer');
                const timer = await this.electronService.ipcRenderer.invoke('STOP_TIMER', config);
                console.log('Toggling timer');
                await this._toggle(timer, onClick);
                // when we stop timer, let's try to make final screenshot in background after tiny delay of 1 sec
                setTimeout(async () => {
                    console.log('Taking screen capture');
                    const activities = await this.electronService.ipcRenderer.invoke('TAKE_SCREEN_CAPTURE', config);
                    console.log('Sending activities');
                    await this.sendActivities(activities);
                }, 1000);
            }
            else {
                console.log('Stopping timer');
                const timer = await this.electronService.ipcRenderer.invoke('STOP_TIMER', config);
                console.log('Toggling timer');
                await this._toggle(timer, onClick);
            }
            console.log('Updating Tray stop');
            this.electronService.ipcRenderer.send('update_tray_stop');
            this._startMode = TimerStartMode.STOP;
            if (this._isSpecialLogout) {
                this._isSpecialLogout = false;
                // wait 3 sec and logout
                await this.logout();
            }
            if (this.quitApp) {
                console.log('Quitting app from stopTimer after 3 seconds delay');
                setTimeout(() => {
                    this.electronService.remote.app.quit();
                }, 3000);
            }
        }
        catch (error) {
            console.log('[ERROR_STOP_TIMER]', error);
        }
        finally {
            this.loading = false;
        }
    }
    async getTask(arg) {
        try {
            const tasks = await this.timeTrackerService.getTasks(arg);
            if (tasks.length) {
                const statistics = await this.timeTrackerService.getTasksStatistics({
                    ...arg,
                    taskIds: tasks.map((task) => task.id)
                });
                this._tasks$.next(this.merge(tasks, statistics));
                if (!this._tasks$.getValue().some((task) => task.id === this.taskSelect)) {
                    this.taskSelect = null;
                }
            }
            else {
                this._tasks$.next([]);
            }
        }
        catch (error) {
            this._tasks$.next([]);
            console.log('ERROR', error);
        }
    }
    async getProjects(arg) {
        try {
            const projects = await this.timeTrackerService.getProjects(arg);
            // Check if the selected project is not in the response
            if (projects && !projects.some((project) => project.id === this.projectSelect)) {
                this.projectSelect = null;
                this.argFromMain.projectId = null;
            }
            // Update the projects observable with the response (or an empty array if it's falsy)
            this._projects$.next(projects || []);
        }
        catch (error) {
            // Handle errors by logging them and updating the projects observable with an empty array
            console.error('ERROR', error);
            this._projects$.next([]);
        }
    }
    async getClient(arg) {
        try {
            const res = await this.timeTrackerService.getClient(arg);
            this._organizationContacts$.next(res || []);
        }
        catch (error) {
            this._organizationContacts$.next([]);
            console.log('ERROR', error);
        }
    }
    /*
     * Get last running/completed timer status
     * Get last running/completed timer status
     * Get last running/completed timer status
     */
    async getTimerStatus(arg) {
        if (this._isOffline || !arg?.organizationId || !arg?.tenantId)
            return;
        try {
            this.timerStatus = await this.timeTrackerService.getTimerStatus(arg);
            console.log('Get Last Timer Status:', this.timerStatus);
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    async setClient(item, dialog) {
        if (this.start) {
            this.open(dialog, {
                type: this.dialogType.changeClient.name,
                val: item
            });
        }
        else {
            try {
                await this.selectClient(item);
            }
            catch (error) {
                console.log('ERROR', error);
            }
        }
    }
    async selectClient(item) {
        this.organizationContactId = item;
        this.argFromMain.organizationContactId = item;
        this.electronService.ipcRenderer.send('update_project_on', {
            organizationContactId: this.organizationContactId
        });
        if (item) {
            await this.getProjects({
                ...this.argFromMain,
                organizationContactId: this.organizationContactId
            });
            this._tasks$.next([]);
            this.teamSelect = null;
            this.errors.client = false;
        }
        else {
            await this.getProjects(this.argFromMain);
        }
    }
    async setProject(item) {
        try {
            const parallelizedTasks = [
                this.getTeams({
                    ...this.argFromMain,
                    projectId: item
                }),
                this.getTask({
                    ...this.argFromMain,
                    projectId: item
                })
            ];
            this.projectSelect = item;
            this.argFromMain.projectId = item;
            this.electronService.ipcRenderer.send('update_project_on', {
                projectId: this.projectSelect
            });
            if (item) {
                this.errors.project = false;
            }
            else {
                this.errorBind();
            }
            await Promise.allSettled(parallelizedTasks);
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    setTask(item) {
        this.taskSelect = item;
        this.electronService.ipcRenderer.send('update_project_on', {
            taskId: this.taskSelect
        });
        if (item)
            this.errors.task = false;
    }
    descriptionChange(e) {
        if (e)
            this.errors.note = false;
        this.clearSelectedTaskAndRefresh();
        this._clearItem();
        this.electronService.ipcRenderer.send('update_project_on', {
            note: this.note
        });
    }
    validationField() {
        this.errorBind();
        const errors = [];
        const requireField = {
            task: 'requireTask',
            project: 'requireProject',
            client: 'requireClient',
            note: 'requireDescription'
        };
        Object.keys(this.errors).forEach((key) => {
            if (this.errors[key] && this.userOrganization[requireField[key]])
                errors.push(true);
        });
        return errors.length === 0;
    }
    errorBind() {
        if (!this.projectSelect && this.userOrganization.requireProject)
            this.errors.project = true;
        if (!this.taskSelect && this.userOrganization.requireTask)
            this.errors.task = true;
        if (!this.organizationContactId && this.userOrganization.requireClient)
            this.errors.client = true;
        if (!this.note && this.userOrganization.requireDescription)
            this.errors.note = true;
    }
    doShoot() {
        this.electronService.ipcRenderer.send('screen_shoot');
    }
    determineScreenshot(screenSize) {
        const maxDimension = Math.max(screenSize.width, screenSize.height);
        console.log(maxDimension);
        return {
            width: Math.floor(maxDimension * window.devicePixelRatio),
            height: Math.floor(maxDimension * window.devicePixelRatio)
        };
    }
    async getTodayTime(arg, isForcedSync) {
        if (this._isOffline)
            return;
        try {
            const res = await this.timeTrackerService.getTimeLogs(arg);
            if (res) {
                this.countDuration(res, isForcedSync);
            }
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    async getLastTimeSlotImage(arg) {
        if (this._isOffline)
            return;
        try {
            const res = await this.timeTrackerService.getTimeSlot(arg);
            let { screenshots } = res;
            console.log('Get Last Timeslot Image Response:', screenshots);
            if (screenshots && screenshots.length > 0) {
                screenshots = _.sortBy(screenshots, 'recordedAt').reverse();
                const [lastCaptureScreen] = screenshots;
                console.log('Last Capture Screen:', lastCaptureScreen);
                this.lastScreenCapture$.next(lastCaptureScreen);
                await this.localImage(this.lastScreenCapture);
                this.screenshots$.next(screenshots);
                this.lastTimeSlot = res;
            }
            if (this.lastScreenCapture.recordedAt) {
                this.lastScreenCapture$.next({
                    ...this.lastScreenCapture,
                    textTime: moment(this.lastScreenCapture.recordedAt).fromNow()
                });
            }
            else {
                this.updateImageUrl();
            }
        }
        catch (error) {
            this._errorHandlerService.handleError(error);
        }
    }
    async localImage(img, originalBase64Image) {
        try {
            const convScreenshot = img && img.thumbUrl ? await this._imageViewerService.getBase64ImageFromUrl(img.thumbUrl) : img;
            localStorage.setItem('lastScreenCapture', JSON.stringify({
                thumbUrl: convScreenshot,
                textTime: moment().fromNow(),
                createdAt: Date.now(),
                recordedAt: Date.now(),
                ...(originalBase64Image && {
                    fullUrl: originalBase64Image
                })
            }));
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    updateImageUrl(e) {
        let localLastScreenCapture = localStorage.getItem('lastScreenCapture');
        if (localLastScreenCapture) {
            localLastScreenCapture = JSON.parse(localLastScreenCapture);
            this.lastScreenCapture$.next({
                ...localLastScreenCapture
            });
        }
        if (e) {
            console.log('image error', e);
            this.lastScreenCapture$.next({});
        }
    }
    async setTimerDetails() {
        try {
            const res = await this.timeTrackerService.getUserDetail();
            if (res.employee && res.employee.organization) {
                this.userData = res;
                if (res.role && res.role.rolePermissions) {
                    this._store.userRolePermissions = res.role.rolePermissions;
                    this.userPermission = res.role.rolePermissions
                        .map((permission) => (permission.enabled ? permission.permission : null))
                        .filter((permission) => !!permission);
                    this._permissions$.next(this.userPermission);
                }
                if (res.employee.reWeeklyLimit) {
                    this._weeklyLimit$.next(res.employee.reWeeklyLimit);
                }
                this.userOrganization$.next(res.employee.organization);
                let isAllowScreenCapture = true;
                const employee = res.employee;
                if ('allowScreenshotCapture' in employee || 'allowScreenshotCapture' in employee.organization) {
                    isAllowScreenCapture =
                        employee.allowScreenshotCapture === true &&
                            employee.organization.allowScreenshotCapture === true;
                }
                this.electronService.ipcRenderer.send('update_timer_auth_config', {
                    activityProofDuration: res.employee.organization.activityProofDuration,
                    inactivityTimeLimit: res.employee.organization.inactivityTimeLimit,
                    allowTrackInactivity: res.employee.organization.allowTrackInactivity,
                    isRemoveIdleTime: res.employee.organization.isRemoveIdleTime,
                    allowScreenshotCapture: isAllowScreenCapture
                });
                const enforced = res.employee.organization.enforced;
                const settings = {
                    timer: { updatePeriod: res.employee.organization.screenshotFrequency },
                    trackOnPcSleep: res.employee.organization.trackOnSleep,
                    randomScreenshotTime: res.employee.organization.randomScreenshot
                };
                this.electronService.ipcRenderer.send('update_app_setting', {
                    values: {
                        enforced,
                        ...(enforced && settings)
                    }
                });
                this.isTrackingEnabled =
                    typeof res.employee.isTrackingEnabled !== 'undefined' ? res.employee.isTrackingEnabled : true;
                this.electronService.ipcRenderer.send(this.isTrackingEnabled ? 'show_ao' : 'hide_ao');
            }
        }
        catch (error) {
            console.log('[User Error]: ', error);
        }
    }
    showImage() {
        this.electronService.ipcRenderer.send('show_image', this.screenshots);
    }
    open(dialog, option) {
        try {
            this.selectedTimeSlot = this.lastTimeSlot;
            this._dialog = this.dialogService.open(dialog, {
                context: this.dialogType[option.type].message,
                backdropClass: 'backdrop-blur'
            });
            this._dialog.onClose.subscribe(async (selectedOption) => {
                if (selectedOption) {
                    switch (option.type) {
                        case this.dialogType.changeClient.name:
                            await this.selectClient(option.val);
                            break;
                        case this.dialogType.deleteLog.name:
                            await this.deleteTimeSlot();
                            break;
                        case this.dialogType.timeTrackingOption.name:
                            this._isOpenDialog = false;
                            await this.toggleStart(true);
                            break;
                        default:
                            break;
                    }
                }
                else if (this.start && option.type === this.dialogType.timeTrackingOption.name) {
                    this._isOpenDialog = false;
                    await this.stopTimer();
                }
            });
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    async deleteTimeSlot() {
        this._isOffline
            ? await this.electronService.ipcRenderer.invoke('DELETE_TIME_SLOT', this.screenshots[0].id)
            : await this._deleteSyncedTimeslot();
    }
    async removeInvalidTimeLog(arg) {
        try {
            await this.getTimerStatus(arg);
            console.log('this is time status', this.timerStatus);
            if (this.timerStatus.running) {
                await this.timeTrackerService.toggleApiStop(arg);
            }
        }
        catch (error) {
            console.log('error get last status timer');
        }
    }
    openSetting() {
        this.electronService.ipcRenderer.send('open_setting_window');
    }
    expand() {
        this.isCollapse$.next(this.isExpand);
        this.electronService.ipcRenderer.send('expand', !this.isExpand);
    }
    handleRowSelection(selectionEvent) {
        if (this.isNoRowSelected(selectionEvent)) {
            this.clearSelectedTaskAndRefresh();
        }
        else {
            const selectedRow = selectionEvent.selected[0];
            this.handleSelectedTaskChange(selectedRow.id);
        }
    }
    isNoRowSelected(selectionEvent) {
        return !selectionEvent.selected.length;
    }
    clearSelectedTaskAndRefresh() {
        this.setTask(null);
    }
    handleSelectedTaskChange(selectedTaskId) {
        if (this.isDifferentTask(selectedTaskId)) {
            this.setTask(selectedTaskId);
        }
    }
    isDifferentTask(selectedTaskId) {
        return this.taskSelect !== selectedTaskId;
    }
    onSearch(query = '') {
        if (query) {
            this._sourceData.setFilter([
                {
                    field: 'title',
                    search: query
                },
                {
                    field: 'taskNumber',
                    search: query
                }
            ], false);
        }
        else {
            this._sourceData.reset();
            this._sourceData.refresh();
        }
    }
    async getScreenshot(arg, isThumb = false) {
        try {
            let thumbSize = this.determineScreenshot(arg.screenSize);
            if (isThumb)
                thumbSize = {
                    width: 320,
                    height: 240
                };
            const sources = await this.electronService.desktopCapturer.getSources({
                types: ['screen'],
                thumbnailSize: thumbSize
            });
            const screens = [];
            sources.forEach((source) => {
                this._loggerService.log.info('screenshot_res', source);
                if (this.appSetting &&
                    this.appSetting.monitor &&
                    this.appSetting.monitor.captured &&
                    this.appSetting.monitor.captured === 'active-only') {
                    if (arg.activeWindow && source.display_id === arg.activeWindow.id.toString()) {
                        screens.push({
                            img: source.thumbnail.toPNG(),
                            name: source.name,
                            id: source.display_id
                        });
                    }
                }
                else {
                    if (arg.activeWindow) {
                        screens.push({
                            img: source.thumbnail.toPNG(),
                            name: source.name,
                            id: source.display_id
                        });
                    }
                }
            });
            this._loggerService.log.info('screenshot data', screens);
            return screens;
        }
        catch (error) {
            this._errorHandlerService.handleError(error);
            return [];
        }
    }
    async sendActivities(arg) {
        console.log('sendActivities');
        if (this.isRemoteTimer) {
            console.log('isRemoteTimer exit from sendActivities');
            return;
        }
        // screenshot process
        let screenshotImg = [];
        let thumbScreenshotImg = [];
        try {
            if (!arg.displays) {
                screenshotImg = await this.getScreenshot(arg, false);
                thumbScreenshotImg = await this.getScreenshot(arg, true);
            }
            else {
                screenshotImg = arg.displays;
            }
            // notify
            this.screenshotNotify(arg, thumbScreenshotImg);
        }
        catch (error) {
            console.error('Error on screenshot', error);
        }
        const paramActivity = {
            employeeId: arg.employeeId,
            projectId: arg.projectId,
            duration: arg.duration,
            keyboard: arg.keyboard,
            mouse: arg.mouse,
            overall: arg.system,
            startedAt: arg.startedAt,
            activities: arg.activities,
            timeLogId: arg.timeLogId,
            organizationId: arg.organizationId,
            tenantId: arg.tenantId,
            organizationContactId: arg.organizationContactId,
            apiHost: arg.apiHost,
            token: arg.token,
            isAw: arg.isAw,
            isAwConnected: arg.isAwConnected
        };
        try {
            const resActivities = await this.timeTrackerService.pushToTimeSlot(paramActivity);
            console.log('Result of TimeSlot', resActivities);
            const timeLogs = resActivities.timeLogs;
            if (!timeLogs?.length) {
                // Stop process if there is no time logs associate to activity result.
                console.error('[@SendActivities]', 'No time logs');
                return;
            }
            this.electronService.ipcRenderer.send('return_time_slot', {
                timerId: arg.timerId,
                timeSlotId: resActivities.id,
                quitApp: arg.quitApp,
                timeLogs: timeLogs
            });
            this.electronService.ipcRenderer.send('remove_aw_local_data');
            this.electronService.ipcRenderer.send('remove_wakatime_local_data', {
                idsWakatime: arg.idsWakatime
            });
            if (!this._isOffline && screenshotImg.length > 0) {
                /* Converting the screenshot image to a base64 string. */
                const original = `data:image/png;base64, ${this.buffToB64(screenshotImg[0])}`;
                /* Compressing the image to 320x200 */
                const compressed = await (0, common_1.compressImage)(original, 320, 200);
                /*  Saving compressed image to the local storage. */
                await this.localImage(compressed, original);
                /* Update image waiting for server response*/
                this.updateImageUrl(null);
                /* Adding the last screen capture to the screenshots array. */
                this.screenshots$.next([...this.screenshots, this.lastScreenCapture]);
            }
            // upload screenshot to TimeSlot api
            try {
                await Promise.all(screenshotImg.map(async (img) => {
                    return await this.uploadsScreenshot(arg, img, resActivities.id);
                }));
            }
            catch (error) {
                console.log('ERROR', error);
            }
            const timeSlotId = resActivities.id;
            console.log('Get last time slot image');
            await this.getLastTimeSlotImage({
                ...arg,
                token: this.token,
                apiHost: this.apiHost,
                timeSlotId
            });
            console.log('Sending create-synced-interval event...');
            this.electronService.ipcRenderer.send('create-synced-interval', {
                ...paramActivity,
                remoteId: timeSlotId,
                b64Imgs: []
            });
        }
        catch (error) {
            console.error('Error send to api timeslot', error);
            this._loggerService.log.error('Error send to api timeslot', error);
            try {
                console.log('Sending failed_synced_timeslot event...');
                this.electronService.ipcRenderer.send('failed_synced_timeslot', {
                    params: {
                        ...paramActivity,
                        b64Imgs: screenshotImg.map((img) => {
                            return {
                                b64img: this.buffToB64(img),
                                fileName: this.fileNameFormat(img)
                            };
                        })
                    }
                });
            }
            catch (e) {
                console.error('Failed to send failed_synced_timeslot event', e);
            }
        }
    }
    screenshotNotify(arg, imgs) {
        if (imgs.length > 0) {
            const img = imgs[0];
            img.img = this.buffToB64(img);
            this.electronService.ipcRenderer.send('show_screenshot_notif_window', img);
        }
    }
    async uploadsScreenshot(arg, imgs, timeSlotId) {
        const b64img = this.buffToB64(imgs);
        const fileName = this.fileNameFormat(imgs);
        try {
            const resImg = await this.timeTrackerService.uploadImages({ ...arg, timeSlotId }, {
                b64Img: b64img,
                fileName: fileName
            });
            return resImg;
        }
        catch (error) {
            this._loggerService.log.error(error);
        }
    }
    convertToSlug(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    }
    buffToB64(imgs) {
        const bufferImg = Buffer.isBuffer(imgs.img) ? imgs.img : Buffer.from(imgs.img);
        const b64img = bufferImg.toString('base64');
        return b64img;
    }
    fileNameFormat(imgs) {
        const fileName = `screenshot-${moment().format('YYYYMMDDHHmmss')}-${imgs.name}.png`;
        return this.convertToSlug(fileName);
    }
    refreshTimer() {
        console.log('refresh timer');
        this.loading = true;
        try {
            this._isRefresh$.next(true);
            this.electronService.ipcRenderer.send('refresh-timer');
        }
        catch (err) {
            console.log('Error', err);
        }
        finally {
            this.loading = false;
        }
    }
    checkOnlineStatus() {
        if (navigator.onLine) {
            return true;
        }
        else {
            return false;
        }
    }
    addTask() {
        this.isAddTask = !this._isOffline && this._hasTaskPermission;
        if (!this.isAddTask) {
            return;
        }
        this.dialogService
            .open(tasks_component_1.TasksComponent, {
            context: {
                employee: this.userData,
                hasProjectPermission: this.hasProjectPermission$.getValue(),
                selected: {
                    projectId: this.projectSelect,
                    teamId: this.teamSelect,
                    contactId: this.organizationContactId
                },
                userData: this.argFromMain
            },
            backdropClass: 'backdrop-blur'
        })
            .onClose.pipe((0, rxjs_1.tap)(() => this.closeAddTask()), (0, rxjs_1.filter)((result) => !!result), (0, rxjs_1.tap)((result) => this.callbackNewTask(result)), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
    closeAddTask() {
        this.isAddTask = false;
        this.electronService.ipcRenderer.send('refresh-timer');
    }
    callbackNewTask(e) {
        if (e.isSuccess) {
            this.toastrService.show(e.message, `Success`, {
                status: 'success'
            });
            this.electronService.ipcRenderer.send('refresh-timer');
        }
        else {
            this.toastrService.show(e.message, `Warning`, {
                status: 'danger'
            });
        }
    }
    showErrorMessage(msg) {
        this.toastrService.show(`${msg}`, `Warning`, {
            status: 'danger'
        });
    }
    toggle(event) {
        this._isOffline$.next(this._isOffline);
    }
    /**
     * It takes a date and returns a string
     * @param {Date} date - The date to humanize
     * @returns A string
     */
    humanize(date) {
        return moment(date).fromNow();
    }
    selectOrganization(organization) {
        console.log('Organization', organization);
    }
    noLimit(value) {
        return value === Infinity;
    }
    async logout() {
        // we wait 3 sec and then logout
        setTimeout(async () => {
            await (0, rxjs_1.firstValueFrom)(this._authStrategy.logout());
            this.electronService.ipcRenderer.send(this._isRestartAndUpdate ? 'restart_and_update' : 'navigate_to_login');
            localStorage.clear();
        }, 3000);
    }
    async restart() {
        // if timer's running as viewer we no need to restart
        if (this.isRemoteTimer) {
            return;
        }
        // wait 3 sec and then restart
        setTimeout(async () => {
            try {
                // lock restart process
                this._isLockSyncProcess = true;
                // resolve promise and add debounce time to avoid riding
                await (0, rxjs_1.lastValueFrom)((0, rxjs_1.from)(this.toggleStart(false)).pipe((0, rxjs_1.debounceTime)(200), (0, rxjs_1.concatMap)(() => this.toggleStart(true)), (0, until_destroy_1.untilDestroyed)(this)));
            }
            catch (error) {
                // force stop timer
                try {
                    await this.stopTimer(false, true);
                }
                catch (e) {
                    console.error('Error in force stop timer', e);
                }
            }
            finally {
                // unlock restart process
                this._isLockSyncProcess = false;
            }
        }, 3000);
    }
    async updateOrganizationTeamEmployee() {
        try {
            if (!this.taskSelect || !this.teamSelect) {
                return;
            }
            const organizationTeamId = this.teamSelect;
            const { tenantId, organizationId } = this._store;
            const { employeeId } = this._store.user;
            const activeTaskId = this.taskSelect;
            const payload = {
                activeTaskId,
                tenantId,
                organizationId,
                organizationTeamId
            };
            await this.timeTrackerService.updateOrganizationTeamEmployee(employeeId, payload);
        }
        catch (error) {
            console.error(error);
        }
    }
    async getTeams(arg) {
        try {
            const teams = await this.timeTrackerService.getTeams(arg);
            // Check if the selected team is not in the response
            if (!teams.some((team) => team.id === this.teamSelect)) {
                this.teamSelect = null;
                this.argFromMain.organizationTeamId = null;
            }
            this._teams$.next(teams);
        }
        catch (error) {
            this._teams$.next([]);
            this._errorHandlerService.handleError(error);
        }
    }
    async setTeams(organizationTeamId) {
        try {
            const parallelizedTasks = [
                this.getProjects({
                    ...this.argFromMain,
                    organizationTeamId
                }),
                this.getTask({
                    ...this.argFromMain,
                    organizationTeamId
                })
            ];
            this.teamSelect = organizationTeamId;
            this.electronService.ipcRenderer.send('update_project_on', {
                organizationTeamId
            });
            this.argFromMain.organizationTeamId = organizationTeamId;
            if (organizationTeamId) {
                this.errors.teams = false;
            }
            else {
                this.errorBind();
            }
            await Promise.allSettled(parallelizedTasks);
        }
        catch (error) {
            console.log('ERROR', error);
        }
    }
    async updateTaskStatus() {
        try {
            const { tenantId, organizationId } = this._store;
            if (!this.taskSelect || this.selectedTask.status === contracts_1.TaskStatusEnum.IN_PROGRESS) {
                return;
            }
            const id = this.selectedTask.id;
            const title = this.selectedTask.title;
            const status = contracts_1.TaskStatusEnum.IN_PROGRESS;
            const taskStatus = this._store.statuses.find((taskStatus) => taskStatus.name === status);
            const taskUpdateInput = {
                organizationId,
                tenantId,
                status,
                title,
                taskStatus
            };
            await this.timeTrackerService.updateTask(id, taskUpdateInput);
        }
        catch (error) {
            this._loggerService.log.error(error);
        }
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('dialogOpenBtn'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], TimeTrackerComponent.prototype, "btnDialogOpen", void 0);
tslib_1.__decorate([
    (0, core_1.ViewChild)('taskTable'),
    tslib_1.__metadata("design:type", angular2_smart_table_1.Angular2SmartTableComponent),
    tslib_1.__metadata("design:paramtypes", [angular2_smart_table_1.Angular2SmartTableComponent])
], TimeTrackerComponent.prototype, "taskTable", null);
exports.TimeTrackerComponent = TimeTrackerComponent = TimeTrackerComponent_1 = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ngx-desktop-time-tracker',
        templateUrl: './time-tracker.component.html',
        styleUrls: ['./time-tracker.component.scss'],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: (0, core_1.forwardRef)(() => TimeTrackerComponent_1),
                multi: true
            }
        ]
    }),
    tslib_1.__param(19, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        time_tracker_service_1.TimeTrackerService,
        theme_1.NbDialogService,
        theme_1.NbToastrService,
        platform_browser_1.DomSanitizer,
        core_1.NgZone,
        theme_1.NbIconLibraries,
        services_2.ErrorHandlerService,
        services_2.NativeNotificationService,
        services_2.ToastrNotificationService,
        services_2.Store,
        services_1.LoggerService,
        time_tracker_status_service_1.TimeTrackerStatusService,
        offline_sync_1.TimeSlotQueueService,
        image_viewer_service_1.ImageViewerService,
        auth_1.AuthStrategy,
        language_selector_service_1.LanguageSelectorService,
        core_2.TranslateService,
        always_on_service_1.AlwaysOnService, Object, integrations_1.ActivityWatchViewService])
], TimeTrackerComponent);
//# sourceMappingURL=time-tracker.component.js.map