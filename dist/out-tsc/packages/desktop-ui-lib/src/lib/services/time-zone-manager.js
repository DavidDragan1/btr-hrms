"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneManager = exports.ZoneEnum = void 0;
const time_tracker_date_manager_1 = require("./time-tracker-date.manager");
const moment = require("moment");
var ZoneEnum;
(function (ZoneEnum) {
    ZoneEnum["LOCAL"] = "local";
    ZoneEnum["UTC"] = "utc";
})(ZoneEnum || (exports.ZoneEnum = ZoneEnum = {}));
class TimeZoneManager {
    static changeZone(value) {
        switch (value) {
            case ZoneEnum.UTC:
                time_tracker_date_manager_1.TimeTrackerDateManager.utcOffset = 0;
                break;
            case ZoneEnum.LOCAL:
                time_tracker_date_manager_1.TimeTrackerDateManager.utcOffset = moment().utcOffset();
                break;
            default:
                break;
        }
    }
    static get zones() {
        return [
            {
                translation: 'TIMER_TRACKER.SETTINGS.TIMEZONE_LOCAL',
                name: ZoneEnum.LOCAL,
            },
            {
                translation: 'TIMER_TRACKER.SETTINGS.TIMEZONE_UTC',
                name: ZoneEnum.UTC,
            },
        ];
    }
}
exports.TimeZoneManager = TimeZoneManager;
//# sourceMappingURL=time-zone-manager.js.map