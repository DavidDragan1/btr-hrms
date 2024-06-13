"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOnService = exports.AlwaysOnStateEnum = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const services_1 = require("../electron/services");
const moment = require("moment/moment");
var AlwaysOnStateEnum;
(function (AlwaysOnStateEnum) {
    AlwaysOnStateEnum["STARTED"] = "Started";
    AlwaysOnStateEnum["STOPPED"] = "Stopped";
    AlwaysOnStateEnum["LOADING"] = "loading";
})(AlwaysOnStateEnum || (exports.AlwaysOnStateEnum = AlwaysOnStateEnum = {}));
let AlwaysOnService = exports.AlwaysOnService = class AlwaysOnService {
    constructor(_electronService) {
        this._electronService = _electronService;
    }
    run(state) {
        this._electronService.ipcRenderer.send('change_state_from_ao', state);
    }
    get state$() {
        return new rxjs_1.Observable((observer) => {
            this._electronService.ipcRenderer.on('change_state_from_ao', (_, state) => {
                observer.next(state);
            });
        });
    }
    get counter$() {
        return new rxjs_1.Observable((observer) => {
            this._electronService.ipcRenderer.on('ao_time_update', (_, count) => {
                observer.next(count);
            });
        });
    }
    update(current, today) {
        this._electronService.ipcRenderer.send('ao_time_update', {
            today: moment.duration(today, 'seconds').format('HH:mm', {
                trim: false,
                trunc: true
            }),
            current
        });
    }
};
exports.AlwaysOnService = AlwaysOnService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService])
], AlwaysOnService);
//# sourceMappingURL=always-on.service.js.map