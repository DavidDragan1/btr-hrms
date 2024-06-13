"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
let SetupService = exports.SetupService = class SetupService {
    constructor(_http) {
        this._http = _http;
    }
    pingAw(host) {
        return (0, rxjs_1.firstValueFrom)(this._http.get(host, { responseType: 'text' }));
    }
    pingServer(values) {
        return (0, rxjs_1.firstValueFrom)(this._http.get(values.host + '/api'));
    }
};
exports.SetupService = SetupService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], SetupService);
//# sourceMappingURL=setup.service.js.map