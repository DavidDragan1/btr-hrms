"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let ElectronService = exports.ElectronService = class ElectronService {
    /**
     * Checks if the application is running in the Electron environment.
     */
    get isElectron() {
        return !!(window && window.process && window.process.type);
    }
    constructor() {
        // Conditional imports because we only want to load modules inside Electron App
        if (this.isElectron) {
            // Previously we used that class to on-demand load the electron-log module, but now we load it in the header of this file.
            // Still we want to keep that way to "require" it for now
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.remote = window.require('@electron/remote');
            this.shell = window.require('electron').shell;
            this.desktopCapturer = {
                getSources: async (opts) => await this.ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts),
            };
        }
    }
};
exports.ElectronService = ElectronService = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], ElectronService);
//# sourceMappingURL=electron.service.js.map