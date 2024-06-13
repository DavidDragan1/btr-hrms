"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdaterModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const updater_component_1 = require("./updater.component");
const theme_1 = require("@nebular/theme");
let UpdaterModule = exports.UpdaterModule = class UpdaterModule {
};
exports.UpdaterModule = UpdaterModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [updater_component_1.UpdaterComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbButtonModule,
            theme_1.NbAlertModule,
            theme_1.NbAccordionModule
        ]
    })
], UpdaterModule);
//# sourceMappingURL=updater.module.js.map