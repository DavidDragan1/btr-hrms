"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopDirectiveModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const spinner_button_directive_1 = require("./spinner-button.directive");
const theme_1 = require("@nebular/theme");
let DesktopDirectiveModule = exports.DesktopDirectiveModule = class DesktopDirectiveModule {
};
exports.DesktopDirectiveModule = DesktopDirectiveModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [spinner_button_directive_1.SpinnerButtonDirective],
        exports: [spinner_button_directive_1.SpinnerButtonDirective],
        imports: [
            common_1.CommonModule,
            theme_1.NbSpinnerModule
        ]
    })
], DesktopDirectiveModule);
//# sourceMappingURL=desktop-directive.module.js.map