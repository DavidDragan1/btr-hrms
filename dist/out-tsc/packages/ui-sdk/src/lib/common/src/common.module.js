"use strict";
var CommonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CommonModule = exports.CommonModule = CommonModule_1 = class CommonModule {
    /**
     * Returns a ModuleWithProviders object that specifies the CommonModule and its providers.
     *
     * @return {ModuleWithProviders<CommonModule>} A ModuleWithProviders object with the CommonModule and its providers.
     */
    static forRoot() {
        return {
            ngModule: CommonModule_1,
            providers: []
        };
    }
};
exports.CommonModule = CommonModule = CommonModule_1 = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [],
        declarations: [],
        exports: []
    })
], CommonModule);
//# sourceMappingURL=common.module.js.map