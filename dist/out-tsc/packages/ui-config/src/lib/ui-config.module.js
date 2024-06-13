"use strict";
var UiConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiConfigModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const ui_config_service_1 = require("./ui-config.service");
let UiConfigModule = exports.UiConfigModule = UiConfigModule_1 = class UiConfigModule {
    /**
     * Returns a ModuleWithProviders object that can be used to configure the UiConfigModule.
     *
     * @return {ModuleWithProviders<UiConfigModule>} The ModuleWithProviders object containing the UiConfigModule and an empty providers array.
     */
    static forRoot() {
        return {
            ngModule: UiConfigModule_1,
            providers: []
        };
    }
};
exports.UiConfigModule = UiConfigModule = UiConfigModule_1 = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [common_1.CommonModule],
        providers: [ui_config_service_1.UiConfigService]
    })
], UiConfigModule);
//# sourceMappingURL=ui-config.module.js.map