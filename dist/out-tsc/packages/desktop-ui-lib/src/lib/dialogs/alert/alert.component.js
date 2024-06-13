"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let AlertComponent = exports.AlertComponent = class AlertComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    dismiss() {
        this.dialogRef.close();
    }
};
tslib_1.__decorate([
    (0, core_1.Input)(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "data", void 0);
exports.AlertComponent = AlertComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [theme_1.NbDialogRef])
], AlertComponent);
//# sourceMappingURL=alert.component.js.map