"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDetailComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@ngx-translate/core");
const theme_1 = require("@nebular/theme");
let TaskDetailComponent = exports.TaskDetailComponent = class TaskDetailComponent {
    constructor(_translateService, _dialogRef) {
        this._translateService = _translateService;
        this._dialogRef = _dialogRef;
        this.hidden = new core_1.EventEmitter();
    }
    get title() {
        return this.task?.title;
    }
    get number() {
        return this.task?.taskNumber;
    }
    get tags() {
        return this.task?.tags;
    }
    get description() {
        return (this.task?.description ||
            this._translateService.instant('GOALS_PAGE.NO_DESCRIPTION'));
    }
    get size() {
        return this.task?.taskSize;
    }
    get priority() {
        return this.task?.taskPriority;
    }
    get status() {
        return this.task?.taskStatus;
    }
    hide() {
        this.hidden.emit(true);
    }
    dismiss() {
        this.hide();
        this._dialogRef.close();
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], TaskDetailComponent.prototype, "task", void 0);
tslib_1.__decorate([
    (0, core_1.Output)(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], TaskDetailComponent.prototype, "hidden", void 0);
exports.TaskDetailComponent = TaskDetailComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-task-detail',
        templateUrl: './task-detail.component.html',
        styleUrls: ['./task-detail.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [core_2.TranslateService, theme_1.NbDialogRef])
], TaskDetailComponent);
//# sourceMappingURL=task-detail.component.js.map