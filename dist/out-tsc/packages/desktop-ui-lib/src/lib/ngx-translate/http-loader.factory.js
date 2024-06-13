"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpLoaderFactory = void 0;
const http_loader_1 = require("@ngx-translate/http-loader");
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
//# sourceMappingURL=http-loader.factory.js.map