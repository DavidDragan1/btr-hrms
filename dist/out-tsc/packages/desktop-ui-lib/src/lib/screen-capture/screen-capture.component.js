"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenCaptureComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const platform_browser_1 = require("@angular/platform-browser");
const services_1 = require("../electron/services");
const constants_1 = require("../constants");
let ScreenCaptureComponent = exports.ScreenCaptureComponent = class ScreenCaptureComponent {
    constructor(electronService, _ngZone, domSanitizer, _environment, _domSanitizer) {
        this.electronService = electronService;
        this._ngZone = _ngZone;
        this.domSanitizer = domSanitizer;
        this._environment = _environment;
        this._domSanitizer = _domSanitizer;
        this._screenCaptureUrl$ = new rxjs_1.BehaviorSubject(null);
    }
    ngOnInit() {
        this.electronService.ipcRenderer.on('show_popup_screen_capture', (event, arg) => {
            this._ngZone.run(() => {
                this.note = arg.note;
                this._screenCaptureUrl$.next(this.domSanitizer.bypassSecurityTrustUrl(arg.imgUrl));
            });
        });
    }
    get screenCaptureUrl$() {
        return this._screenCaptureUrl$.asObservable();
    }
    get logoUrl() {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(this._environment.GAUZY_DESKTOP_LOGO_512X512);
    }
};
exports.ScreenCaptureComponent = ScreenCaptureComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-screen-capture',
        templateUrl: './screen-capture.component.html',
        styleUrls: ['./screen-capture.component.scss'],
    }),
    tslib_1.__param(3, (0, core_1.Inject)(constants_1.GAUZY_ENV)),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        core_1.NgZone,
        platform_browser_1.DomSanitizer, Object, platform_browser_1.DomSanitizer])
], ScreenCaptureComponent);
//# sourceMappingURL=screen-capture.component.js.map