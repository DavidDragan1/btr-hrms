"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgxTranslateModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const core_2 = require("@ngx-translate/core");
const ngx_translate_1 = require("../ngx-translate");
const http_1 = require("@angular/common/http");
const language_initializer_factory_1 = require("./language-initializer.factory");
const services_1 = require("../electron/services");
let NgxTranslateModule = exports.NgxTranslateModule = class NgxTranslateModule {
};
exports.NgxTranslateModule = NgxTranslateModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [],
        imports: [
            common_1.CommonModule,
            core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: ngx_translate_1.HttpLoaderFactory,
                    deps: [http_1.HttpClient]
                },
            }),
        ],
        providers: [
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: language_initializer_factory_1.LanguageInitializerFactory,
                deps: [core_2.TranslateService, services_1.ElectronService],
                multi: true
            }
        ],
        exports: [core_2.TranslateModule],
    })
], NgxTranslateModule);
//# sourceMappingURL=ngx-translate.module.js.map