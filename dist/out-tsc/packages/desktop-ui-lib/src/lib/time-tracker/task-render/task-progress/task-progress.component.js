"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskProgressComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const task_render_component_1 = require("../task-render.component");
const common_1 = require("@gauzy/ui-sdk/common");
const task_estimate_component_1 = require("../task-estimate/task-estimate.component");
const rxjs_1 = require("rxjs");
const until_destroy_1 = require("@ngneat/until-destroy");
const operators_1 = require("rxjs/operators");
let TaskProgressComponent = exports.TaskProgressComponent = class TaskProgressComponent extends task_render_component_1.TaskRenderComponent {
    constructor() {
        super();
        this.updated = new core_1.EventEmitter();
        this._taskEstimate = null;
    }
    get taskEstimate() {
        return this._taskEstimate;
    }
    set taskEstimate(value) {
        if (value) {
            this._taskEstimate = value;
        }
    }
    get progressStatus() {
        return common_1.progressStatus;
    }
    get progress$() {
        return this.task$.pipe((0, operators_1.map)((task) => {
            if (this.task?.estimate === 0) {
                return 0;
            }
            if (this.task?.duration > this.task?.estimate) {
                return 100;
            }
            return Math.floor((this.task?.duration / this.task?.estimate) * 100);
        }), (0, until_destroy_1.untilDestroyed)(this));
    }
    ngAfterViewInit() {
        this.taskEstimate?.edited
            .pipe((0, rxjs_1.tap)((estimate) => {
            this.rowData = {
                ...this.task,
                estimate
            };
            this.updated.emit(estimate);
        }), (0, until_destroy_1.untilDestroyed)(this))
            .subscribe();
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('taskEstimate'),
    tslib_1.__metadata("design:type", task_estimate_component_1.TaskEstimateComponent),
    tslib_1.__metadata("design:paramtypes", [task_estimate_component_1.TaskEstimateComponent])
], TaskProgressComponent.prototype, "taskEstimate", null);
exports.TaskProgressComponent = TaskProgressComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-task-progress',
        templateUrl: './task-progress.component.html',
        styleUrls: ['./task-progress.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TaskProgressComponent);
//# sourceMappingURL=task-progress.component.js.map