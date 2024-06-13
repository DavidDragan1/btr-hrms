"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDurationComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const task_render_component_1 = require("../task-render.component");
let TaskDurationComponent = exports.TaskDurationComponent = class TaskDurationComponent extends task_render_component_1.TaskRenderComponent {
    get total() {
        return this.task?.duration;
    }
    get today() {
        return this.task?.todayDuration;
    }
};
exports.TaskDurationComponent = TaskDurationComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-task-duration',
        templateUrl: './task-duration.component.html',
        styleUrls: ['./task-duration.component.scss'],
    })
], TaskDurationComponent);
//# sourceMappingURL=task-duration.component.js.map