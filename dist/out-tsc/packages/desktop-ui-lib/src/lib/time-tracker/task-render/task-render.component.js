"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRenderComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let TaskRenderComponent = exports.TaskRenderComponent = class TaskRenderComponent {
    constructor() {
        this._task$ = new rxjs_1.BehaviorSubject(null);
    }
    get task() {
        return this._task$.getValue();
    }
    get task$() {
        return this._task$;
    }
    set rowData(value) {
        if (value) {
            this._task$.next(value);
        }
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TaskRenderComponent.prototype, "rowData", null);
exports.TaskRenderComponent = TaskRenderComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        template: '',
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TaskRenderComponent);
//# sourceMappingURL=task-render.component.js.map