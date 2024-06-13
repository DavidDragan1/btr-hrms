"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorServerService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ErrorServerService = exports.ErrorServerService = class ErrorServerService {
    constructor() { }
    get message() {
        return this._message;
    }
    set message(error) {
        this._message = error.message;
    }
};
exports.ErrorServerService = ErrorServerService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ErrorServerService);
//# sourceMappingURL=error-server.service.js.map