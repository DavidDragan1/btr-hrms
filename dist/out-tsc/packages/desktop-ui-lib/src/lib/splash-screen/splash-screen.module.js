"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplashScreenModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const splash_screen_component_1 = require("./splash-screen.component");
const theme_1 = require("@nebular/theme");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const ngx_translate_1 = require("../ngx-translate");
const language_selector_service_1 = require("../language/language-selector.service");
let SplashScreenModule = exports.SplashScreenModule = class SplashScreenModule {
};
exports.SplashScreenModule = SplashScreenModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [splash_screen_component_1.SplashScreenComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbSpinnerModule,
            theme_1.NbButtonModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            theme_1.NbIconModule,
            ngx_translate_1.NgxTranslateModule
        ],
        exports: [splash_screen_component_1.SplashScreenComponent],
        providers: [language_selector_service_1.LanguageSelectorService]
    })
], SplashScreenModule);
//# sourceMappingURL=splash-screen.module.js.map