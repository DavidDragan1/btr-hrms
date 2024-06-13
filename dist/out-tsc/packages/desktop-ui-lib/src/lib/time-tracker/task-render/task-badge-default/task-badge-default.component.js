"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskBadgeDefaultComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const contracts_1 = require("@gauzy/contracts");
let TaskBadgeDefaultComponent = exports.TaskBadgeDefaultComponent = class TaskBadgeDefaultComponent {
    ngOnInit() {
        switch (this.taskBadge) {
            case contracts_1.TaskStatusEnum.OPEN:
                this.status = 'basic';
                break;
            case contracts_1.TaskStatusEnum.IN_PROGRESS:
                this.status = 'info';
                break;
            case contracts_1.TaskStatusEnum.READY_FOR_REVIEW:
                this.status = 'warning';
                break;
            case contracts_1.TaskStatusEnum.IN_REVIEW:
                this.status = 'info';
                break;
            case contracts_1.TaskStatusEnum.COMPLETED:
                this.status = 'success';
                break;
            case contracts_1.TaskStatusEnum.BLOCKED:
                this.status = 'danger';
                break;
            default:
                this.status = 'basic';
                break;
        }
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", String)
], TaskBadgeDefaultComponent.prototype, "taskBadge", void 0);
exports.TaskBadgeDefaultComponent = TaskBadgeDefaultComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-task-badge-default',
        templateUrl: './task-badge-default.component.html',
        styleUrls: ['./task-badge-default.component.scss'],
    })
], TaskBadgeDefaultComponent);
//# sourceMappingURL=task-badge-default.component.js.map