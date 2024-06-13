"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const activity_watch_view_service_1 = require("../activity-watch-view.service");
let ActivityWatchComponent = exports.ActivityWatchComponent = class ActivityWatchComponent {
    constructor(activityWatchViewService) {
        this.activityWatchViewService = activityWatchViewService;
    }
    get isTimerRunning$() {
        return this.activityWatchViewService.isTimerRunning$.asObservable();
    }
    async setActivityWatch(isChecked) {
        this.activityWatchViewService.aw$.next(isChecked);
    }
    get aw$() {
        return this.activityWatchViewService.aw$.asObservable();
    }
    get log$() {
        return this.activityWatchViewService.log$.asObservable();
    }
    get status$() {
        return this.activityWatchViewService.status$.asObservable();
    }
    get icon$() {
        return this.activityWatchViewService.icon$.asObservable();
    }
};
exports.ActivityWatchComponent = ActivityWatchComponent = tslib_1.__decorate([
    (0, core_1.Component)({
        selector: 'gauzy-activity-watch',
        templateUrl: './activity-watch.component.html',
        styleUrls: ['./activity-watch.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [activity_watch_view_service_1.ActivityWatchViewService])
], ActivityWatchComponent);
//# sourceMappingURL=activity-watch.component.js.map