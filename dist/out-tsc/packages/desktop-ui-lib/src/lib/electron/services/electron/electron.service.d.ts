import { ipcRenderer, desktopCapturer, shell } from 'electron';
import * as remote from '@electron/remote';
export declare class ElectronService {
    ipcRenderer: typeof ipcRenderer;
    remote: typeof remote;
    desktopCapturer: typeof desktopCapturer;
    shell: typeof shell;
    /**
     * Checks if the application is running in the Electron environment.
     */
    get isElectron(): boolean;
    constructor();
}
//# sourceMappingURL=electron.service.d.ts.map