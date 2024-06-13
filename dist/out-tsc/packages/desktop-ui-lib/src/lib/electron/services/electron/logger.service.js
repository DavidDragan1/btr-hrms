"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const electron_service_1 = require("./electron.service");
let LoggerService = exports.LoggerService = class LoggerService {
    constructor(_electronService) {
        this._electronService = _electronService;
        if (this._electronService.isElectron) {
            // Previously we used that class to on-demand load the electron-log module, but now we load it in the header of this file.
            // Still we want to keep that way to "require" it for now
            this._log = window.require('electron-log');
            console.log = this._log.log;
            Object.assign(console, this._log.functions);
        }
    }
    get log() {
        return this._log;
    }
};
exports.LoggerService = LoggerService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [electron_service_1.ElectronService])
], LoggerService);
//# sourceMappingURL=logger.service.js.map