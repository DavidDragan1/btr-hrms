"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDueDateComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const moment = require("moment/moment");
let TaskDueDateComponent = exports.TaskDueDateComponent = class TaskDueDateComponent {
    constructor() {
        this.format = 'YYYY-MM-DD';
    }
    get dueDate() {
        return moment(this._dueDate).format(this._format);
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        if (value) {
            this._format = value;
        }
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], TaskDueDateComponent.prototype, "dueDate", null);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], TaskDueDateComponent.prototype, "format", null);
exports.TaskDueDateComponent = TaskDueDateComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-task-due-date',
        templateUrl: './task-due-date.component.html',
        styleUrls: ['./task-due-date.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TaskDueDateComponent);
//# sourceMappingURL=task-due-date.component.js.map