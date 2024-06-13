"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const angular2_smart_table_1 = require("angular2-smart-table");
const pagination_component_1 = require("./pagination.component");
const theme_1 = require("@nebular/theme");
const core_2 = require("@ngx-translate/core");
let PaginationModule = exports.PaginationModule = class PaginationModule {
};
exports.PaginationModule = PaginationModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [pagination_component_1.PaginationComponent],
        imports: [
            common_1.CommonModule,
            angular2_smart_table_1.Angular2SmartTableModule,
            theme_1.NbIconModule,
            theme_1.NbSelectModule,
            core_2.TranslateModule
        ],
        exports: [pagination_component_1.PaginationComponent],
    })
], PaginationModule);
//# sourceMappingURL=pagination.module.js.map