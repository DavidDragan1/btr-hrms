"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubstaffTimerIcon = void 0;
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const contracts_1 = require("@gauzy/contracts");
const interfaces_1 = require("../interfaces");
class HubstaffTimerIcon extends interfaces_1.TimerIcon {
    constructor() {
        super();
        this.source = contracts_1.TimeLogSourceEnum.HUBSTAFF;
        this.name = free_solid_svg_icons_1.faArrowsTurnToDots;
    }
}
exports.HubstaffTimerIcon = HubstaffTimerIcon;
//# sourceMappingURL=hubstaff-timer-icon.js.map