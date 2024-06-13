"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRenderCellComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const task_render_component_1 = require("../task-render.component");
const operators_1 = require("rxjs/operators");
const until_destroy_1 = require("@ngneat/until-destroy");
const theme_1 = require("@nebular/theme");
const task_detail_component_1 = require("../task-detail/task-detail.component");
let TaskRenderCellComponent = exports.TaskRenderCellComponent = class TaskRenderCellComponent extends task_render_component_1.TaskRenderComponent {
    constructor(_dialogService) {
        super();
        this._dialogService = _dialogService;
    }
    get popover() {
        return this._popover;
    }
    set popover(value) {
        this._popover = value;
    }
    get title() {
        return this.task.title;
    }
    get number() {
        return `#${this.task.taskNumber || this.buildTaskNumber()}`;
    }
    get size() {
        return this.task.taskSize;
    }
    get priority() {
        return this.task.taskPriority;
    }
    get isSelected$() {
        return this.task$.pipe((0, operators_1.map)((task) => task?.isSelected), (0, until_destroy_1.untilDestroyed)(this));
    }
    buildTaskNumber() {
        if (!this.task.prefix || !this.task.number)
            return;
        return this.task.prefix
            .concat('-')
            .concat(String(this.task.number))
            .toUpperCase();
    }
    showDetail() {
        this._dialogService.open(task_detail_component_1.TaskDetailComponent, {
            context: {
                task: this.task
            },
            backdropClass: 'backdrop-blur',
        });
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)(theme_1.NbPopoverDirective),
    tslib_1.__metadata("design:type", theme_1.NbPopoverDirective),
    tslib_1.__metadata("design:paramtypes", [theme_1.NbPopoverDirective])
], TaskRenderCellComponent.prototype, "popover", null);
exports.TaskRenderCellComponent = TaskRenderCellComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-task-render-cell',
        templateUrl: './task-render-cell.component.html',
        styleUrls: ['./task-render-cell.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [theme_1.NbDialogService])
], TaskRenderCellComponent);
//# sourceMappingURL=task-render-cell.component.js.map