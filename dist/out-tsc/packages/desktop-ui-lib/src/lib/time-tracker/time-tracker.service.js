"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const moment = require("moment");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const common_1 = require("@gauzy/ui-sdk/common");
const contracts_1 = require("@gauzy/contracts");
const services_1 = require("../services");
const user_organization_service_1 = require("./organization-selector/user-organization.service");
const services_2 = require("../electron/services");
const constants_1 = require("../constants");
let TimeTrackerService = exports.TimeTrackerService = class TimeTrackerService {
    constructor(http, _clientCacheService, _taskCacheService, _projectCacheService, _timeSlotCacheService, _employeeCacheService, _userOrganizationService, _timeLogService, _loggerService, _store, _taskStatusCacheService, _teamsCacheService, _taskPriorityCacheService, _taskSizeCacheService) {
        this.http = http;
        this._clientCacheService = _clientCacheService;
        this._taskCacheService = _taskCacheService;
        this._projectCacheService = _projectCacheService;
        this._timeSlotCacheService = _timeSlotCacheService;
        this._employeeCacheService = _employeeCacheService;
        this._userOrganizationService = _userOrganizationService;
        this._timeLogService = _timeLogService;
        this._loggerService = _loggerService;
        this._store = _store;
        this._taskStatusCacheService = _taskStatusCacheService;
        this._teamsCacheService = _teamsCacheService;
        this._taskPriorityCacheService = _taskPriorityCacheService;
        this._taskSizeCacheService = _taskSizeCacheService;
        this.token = '';
        this.userId = '';
        this.employeeId = '';
        this.b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
            const byteCharacters = atob(b64Data);
            const byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            const blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
    }
    createAuthorizationHeader(headers) {
        headers.append('Authorization', 'Basic ' + btoa('username:password'));
    }
    async getTasks(values) {
        const request = {
            where: {
                organizationId: values.organizationId,
                tenantId: values.tenantId,
                ...(values.projectId
                    ? {
                        projectId: values.projectId
                    }
                    : {}),
                ...(values.organizationTeamId && {
                    teams: {
                        id: values.organizationTeamId
                    }
                })
            },
            relations: [
                'project',
                'tags',
                'teams',
                'teams.members',
                'teams.members.employee',
                'teams.members.employee.user',
                'creator',
                'organizationSprint',
                'taskStatus',
                'taskSize',
                'taskPriority'
            ],
            join: {
                alias: 'task',
                leftJoinAndSelect: {
                    members: 'task.members',
                    user: 'members.user'
                }
            }
        };
        let tasks$ = this._taskCacheService.getValue(request);
        if (!tasks$) {
            tasks$ = this.http
                .get(`${constants_1.API_PREFIX}/tasks/employee/${values.employeeId}`, {
                params: (0, common_1.toParams)(request)
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._taskCacheService.setValue(tasks$, request);
        }
        return (0, rxjs_1.firstValueFrom)(tasks$);
    }
    async getTasksStatistics(values) {
        const request = {
            organizationId: values.organizationId,
            tenantId: values.tenantId,
            taskIds: values.taskIds,
            startDate: moment(0).utc().toISOString(),
            endDate: services_1.TimeTrackerDateManager.endToday,
            todayStart: services_1.TimeTrackerDateManager.startToday,
            todayEnd: services_1.TimeTrackerDateManager.endToday,
            ...(values.projectId
                ? {
                    projectId: values.projectId
                }
                : {})
        };
        const cacheReference = {
            taskIds: values.taskIds,
            projectId: values.projectId
        };
        let tasksStatistics$ = this._taskCacheService.getValue(cacheReference);
        if (!tasksStatistics$) {
            tasksStatistics$ = this.http
                .get(`${constants_1.API_PREFIX}/timesheet/statistics/tasks`, {
                params: (0, common_1.toParams)({
                    ...request
                })
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._taskCacheService.setValue(tasksStatistics$, cacheReference);
        }
        return (0, rxjs_1.firstValueFrom)(tasksStatistics$);
    }
    async getEmployees(values) {
        const params = {
            data: JSON.stringify({
                relations: ['user'],
                findInput: {
                    organization: {
                        id: values.organizationId
                    }
                }
            })
        };
        let employee$ = this._employeeCacheService.getValue(params);
        if (!employee$) {
            employee$ = this.http
                .get(`${constants_1.API_PREFIX}/employee/${values.employeeId}`, {
                params: (0, common_1.toParams)(params)
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._employeeCacheService.setValue(employee$, params);
        }
        return (0, rxjs_1.firstValueFrom)(employee$);
    }
    async getProjects(values) {
        const params = {
            organizationId: values.organizationId,
            employeeId: values.employeeId,
            tenantId: values.tenantId,
            ...(values.organizationContactId
                ? {
                    organizationContactId: values.organizationContactId
                }
                : {}),
            ...(values.organizationTeamId && {
                organizationTeamId: values.organizationTeamId
            })
        };
        let projects$ = this._projectCacheService.getValue(params);
        if (!projects$) {
            projects$ = this.http
                .get(`${constants_1.API_PREFIX}/organization-projects/employee/${values.employeeId}`, {
                params: (0, common_1.toParams)(params)
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._projectCacheService.setValue(projects$, params);
        }
        return (0, rxjs_1.firstValueFrom)(projects$);
    }
    async getClient(values) {
        const params = {
            organizationId: values.organizationId
        };
        let clients$ = this._clientCacheService.getValue(params);
        if (!clients$) {
            clients$ = this.http
                .get(`${constants_1.API_PREFIX}/organization-contact/employee/${values.employeeId}`, {
                params
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._clientCacheService.setValue(clients$, params);
        }
        return (0, rxjs_1.firstValueFrom)(clients$);
    }
    getUserDetail() {
        return this._userOrganizationService.detail();
    }
    async getTimeLogs(values) {
        console.log('TimeLogs', values);
        let timeLogs$ = this._timeLogService.getValue('counts');
        if (!timeLogs$) {
            timeLogs$ = this.http
                .get(`${constants_1.API_PREFIX}/timesheet/statistics/counts`, {
                params: (0, common_1.toParams)({
                    tenantId: values.tenantId,
                    organizationId: values.organizationId,
                    employeeIds: [values.employeeId],
                    todayStart: services_1.TimeTrackerDateManager.startToday,
                    todayEnd: services_1.TimeTrackerDateManager.endToday,
                    startDate: services_1.TimeTrackerDateManager.startWeek,
                    endDate: services_1.TimeTrackerDateManager.endWeek
                })
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._timeLogService.setValue(timeLogs$, 'counts');
        }
        return (0, rxjs_1.firstValueFrom)(timeLogs$);
    }
    async getTimeSlot(values) {
        this._loggerService.log.info(`Get Time Slot: ${moment().format()}`);
        const { tenantId, organizationId } = this._store;
        const params = (0, common_1.toParams)({
            tenantId,
            organizationId,
            relations: ['screenshots']
        });
        let timeSlots$ = this._timeSlotCacheService.getValue(values.timeSlotId);
        if (!timeSlots$) {
            timeSlots$ = this.http
                .get(`${constants_1.API_PREFIX}/timesheet/time-slot/${values.timeSlotId}`, {
                params
            })
                .pipe((0, operators_1.map)((response) => response), (0, operators_1.shareReplay)(1));
            this._timeSlotCacheService.setValue(timeSlots$, values.timeSlotId);
        }
        return (0, rxjs_1.firstValueFrom)(timeSlots$);
    }
    pingAw(host) {
        return (0, rxjs_1.firstValueFrom)(this.http.get(host, { responseType: 'text' }));
    }
    toggleApiStart(values) {
        const options = {
            headers: new http_1.HttpHeaders({ timeout: `${15 * 1000}` })
        };
        const body = {
            description: values.description,
            isBillable: true,
            logType: contracts_1.TimeLogType.TRACKED,
            projectId: values.projectId,
            taskId: values.taskId,
            source: contracts_1.TimeLogSourceEnum.DESKTOP,
            manualTimeSlot: values.manualTimeSlot,
            organizationId: values.organizationId,
            tenantId: values.tenantId,
            organizationContactId: values.organizationContactId,
            isRunning: true,
            version: values.version,
            startedAt: moment(values.startedAt).utc().toISOString(),
            organizationTeamId: values.organizationTeamId
        };
        this._loggerService.log.info(`Toggle Start Timer Request: ${moment().format()}`, body);
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/timer/start`, { ...body }, options));
    }
    toggleApiStop(values) {
        const options = {
            headers: new http_1.HttpHeaders({ timeout: `${15 * 1000}` })
        };
        const body = {
            description: values.description,
            isBillable: true,
            logType: contracts_1.TimeLogType.TRACKED,
            projectId: values.projectId,
            taskId: values.taskId,
            manualTimeSlot: values.manualTimeSlot,
            organizationId: values.organizationId,
            tenantId: values.tenantId,
            organizationContactId: values.organizationContactId,
            isRunning: false,
            version: values.version,
            startedAt: moment(values.startedAt).utc().toISOString(),
            stoppedAt: moment(values.stoppedAt).utc().toISOString(),
            organizationTeamId: values.organizationTeamId
        };
        this._loggerService.log.info(`Toggle Stop Timer Request: ${moment().format()}`, body);
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/timer/stop`, { ...body }, options));
    }
    deleteTimeSlot(values) {
        const params = (0, common_1.toParams)({
            ids: [values.timeSlotId],
            tenantId: values.tenantId,
            organizationId: values.organizationId
        });
        return (0, rxjs_1.firstValueFrom)(this.http.delete(`${constants_1.API_PREFIX}/timesheet/time-slot`, {
            params
        }));
    }
    deleteTimeSlots(values) {
        const params = (0, common_1.toParams)({
            ids: [...values.timeslotIds],
            tenantId: values.tenantId,
            organizationId: values.organizationId
        });
        return (0, rxjs_1.firstValueFrom)(this.http.delete(`${constants_1.API_PREFIX}/timesheet/time-slot`, {
            params
        }));
    }
    getInvalidTimeLog(values) {
        return (0, rxjs_1.firstValueFrom)(this.http.get(`${constants_1.API_PREFIX}/timesheet/time-log/`, {
            params: {
                tenantId: values.tenantId,
                organizationId: values.organizationId,
                employeeId: values.employeeId,
                source: contracts_1.TimeLogSourceEnum.DESKTOP
            }
        }));
    }
    deleteInvalidTimeLog(values) {
        const params = (0, common_1.toParams)({
            logIds: values.timeLogIds
        });
        return (0, rxjs_1.firstValueFrom)(this.http.delete(`${constants_1.API_PREFIX}/timesheet/time-log`, {
            params
        }));
    }
    getTimerStatus(values) {
        return (0, rxjs_1.firstValueFrom)(this.http.get(`${constants_1.API_PREFIX}/timesheet/timer/status`, {
            params: {
                tenantId: values.tenantId,
                organizationId: values.organizationId,
                relations: ['employee', 'employee.user']
            }
        }));
    }
    pushToTimeSlot(values) {
        console.log('✅ - TimeSlot', values);
        const params = {
            employeeId: values.employeeId,
            projectId: values.projectId,
            duration: values.duration,
            keyboard: values.keyboard,
            mouse: values.mouse,
            overall: values.overall,
            startedAt: values.startedAt,
            activities: values.activities,
            timeLogId: values.timeLogId,
            organizationId: values.organizationId,
            tenantId: values.tenantId,
            organizationContactId: values.organizationContactId,
            recordedAt: moment(values.recordedAt).utc().toISOString(),
            ...(values.timesheetId && { timesheetId: values.timesheetId })
        };
        console.log('Params', params);
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/time-slot`, params).pipe((0, operators_1.catchError)((error) => {
            error.error = {
                ...error.error,
                params: JSON.stringify(params)
            };
            return (0, rxjs_1.throwError)(() => new Error(error));
        })));
    }
    uploadImages(values, img) {
        const formData = new FormData();
        const contentType = 'image/png';
        const b64Data = img.b64Img;
        const blob = this.b64toBlob(b64Data, contentType);
        formData.append('file', blob, img.fileName);
        formData.append('timeSlotId', values.timeSlotId);
        formData.append('tenantId', values.tenantId);
        formData.append('organizationId', values.organizationId);
        formData.append('recordedAt', moment(values.recordedAt).utc().toISOString());
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/timesheet/screenshot`, formData).pipe((0, operators_1.catchError)((error) => {
            error.error = {
                ...error.error,
                params: JSON.stringify(formData)
            };
            return (0, rxjs_1.throwError)(() => new Error(error));
        })));
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
    async pingServer(values) {
        try {
            await this.pingApi(values);
            return true;
        }
        catch (error) {
            if (error.status === 404) {
                return true;
            }
            return false;
        }
    }
    pingApi(values) {
        return (0, rxjs_1.firstValueFrom)(this.http.get(values.apiHost));
    }
    saveNewTask(values, payload) {
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/tasks`, payload).pipe((0, operators_1.tap)(() => this._taskCacheService.clear()), (0, operators_1.catchError)((error) => {
            error.error = {
                ...error.error
            };
            return (0, rxjs_1.throwError)(() => new Error(error));
        })));
    }
    createNewProject(createInput, data) {
        return (0, rxjs_1.firstValueFrom)(this.http
            .post(`${constants_1.API_PREFIX}/organization-projects`, createInput)
            .pipe((0, operators_1.tap)(() => this._projectCacheService.clear())));
    }
    createNewContact(input, values) {
        return (0, rxjs_1.firstValueFrom)(this.http.post(`${constants_1.API_PREFIX}/organization-contact`, input).pipe((0, operators_1.tap)(() => this._clientCacheService.clear()), (0, operators_1.catchError)((error) => {
            error.error = {
                ...error.error
            };
            return (0, rxjs_1.throwError)(() => new Error(error));
        })));
    }
    async updateTask(id, taskUpdateInput) {
        return (0, rxjs_1.firstValueFrom)(this.http.put(`${constants_1.API_PREFIX}/tasks/${id}`, taskUpdateInput).pipe((0, operators_1.tap)(() => this._taskCacheService.clear()), (0, operators_1.tap)(() => this._taskStatusCacheService.clear()), (0, operators_1.catchError)((error) => {
            error.error = {
                ...error.error
            };
            return (0, rxjs_1.throwError)(() => new Error(error));
        })));
    }
    async statuses(params) {
        let taskStatuses$ = this._taskStatusCacheService.getValue(params);
        if (!taskStatuses$) {
            taskStatuses$ = this.http
                .get(`${constants_1.API_PREFIX}/task-statuses`, {
                params: (0, common_1.toParams)({ ...params })
            })
                .pipe((0, operators_1.map)((res) => res.items), (0, operators_1.shareReplay)(1));
            this._taskStatusCacheService.setValue(taskStatuses$, params);
        }
        return (0, rxjs_1.firstValueFrom)(taskStatuses$);
    }
    async updateOrganizationTeamEmployee(employeeId, values) {
        const params = {
            organizationId: values.organizationId,
            activeTaskId: values.activeTaskId,
            organizationTeamId: values.organizationTeamId,
            tenantId: values.tenantId
        };
        return (0, rxjs_1.firstValueFrom)(this.http.put(`${constants_1.API_PREFIX}/organization-team-employee/${employeeId}`, params));
    }
    async getTeams(values) {
        const params = {
            where: {
                organizationId: this._store.organizationId,
                tenantId: this._store.tenantId,
                ...(values?.projectId && {
                    projects: {
                        id: values.projectId
                    }
                })
            },
            relations: ['projects']
        };
        let teams$ = this._teamsCacheService.getValue(params);
        if (!teams$) {
            teams$ = this.http
                .get(`${constants_1.API_PREFIX}/organization-team/me`, {
                params: (0, common_1.toParams)({ ...params })
            })
                .pipe((0, operators_1.map)((res) => res.items), (0, operators_1.shareReplay)(1));
            this._teamsCacheService.setValue(teams$, params);
        }
        return (0, rxjs_1.firstValueFrom)(teams$);
    }
    async taskSizes() {
        const params = {
            organizationId: this._store.organizationId,
            tenantId: this._store.tenantId
        };
        let taskSizes$ = this._taskSizeCacheService.getValue(params);
        if (!taskSizes$) {
            taskSizes$ = this.http
                .get(`${constants_1.API_PREFIX}/task-sizes`, {
                params: (0, common_1.toParams)({ ...params })
            })
                .pipe((0, operators_1.map)((res) => res.items), (0, operators_1.shareReplay)(1));
            this._taskSizeCacheService.setValue(taskSizes$, params);
        }
        return (0, rxjs_1.firstValueFrom)(taskSizes$);
    }
    async taskPriorities() {
        const params = {
            organizationId: this._store.organizationId,
            tenantId: this._store.tenantId
        };
        let taskPriorities$ = this._taskPriorityCacheService.getValue(params);
        if (!taskPriorities$) {
            taskPriorities$ = this.http
                .get(`${constants_1.API_PREFIX}/task-priorities`, {
                params: (0, common_1.toParams)({ ...params })
            })
                .pipe((0, operators_1.map)((res) => res.items), (0, operators_1.shareReplay)(1));
            this._taskPriorityCacheService.setValue(taskPriorities$, params);
        }
        return (0, rxjs_1.firstValueFrom)(taskPriorities$);
    }
};
exports.TimeTrackerService = TimeTrackerService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        services_1.ClientCacheService,
        services_1.TaskCacheService,
        services_1.ProjectCacheService,
        services_1.TimeSlotCacheService,
        services_1.EmployeeCacheService,
        user_organization_service_1.UserOrganizationService,
        services_1.TimeLogCacheService,
        services_2.LoggerService,
        services_1.Store,
        services_1.TaskStatusCacheService,
        services_1.TeamsCacheService,
        services_1.TaskPriorityCacheService,
        services_1.TaskSizeCacheService])
], TimeTrackerService);
//# sourceMappingURL=time-tracker.service.js.map