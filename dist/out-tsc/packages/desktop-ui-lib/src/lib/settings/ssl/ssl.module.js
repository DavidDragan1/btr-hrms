"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SslModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const theme_1 = require("@nebular/theme");
const forms_1 = require("@angular/forms");
const ssl_component_1 = require("./ssl.component");
const core_2 = require("@ngx-translate/core");
const language_module_1 = require("../../language/language.module");
const desktop_directive_module_1 = require("../../directives/desktop-directive.module");
let SslModule = exports.SslModule = class SslModule {
};
exports.SslModule = SslModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [ssl_component_1.SslComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbMenuModule.forRoot(),
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbSelectModule,
            forms_1.FormsModule,
            theme_1.NbToggleModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            theme_1.NbTooltipModule,
            theme_1.NbSpinnerModule,
            language_module_1.LanguageModule,
            core_2.TranslateModule,
            desktop_directive_module_1.DesktopDirectiveModule
        ],
        providers: [],
        exports: [ssl_component_1.SslComponent]
    })
], SslModule);
//# sourceMappingURL=ssl.module.js.map