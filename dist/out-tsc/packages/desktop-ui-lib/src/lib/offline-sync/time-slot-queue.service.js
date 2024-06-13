"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSlotQueueService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let TimeSlotQueueService = exports.TimeSlotQueueService = class TimeSlotQueueService {
    set viewQueueStateUpdater(value) {
        this._viewQueueStateUpdater$.next(value);
    }
    get viewQueueStateUpdater$() {
        return new rxjs_1.Observable((observer) => (this._viewQueueStateUpdater$ = observer));
    }
    set updater(value) {
        this._updater$.next(value);
    }
    get updater$() {
        return new rxjs_1.Observable((observer) => (this._updater$ = observer));
    }
};
exports.TimeSlotQueueService = TimeSlotQueueService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], TimeSlotQueueService);
//# sourceMappingURL=time-slot-queue.service.js.map