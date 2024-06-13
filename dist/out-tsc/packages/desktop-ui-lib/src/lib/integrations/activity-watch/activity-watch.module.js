"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const activity_watch_event_service_1 = require("./activity-watch-event.service");
const activity_watch_component_1 = require("./view/activity-watch.component");
const theme_1 = require("@nebular/theme");
const core_2 = require("@ngx-translate/core");
const activity_watch_view_service_1 = require("./activity-watch-view.service");
const activity_watch_electron_service_1 = require("./activity-watch-electron.service");
let ActivityWatchModule = exports.ActivityWatchModule = class ActivityWatchModule {
};
exports.ActivityWatchModule = ActivityWatchModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [activity_watch_component_1.ActivityWatchComponent],
        exports: [activity_watch_component_1.ActivityWatchComponent],
        imports: [common_1.CommonModule, theme_1.NbIconModule, theme_1.NbTooltipModule, theme_1.NbToggleModule, core_2.TranslateModule],
        providers: [activity_watch_event_service_1.ActivityWatchEventService, activity_watch_view_service_1.ActivityWatchViewService, activity_watch_electron_service_1.ActivityWatchElectronService]
    })
], ActivityWatchModule);
//# sourceMappingURL=activity-watch.module.js.map