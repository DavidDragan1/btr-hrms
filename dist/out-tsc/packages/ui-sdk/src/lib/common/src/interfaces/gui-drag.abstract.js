"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuiDrag = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let GuiDrag = exports.GuiDrag = class GuiDrag {
    constructor() {
        this._collapsed = false;
        this._move = false;
        this._hide = false;
        this._positions = [];
    }
    onClickSetting(event) { }
    set templateRef(value) {
        this._templateRef = value;
    }
    get templateRef() {
        return this._templateRef;
    }
    set title(value) {
        this._title = value;
    }
    get title() {
        return this._title;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        if (this._positions.length === 0)
            this._positions.push(value);
        this._position = this._positions[0];
    }
    get isExpand() {
        return !this._collapsed;
    }
    set isExpand(value) {
        this._collapsed = !value;
    }
    get isCollapse() {
        return this._collapsed;
    }
    set isCollapse(value) {
        this._collapsed = value;
    }
    get move() {
        return this._move;
    }
    set move(value) {
        this._move = value;
    }
    get hide() {
        return this._hide;
    }
    set hide(value) {
        this._hide = value;
    }
    toObject() {
        return {
            position: this.position,
            isCollapse: this.isCollapse,
            isExpand: this.isExpand,
            hide: this.hide,
            title: this.title
        };
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", core_1.TemplateRef),
    tslib_1.__metadata("design:paramtypes", [core_1.TemplateRef])
], GuiDrag.prototype, "templateRef", null);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], GuiDrag.prototype, "position", null);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], GuiDrag.prototype, "isExpand", null);
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], GuiDrag.prototype, "isCollapse", null);
exports.GuiDrag = GuiDrag = tslib_1.__decorate([
    (0, core_1.Component)({ template: '' }),
    tslib_1.__metadata("design:paramtypes", [])
], GuiDrag);
//# sourceMappingURL=gui-drag.abstract.js.map