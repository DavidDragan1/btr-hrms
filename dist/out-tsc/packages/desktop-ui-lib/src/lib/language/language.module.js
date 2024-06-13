"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const language_service_1 = require("./language.service");
const language_selector_component_1 = require("./language-selector.component");
const ngx_translate_1 = require("../ngx-translate");
const theme_1 = require("@nebular/theme");
const user_organization_service_1 = require("../time-tracker/organization-selector/user-organization.service");
const services_1 = require("../services");
const language_selector_service_1 = require("./language-selector.service");
let LanguageModule = exports.LanguageModule = class LanguageModule {
};
exports.LanguageModule = LanguageModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [language_selector_component_1.LanguageSelectorComponent],
        imports: [common_1.CommonModule, ngx_translate_1.NgxTranslateModule, theme_1.NbSelectModule],
        exports: [language_selector_component_1.LanguageSelectorComponent],
        providers: [
            language_service_1.LanguageService,
            user_organization_service_1.UserOrganizationService,
            services_1.Store,
            language_selector_service_1.LanguageSelectorService,
        ],
    })
], LanguageModule);
//# sourceMappingURL=language.module.js.map