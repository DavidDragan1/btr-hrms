"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const about_component_1 = require("./about.component");
const theme_1 = require("@nebular/theme");
const ngx_translate_1 = require("../../ngx-translate");
const language_selector_service_1 = require("../../language/language-selector.service");
let AboutModule = exports.AboutModule = class AboutModule {
};
exports.AboutModule = AboutModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [about_component_1.AboutComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbCardModule,
            theme_1.NbButtonModule,
            theme_1.NbLayoutModule,
            ngx_translate_1.NgxTranslateModule
        ],
        providers: [language_selector_service_1.LanguageSelectorService]
    })
], AboutModule);
//# sourceMappingURL=about.module.js.map