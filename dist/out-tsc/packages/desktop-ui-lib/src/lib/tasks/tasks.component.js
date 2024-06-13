"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const time_tracker_service_1 = require("../time-tracker/time-tracker.service");
const contracts_1 = require("@gauzy/contracts");
const theme_1 = require("@nebular/theme");
const moment = require("moment");
const core_2 = require("@ngx-translate/core");
const utils_1 = require("../utils");
const services_1 = require("../services");
const constants_1 = require("../constants");
const until_destroy_1 = require("@ngneat/until-destroy");
const rxjs_1 = require("rxjs");
let TasksComponent = exports.TasksComponent = class TasksComponent {
    constructor(timeTrackerService, toastrService, translate, _environment, store, _dialogRef, _tagService) {
        this.timeTrackerService = timeTrackerService;
        this.toastrService = toastrService;
        this.translate = translate;
        this._environment = _environment;
        this.store = store;
        this._dialogRef = _dialogRef;
        this._tagService = _tagService;
        this.isAddTask = new core_1.EventEmitter();
        this.newTaskCallback = new core_1.EventEmitter();
        this.editorConfig = utils_1.CkEditorConfig.minimal();
        this.projects = [];
        this.employees = [];
        this.tags = [];
        this.taskSizes = [];
        this.taskStatuses = [];
        this.taskPriorities = [];
        this.contacts = [];
        this.teams = [];
        this.statuses = [
            {
                id: contracts_1.TaskStatusEnum.OPEN,
                name: this._formatStatus(contracts_1.TaskStatusEnum.OPEN)
            },
            {
                id: contracts_1.TaskStatusEnum.IN_PROGRESS,
                name: this._formatStatus(contracts_1.TaskStatusEnum.IN_PROGRESS)
            },
            {
                id: contracts_1.TaskStatusEnum.READY_FOR_REVIEW,
                name: this._formatStatus(contracts_1.TaskStatusEnum.READY_FOR_REVIEW)
            },
            {
                id: contracts_1.TaskStatusEnum.IN_REVIEW,
                name: this._formatStatus(contracts_1.TaskStatusEnum.IN_REVIEW)
            },
            {
                id: contracts_1.TaskStatusEnum.BLOCKED,
                name: this._formatStatus(contracts_1.TaskStatusEnum.BLOCKED)
            },
            {
                id: contracts_1.TaskStatusEnum.COMPLETED,
                name: this._formatStatus(contracts_1.TaskStatusEnum.COMPLETED)
            }
        ];
        this.isLoading = false;
        this.addProject = async (name) => {
            try {
                const data = this.userData;
                const { tenantId, organizationContactId } = data;
                const { organizationId } = data;
                const request = {
                    name,
                    organizationId,
                    tenantId,
                    ...(organizationContactId ? { contactId: organizationContactId } : {})
                };
                request['members'] = [...this.employees];
                const project = await this.timeTrackerService.createNewProject(request, data);
                this.projects = this.projects.concat([project]);
                this.toastrService.success(this.translate.instant('TIMER_TRACKER.TOASTR.PROJECT_ADDED'), this._environment.DESCRIPTION);
            }
            catch (error) {
                this.toastrService.danger(error);
            }
        };
        /**
         * Create new tag
         *
         * @param name
         * @returns
         */
        this.createTag = async (name) => {
            if (!name) {
                return;
            }
            this.isLoading = true;
            const { organizationId, tenantId } = this.store;
            try {
                this.tags = await this._tagService.create({
                    name,
                    color: utils_1.ColorAdapter.randomColor(),
                    description: '',
                    tenantId,
                    organizationId
                });
            }
            catch (error) {
                console.log('Error while creating tags', error);
            }
            finally {
                this.isLoading = false;
            }
        };
        this.isSaving = false;
    }
    async _projects(user) {
        try {
            this.projects = await this.timeTrackerService.getProjects({
                organizationContactId: this.selected.contactId,
                organizationTeamId: this.selected.teamId,
                ...user
            });
        }
        catch (error) {
            console.error('[error]', "can't get employee project::" + error.message);
        }
    }
    async _tags() {
        try {
            this.tags = await this._tagService.getTags();
        }
        catch (error) {
            console.error('[error]', 'while get tags::' + error.message);
        }
    }
    async _employees(user) {
        try {
            const employee = await this.timeTrackerService.getEmployees(user);
            this.employees = [employee];
        }
        catch (error) {
            console.error('[error]', 'while get employees::' + error.message);
        }
    }
    async _clients(user) {
        try {
            this.contacts = await this.timeTrackerService.getClient(user);
        }
        catch (error) {
            console.error('[error]', 'while get contacts::' + error.message);
        }
    }
    async _teams() {
        try {
            this.teams = await this.timeTrackerService.getTeams();
        }
        catch (error) {
            console.error('[error]', 'while get teams::' + error.message);
        }
    }
    async _sizes() {
        try {
            this.taskSizes = await this.timeTrackerService.taskSizes();
        }
        catch (error) {
            console.error('[error]', 'while get sizes::' + error.message);
        }
    }
    async _priorities() {
        try {
            this.taskPriorities = await this.timeTrackerService.taskPriorities();
        }
        catch (error) {
            console.error('[error]', 'while get priorities::' + error.message);
        }
    }
    _formatStatus(name) {
        return name
            .split('-')
            .join(' ')
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    }
    ngOnInit() {
        this.editorConfig.editorplaceholder = this.translate.instant('FORM.PLACEHOLDERS.DESCRIPTION');
        this.taskStatuses = this.store.statuses;
        (0, rxjs_1.from)(Promise.allSettled([
            this._projects(this.userData),
            this._tags(),
            this._employees(this.userData),
            this._clients(this.userData),
            this._teams(),
            this._sizes(),
            this._priorities()
        ]))
            .pipe((0, rxjs_1.tap)(() => this.form.patchValue({ taskStatus: this.taskStatuses[0] })), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
        this.form = new forms_1.UntypedFormGroup({
            description: new forms_1.FormControl(null),
            dueDate: new forms_1.FormControl(moment().add(1, 'day').utc().toDate()),
            estimate: new forms_1.FormControl(null),
            estimateDays: new forms_1.FormControl(null, [forms_1.Validators.min(0)]),
            estimateHours: new forms_1.FormControl(null, [forms_1.Validators.min(0), forms_1.Validators.max(23)]),
            estimateMinutes: new forms_1.FormControl(null, [forms_1.Validators.min(0), forms_1.Validators.max(59)]),
            members: new forms_1.FormControl([]),
            organizationId: new forms_1.FormControl(this.userData.organizationId),
            project: new forms_1.FormControl(null),
            projectId: new forms_1.FormControl(this.selected.projectId),
            status: new forms_1.FormControl(contracts_1.TaskStatusEnum.OPEN),
            priority: new forms_1.FormControl(null),
            size: new forms_1.FormControl(null),
            tags: new forms_1.FormControl([]),
            teams: new forms_1.FormControl([]),
            tenantId: new forms_1.FormControl(this.userData.tenantId),
            title: new forms_1.FormControl(null, forms_1.Validators.required),
            taskStatus: new forms_1.FormControl(null),
            taskPriority: new forms_1.FormControl(null),
            taskSize: new forms_1.FormControl(null),
            organizationContactId: new forms_1.FormControl(this.selected.contactId),
            organizationTeamId: new forms_1.FormControl(this.selected.teamId)
        });
        this.hasAddTagPermission$ = this.store.userRolePermissions$.pipe((0, rxjs_1.map)(() => this.store.hasPermissions(contracts_1.PermissionsEnum.ALL_ORG_EDIT, contracts_1.PermissionsEnum.ORG_TAGS_ADD)));
    }
    close(res) {
        this._dialogRef.close(res);
    }
    async save() {
        if (this.form.invalid)
            return;
        this.isSaving = true;
        const { estimateDays, estimateHours, estimateMinutes, projectId, taskStatus, taskPriority, taskSize, organizationTeamId } = this.form.value;
        const days = estimateDays ? estimateDays * 24 * 3600 : 0;
        const hours = estimateHours ? estimateHours * 3600 : 1;
        const minutes = estimateMinutes ? estimateMinutes * 60 : 0;
        const status = taskStatus?.name;
        const size = taskSize?.name;
        const priority = taskPriority?.name;
        const teams = this.teams.filter(({ id }) => id === organizationTeamId);
        const [project] = this.projects.filter(({ id }) => id === projectId);
        try {
            this.form.patchValue({
                members: [...this.employees],
                estimate: days + hours + minutes,
                project,
                status,
                size,
                priority,
                teams
            });
            await this.timeTrackerService.saveNewTask(this.userData, this.form.value);
            this.close({
                isSuccess: true,
                message: this.translate.instant('TOASTR.MESSAGE.CREATED')
            });
        }
        catch (error) {
            console.log(error);
            this.close({
                isSuccess: false,
                message: error.message
            });
        }
        this.isSaving = false;
    }
    background(bgColor) {
        return utils_1.ColorAdapter.background(bgColor);
    }
    backgroundContrast(bgColor) {
        return utils_1.ColorAdapter.contrast(bgColor);
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], TasksComponent.prototype, "userData", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], TasksComponent.prototype, "employee", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Boolean)
], TasksComponent.prototype, "hasProjectPermission", void 0);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], TasksComponent.prototype, "selected", void 0);
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], TasksComponent.prototype, "isAddTask", void 0);
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], TasksComponent.prototype, "newTaskCallback", void 0);
exports.TasksComponent = TasksComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'ngx-tasks',
        templateUrl: './tasks.component.html',
        styleUrls: ['./tasks.component.scss']
    }),
    tslib_1.__param(3, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [time_tracker_service_1.TimeTrackerService,
        theme_1.NbToastrService,
        core_2.TranslateService, Object, services_1.Store,
        theme_1.NbDialogRef,
        services_1.TagService])
], TasksComponent);
//# sourceMappingURL=tasks.component.js.map