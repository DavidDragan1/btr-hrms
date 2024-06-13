"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerDownModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const server_down_page_1 = require("./server-down.page");
const theme_1 = require("@nebular/theme");
const services_1 = require("../services");
const core_2 = require("@ngx-translate/core");
tslib_1.__exportStar(require("./server-down.page"), exports);
const routes = [
    {
        path: '',
        component: server_down_page_1.ServerDownPage
    }
];
let ServerDownModule = exports.ServerDownModule = class ServerDownModule {
};
exports.ServerDownModule = ServerDownModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            theme_1.NbSidebarModule,
            theme_1.NbLayoutModule,
            router_1.RouterModule.forChild(routes),
            core_2.TranslateModule,
        ],
        declarations: [server_down_page_1.ServerDownPage],
        providers: [services_1.Store, services_1.ServerConnectionService],
    })
], ServerDownModule);
//# sourceMappingURL=server-down.module.js.map