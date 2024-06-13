"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorClientService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ErrorClientService = exports.ErrorClientService = class ErrorClientService {
    constructor() { }
    get message() {
        return this._message;
    }
    set message(error) {
        this._message = error.message ? error.message : error.toString();
    }
    get stack() {
        return this._stack;
    }
    set stack(error) {
        this._stack = error.stack;
    }
};
exports.ErrorClientService = ErrorClientService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ErrorClientService);
//# sourceMappingURL=error-client.service.js.map