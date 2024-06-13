"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageViewerModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const image_viewer_component_1 = require("./image-viewer.component");
const theme_1 = require("@nebular/theme");
const date_time_pipe_1 = require("../time-tracker/pipes/date-time.pipe");
const image_viewer_service_1 = require("./image-viewer.service");
const services_1 = require("../services");
const eva_icons_1 = require("@nebular/eva-icons");
let ImageViewerModule = exports.ImageViewerModule = class ImageViewerModule {
};
exports.ImageViewerModule = ImageViewerModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [image_viewer_component_1.ImageViewerComponent, date_time_pipe_1.dateTimePipe],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbDialogModule,
            theme_1.NbButtonModule,
            theme_1.NbSpinnerModule,
            eva_icons_1.NbEvaIconsModule
        ],
        exports: [image_viewer_component_1.ImageViewerComponent],
        providers: [
            theme_1.NbDialogService,
            image_viewer_service_1.ImageViewerService,
            services_1.ImageCacheService,
            services_1.StorageService,
            services_1.Store
        ],
    })
], ImageViewerModule);
//# sourceMappingURL=image-viewer.module.js.map