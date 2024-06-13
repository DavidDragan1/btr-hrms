"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const setup_component_1 = require("./setup.component");
// import { AlertComponent } from '../../@shared/dialogs/alert/alert.component';
const setup_service_1 = require("./setup.service");
const theme_1 = require("@nebular/theme");
const forms_1 = require("@angular/forms");
const eva_icons_1 = require("@nebular/eva-icons");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const language_module_1 = require("../language/language.module");
const core_2 = require("@ngx-translate/core");
const ssl_1 = require("../settings/ssl");
let SetupModule = exports.SetupModule = class SetupModule {
};
exports.SetupModule = SetupModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [setup_component_1.SetupComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbToggleModule,
            theme_1.NbSelectModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            forms_1.FormsModule,
            theme_1.NbSpinnerModule,
            theme_1.NbCheckboxModule,
            theme_1.NbIconModule,
            eva_icons_1.NbEvaIconsModule,
            theme_1.NbStepperModule,
            theme_1.NbIconModule,
            theme_1.NbRadioModule,
            theme_1.NbProgressBarModule,
            theme_1.NbFormFieldModule,
            theme_1.NbDialogModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            language_module_1.LanguageModule,
            core_2.TranslateModule,
            ssl_1.SslModule
        ],
        exports: [setup_component_1.SetupComponent],
        providers: [setup_service_1.SetupService, theme_1.NbDialogService]
    })
], SetupModule);
//# sourceMappingURL=setup.module.js.map