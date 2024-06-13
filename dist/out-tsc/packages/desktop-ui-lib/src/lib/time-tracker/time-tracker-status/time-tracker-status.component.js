"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerStatusComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const time_tracker_status_service_1 = require("./time-tracker-status.service");
let TimeTrackerStatusComponent = exports.TimeTrackerStatusComponent = class TimeTrackerStatusComponent {
    constructor(_timeTrackerStatusService) {
        this._timeTrackerStatusService = _timeTrackerStatusService;
    }
    get icon$() {
        return this._timeTrackerStatusService.icon$;
    }
};
exports.TimeTrackerStatusComponent = TimeTrackerStatusComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-time-tracker-status',
        templateUrl: './time-tracker-status.component.html',
        styleUrls: ['./time-tracker-status.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [time_tracker_status_service_1.TimeTrackerStatusService])
], TimeTrackerStatusComponent);
//# sourceMappingURL=time-tracker-status.component.js.map