"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const alert_component_1 = require("./alert.component");
const theme_1 = require("@nebular/theme");
const core_2 = require("@ngx-translate/core");
let AlertModule = exports.AlertModule = class AlertModule {
};
exports.AlertModule = AlertModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [alert_component_1.AlertComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbButtonModule,
            theme_1.NbAlertModule,
            core_2.TranslateModule
        ],
        exports: [alert_component_1.AlertComponent]
    })
], AlertModule);
//# sourceMappingURL=alert.module.js.map