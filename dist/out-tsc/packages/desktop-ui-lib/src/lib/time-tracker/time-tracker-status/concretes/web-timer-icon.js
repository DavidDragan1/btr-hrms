"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTimerIcon = void 0;
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const contracts_1 = require("@gauzy/contracts");
const interfaces_1 = require("../interfaces");
class WebTimerIcon extends interfaces_1.TimerIcon {
    constructor() {
        super();
        this.source = contracts_1.TimeLogSourceEnum.WEB_TIMER;
        this.name = free_solid_svg_icons_1.faGlobe;
    }
}
exports.WebTimerIcon = WebTimerIcon;
//# sourceMappingURL=web-timer-icon.js.map