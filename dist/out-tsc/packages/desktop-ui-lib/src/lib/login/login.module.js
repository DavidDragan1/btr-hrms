"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgxLoginModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const auth_1 = require("@nebular/auth");
const theme_1 = require("@nebular/theme");
const login_component_1 = require("./login.component");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const ngx_translate_1 = require("../ngx-translate");
const language_selector_service_1 = require("../language/language-selector.service");
let NgxLoginModule = exports.NgxLoginModule = class NgxLoginModule {
};
exports.NgxLoginModule = NgxLoginModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            theme_1.NbAlertModule,
            auth_1.NbAuthModule,
            theme_1.NbButtonModule,
            theme_1.NbCardModule,
            theme_1.NbCheckboxModule,
            theme_1.NbIconModule,
            theme_1.NbInputModule,
            theme_1.NbFormFieldModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            ngx_translate_1.NgxTranslateModule
        ],
        declarations: [login_component_1.NgxLoginComponent],
        exports: [login_component_1.NgxLoginComponent],
        providers: [language_selector_service_1.LanguageSelectorService]
    })
], NgxLoginModule);
//# sourceMappingURL=login.module.js.map