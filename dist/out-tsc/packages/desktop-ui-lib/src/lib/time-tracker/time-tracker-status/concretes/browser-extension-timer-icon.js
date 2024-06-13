"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserExtensionTimerIcon = void 0;
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const contracts_1 = require("@gauzy/contracts");
const interfaces_1 = require("../interfaces");
class BrowserExtensionTimerIcon extends interfaces_1.TimerIcon {
    constructor() {
        super();
        this.source = contracts_1.TimeLogSourceEnum.BROWSER_EXTENSION;
        this.name = free_solid_svg_icons_1.faBox;
    }
}
exports.BrowserExtensionTimerIcon = BrowserExtensionTimerIcon;
//# sourceMappingURL=browser-extension-timer-icon.js.map