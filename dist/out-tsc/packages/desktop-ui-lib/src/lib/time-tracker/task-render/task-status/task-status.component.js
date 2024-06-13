"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const task_render_component_1 = require("../task-render.component");
const services_1 = require("../../../services");
const operators_1 = require("rxjs/operators");
const until_destroy_1 = require("@ngneat/until-destroy");
let TaskStatusComponent = exports.TaskStatusComponent = class TaskStatusComponent extends task_render_component_1.TaskRenderComponent {
    constructor(store) {
        super();
        this.store = store;
        this.updated = new core_1.EventEmitter();
    }
    get taskStatus$() {
        return this.task$.pipe((0, operators_1.map)((task) => task?.taskStatus), (0, until_destroy_1.untilDestroyed)(this));
    }
    get status$() {
        return this.task$.pipe((0, operators_1.map)((task) => String(task?.status)), (0, until_destroy_1.untilDestroyed)(this));
    }
    updateStatus(taskStatus) {
        this.rowData = {
            ...this.task,
            status: taskStatus.name,
            taskStatus,
        };
        this.updated.emit(taskStatus);
    }
    ngOnInit() {
        this.statuses$ = this.store.statuses$;
    }
};
exports.TaskStatusComponent = TaskStatusComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-task-status',
        templateUrl: './task-status.component.html',
        styleUrls: ['./task-status.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.Store])
], TaskStatusComponent);
//# sourceMappingURL=task-status.component.js.map