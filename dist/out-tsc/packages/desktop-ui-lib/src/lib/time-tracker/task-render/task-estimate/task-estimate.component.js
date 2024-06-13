"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEstimateComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const until_destroy_1 = require("@ngneat/until-destroy");
const contracts_1 = require("@gauzy/contracts");
let TaskEstimateComponent = exports.TaskEstimateComponent = class TaskEstimateComponent {
    constructor() {
        this.isEdit = false;
        this.edited = new core_1.EventEmitter();
    }
    get estimate$() {
        return this.task$.pipe((0, operators_1.map)((task) => task?.estimate), (0, until_destroy_1.untilDestroyed)(this));
    }
    get isEditDisabled$() {
        return this.task$.pipe((0, operators_1.map)((task) => task?.status === contracts_1.TaskStatusEnum.COMPLETED), (0, until_destroy_1.untilDestroyed)(this));
    }
    update(event) {
        this.isEdit = false;
        if (isNaN(Number(event)))
            return;
        this.edited.emit(event);
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", rxjs_1.Observable)
], TaskEstimateComponent.prototype, "task$", void 0);
exports.TaskEstimateComponent = TaskEstimateComponent = tslib_1.__decorate([
    (0, until_destroy_1.UntilDestroy)({ checkProperties: true }),
    (0, core_1.Component)({
        selector: 'gauzy-task-estimate',
        templateUrl: './task-estimate.component.html',
        styleUrls: ['./task-estimate.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TaskEstimateComponent);
//# sourceMappingURL=task-estimate.component.js.map