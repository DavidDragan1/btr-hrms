"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOnModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const always_on_component_1 = require("./always-on.component");
const theme_1 = require("@nebular/theme");
const ngx_translate_1 = require("../ngx-translate");
const language_selector_service_1 = require("../language/language-selector.service");
const always_on_service_1 = require("./always-on.service");
const eva_icons_1 = require("@nebular/eva-icons");
let AlwaysOnModule = exports.AlwaysOnModule = class AlwaysOnModule {
};
exports.AlwaysOnModule = AlwaysOnModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [always_on_component_1.AlwaysOnComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            ngx_translate_1.NgxTranslateModule,
            theme_1.NbIconModule,
            theme_1.NbTooltipModule,
            theme_1.NbButtonModule,
            eva_icons_1.NbEvaIconsModule
        ],
        providers: [language_selector_service_1.LanguageSelectorService, always_on_service_1.AlwaysOnService],
    })
], AlwaysOnModule);
//# sourceMappingURL=always-on.module.js.map