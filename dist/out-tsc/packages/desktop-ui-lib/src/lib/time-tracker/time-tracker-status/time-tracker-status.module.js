"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerStatusModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const time_tracker_status_service_1 = require("./time-tracker-status.service");
const time_tracker_status_component_1 = require("./time-tracker-status.component");
const angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
const core_2 = require("@ngx-translate/core");
const theme_1 = require("@nebular/theme");
let TimeTrackerStatusModule = exports.TimeTrackerStatusModule = class TimeTrackerStatusModule {
};
exports.TimeTrackerStatusModule = TimeTrackerStatusModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [time_tracker_status_component_1.TimeTrackerStatusComponent],
        imports: [
            common_1.CommonModule,
            angular_fontawesome_1.FontAwesomeModule,
            core_2.TranslateModule,
            theme_1.NbTooltipModule,
            core_2.TranslateModule,
        ],
        exports: [time_tracker_status_component_1.TimeTrackerStatusComponent],
        providers: [time_tracker_status_service_1.TimeTrackerStatusService],
    })
], TimeTrackerStatusModule);
//# sourceMappingURL=time-tracker-status.module.js.map