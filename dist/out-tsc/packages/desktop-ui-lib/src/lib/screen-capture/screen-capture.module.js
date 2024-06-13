"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenCaptureModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const screen_capture_component_1 = require("./screen-capture.component");
const theme_1 = require("@nebular/theme");
let ScreenCaptureModule = exports.ScreenCaptureModule = class ScreenCaptureModule {
};
exports.ScreenCaptureModule = ScreenCaptureModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [screen_capture_component_1.ScreenCaptureComponent],
        imports: [common_1.CommonModule, theme_1.NbLayoutModule, theme_1.NbCardModule],
        exports: [screen_capture_component_1.ScreenCaptureComponent],
    })
], ScreenCaptureModule);
//# sourceMappingURL=screen-capture.module.js.map