"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConnectionFactory = exports.DesktopUiLibModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const __1 = require("..");
let DesktopUiLibModule = exports.DesktopUiLibModule = class DesktopUiLibModule {
};
exports.DesktopUiLibModule = DesktopUiLibModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        imports: [common_1.CommonModule]
    })
], DesktopUiLibModule);
function serverConnectionFactory(provider, store, router, injector) {
    return () => {
        const environment = injector.get(__1.GAUZY_ENV);
        const url = environment.API_BASE_URL;
        console.log('Checking server connection in serverConnectionFactory on URL: ', url);
        return provider
            .checkServerConnection(url)
            .finally(() => {
            console.log(`Server connection status in serverConnectionFactory for URL: ${url} is ${store.serverConnection}`);
            // if (store.serverConnection !== 200) {
            // 	router.navigate(['server-down']);
            // }
        })
            .catch((err) => {
            console.error(`Error checking server connection in serverConnectionFactory for URL: ${url}`, err);
        });
    };
}
exports.serverConnectionFactory = serverConnectionFactory;
//# sourceMappingURL=desktop-ui-lib.module.js.map