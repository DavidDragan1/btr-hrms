"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDashboardModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const server_dashboard_component_1 = require("./server-dashboard.component");
const theme_1 = require("@nebular/theme");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const ngx_translate_1 = require("../ngx-translate");
const language_selector_service_1 = require("../language/language-selector.service");
let ServerDashboardModule = exports.ServerDashboardModule = class ServerDashboardModule {
};
exports.ServerDashboardModule = ServerDashboardModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [server_dashboard_component_1.ServerDashboardComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbDialogModule,
            theme_1.NbButtonModule,
            theme_1.NbSpinnerModule,
            theme_1.NbAccordionModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            ngx_translate_1.NgxTranslateModule
        ],
        exports: [server_dashboard_component_1.ServerDashboardComponent],
        providers: [theme_1.NbDialogService, language_selector_service_1.LanguageSelectorService]
    })
], ServerDashboardModule);
//# sourceMappingURL=server-dashboard.module.js.map