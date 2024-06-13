"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageViewerComponent = exports.fadeInOutAnimation = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const animations_1 = require("@angular/animations");
const services_1 = require("../electron/services");
const image_viewer_service_1 = require("./image-viewer.service");
const rxjs_1 = require("rxjs");
const theme_1 = require("@nebular/theme");
exports.fadeInOutAnimation = (0, animations_1.trigger)('fadeInOut', [
    (0, animations_1.transition)(':enter', [
        // :enter is alias to 'void => *'
        (0, animations_1.style)({ opacity: 0 }),
        (0, animations_1.animate)(300, (0, animations_1.style)({ opacity: 1 })),
    ]),
    (0, animations_1.transition)(':leave', [
        // :leave is alias to '* => void'
        (0, animations_1.animate)(300, (0, animations_1.style)({ opacity: 0 })),
    ]),
]);
let ImageViewerComponent = exports.ImageViewerComponent = class ImageViewerComponent {
    constructor(
    // private dialogRef: NbDialogRef<any>
    _electronService, _ngZone, _imageViewerService, _iconLibraries) {
        this._electronService = _electronService;
        this._ngZone = _ngZone;
        this._imageViewerService = _imageViewerService;
        this._iconLibraries = _iconLibraries;
        this.items = [];
        this.item = {};
        this._iconLibraries.registerFontPack('font-awesome', {
            packClass: 'fas',
            iconClassPrefix: 'fa'
        });
    }
    ngOnInit() {
        this._electronService.ipcRenderer.on('show_image', (event, arg) => {
            this._ngZone.run(() => {
                this.items = arg
                    .sort((a, b) => {
                    const c = new Date(b.recordedAt);
                    const d = new Date(a.recordedAt);
                    return c - d;
                })
                    .map((img) => ({
                    ...img,
                    fullUrl: (0, rxjs_1.from)(this.sanitizeImgUrl(img.fullUrl)),
                    thumbUrl: (0, rxjs_1.from)(this.sanitizeImgUrl(img.thumbUrl)),
                }));
                this.item = this.items[0];
            });
        });
        this.active_index = 0;
    }
    close() {
        // this.dialogRef.close();
        this._electronService.ipcRenderer.send('close_image_view');
    }
    next($event) {
        $event.stopPropagation();
        this.active_index = Math.min(this.active_index + 1, this.items.length - 1);
        this.item = this.items[this.active_index];
        this.updateActiveIndex();
    }
    prev($event) {
        $event.stopPropagation();
        this.active_index = Math.max(this.active_index - 1, 0);
        this.item = this.items[this.active_index];
        this.updateActiveIndex();
    }
    setFocus(selectedItem) {
        const foundItem = this.items.find((item) => item === selectedItem);
        if (this.item) {
            const index = this.items.indexOf(this.item);
            this.active_index = index;
            this.item = foundItem;
        }
        else {
            this.item = selectedItem;
        }
        this.updateActiveIndex();
    }
    updateActiveIndex() {
        const activeItem = this.customScroll.nativeElement.querySelector('.thumb-item-active');
        if (activeItem) {
            const position = activeItem.getBoundingClientRect();
            if (position) {
                const left = position.left;
                const right = position.left + activeItem.clientWidth;
                const scrollRight = this.customScroll.nativeElement.clientWidth;
                const scrollLeft = this.customScroll.nativeElement.scrollLeft;
                if (left < Math.abs(scrollLeft) || right > scrollRight) {
                    this.customScroll.nativeElement.scrollTo({
                        left: left,
                    });
                }
            }
        }
    }
    async sanitizeImgUrl(img) {
        return await this._imageViewerService.sanitizeImgUrl(img);
    }
    trackById(index, item) {
        return item.id;
    }
};
tslib_1.__decorate([
    (0, core_1.ViewChild)('customScroll', { static: true }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], ImageViewerComponent.prototype, "customScroll", void 0);
exports.ImageViewerComponent = ImageViewerComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'ngx-image-viewer',
        templateUrl: './image-viewer.component.html',
        styleUrls: ['./image-viewer.component.scss'],
        animations: [exports.fadeInOutAnimation],
    }),
    tslib_1.__metadata("design:paramtypes", [services_1.ElectronService,
        core_1.NgZone,
        image_viewer_service_1.ImageViewerService,
        theme_1.NbIconLibraries])
], ImageViewerComponent);
//# sourceMappingURL=image-viewer.component.js.map