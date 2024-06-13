"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerIconFactory = void 0;
const contracts_1 = require("@gauzy/contracts");
const concretes_1 = require("../concretes");
class TimerIconFactory {
    static create(source) {
        switch (source) {
            case contracts_1.TimeLogSourceEnum.MOBILE:
                return new concretes_1.MobileTimerIcon();
            case contracts_1.TimeLogSourceEnum.DESKTOP:
                return new concretes_1.DesktopTimerIcon();
            case contracts_1.TimeLogSourceEnum.BROWSER_EXTENSION:
                return new concretes_1.BrowserExtensionTimerIcon();
            case contracts_1.TimeLogSourceEnum.HUBSTAFF:
                return new concretes_1.HubstaffTimerIcon();
            case contracts_1.TimeLogSourceEnum.UPWORK:
                return new concretes_1.UpworkTimerIcon();
            case contracts_1.TimeLogSourceEnum.TEAMS:
                return new concretes_1.TeamTimerIcon();
            default:
                return new concretes_1.WebTimerIcon();
        }
    }
}
exports.TimerIconFactory = TimerIconFactory;
//# sourceMappingURL=timer-icon-factory.js.map