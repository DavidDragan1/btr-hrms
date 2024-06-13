"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskBadgeViewComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const utils_1 = require("../../../utils");
const desktop_ui_lib_1 = require("@gauzy/desktop-ui-lib");
let TaskBadgeViewComponent = exports.TaskBadgeViewComponent = class TaskBadgeViewComponent {
    constructor(_statusIconService) {
        this._statusIconService = _statusIconService;
        this._taskBadge = null;
    }
    get taskBadge() {
        return this._taskBadge;
    }
    set taskBadge(value) {
        this._taskBadge = value;
    }
    get textColor() {
        return utils_1.ColorAdapter.contrast(this.taskBadge.color);
    }
    get backgroundColor() {
        return utils_1.ColorAdapter.background(this.taskBadge.color);
    }
    get icon$() {
        if (!this.taskBadge?.fullIconUrl)
            return null;
        return this._statusIconService.load(this.taskBadge?.fullIconUrl);
    }
    get name() {
        return this.taskBadge.name;
    }
    get imageFilter() {
        return utils_1.ColorAdapter.hexToHsl(this.taskBadge.color);
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TaskBadgeViewComponent.prototype, "taskBadge", null);
exports.TaskBadgeViewComponent = TaskBadgeViewComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-task-badge-view',
        templateUrl: './task-badge-view.component.html',
        styleUrls: ['./task-badge-view.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [desktop_ui_lib_1.StatusIconService])
], TaskBadgeViewComponent);
//# sourceMappingURL=task-badge-view.component.js.map