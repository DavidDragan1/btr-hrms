"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const settings_component_1 = require("./settings.component");
const theme_1 = require("@nebular/theme");
const forms_1 = require("@angular/forms");
const time_tracker_service_1 = require("../time-tracker/time-tracker.service");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const language_module_1 = require("../language/language.module");
const core_2 = require("@ngx-translate/core");
const services_1 = require("../services");
const language_selector_service_1 = require("../language/language-selector.service");
const task_render_1 = require("../time-tracker/task-render");
const ssl_1 = require("./ssl");
let SettingsModule = exports.SettingsModule = class SettingsModule {
};
exports.SettingsModule = SettingsModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [settings_component_1.SettingsComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbSidebarModule,
            theme_1.NbMenuModule.forRoot(),
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbListModule,
            theme_1.NbSelectModule,
            forms_1.FormsModule,
            theme_1.NbToggleModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            theme_1.NbAlertModule,
            theme_1.NbProgressBarModule,
            theme_1.NbTabsetModule,
            theme_1.NbAccordionModule,
            theme_1.NbTooltipModule,
            theme_1.NbSpinnerModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            language_module_1.LanguageModule,
            core_2.TranslateModule,
            task_render_1.TaskRenderModule,
            ssl_1.SslModule
        ],
        providers: [theme_1.NbToastrService, time_tracker_service_1.TimeTrackerService, theme_1.NbDialogService, services_1.Store, language_selector_service_1.LanguageSelectorService],
        exports: [settings_component_1.SettingsComponent]
    })
], SettingsModule);
//# sourceMappingURL=settings.module.js.map