"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchEventService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const constants_1 = require("../../constants");
const http_1 = require("@angular/common/http");
const activity_watch_util_1 = require("./activity-watch.util");
const common_1 = require("@gauzy/ui-sdk/common");
let ActivityWatchEventService = exports.ActivityWatchEventService = class ActivityWatchEventService {
    constructor(http) {
        this.http = http;
    }
    buckets() {
        return (0, rxjs_1.firstValueFrom)(this.http.get(`${constants_1.API_ACTIVITY_WATCH_PREFIX}/`));
    }
    async collectEvents(bucket, range) {
        const params = (0, common_1.toParams)({
            start: range.start.toISOString(),
            end: range.end.toISOString()
        });
        const bucketId = await this.bucketId(bucket);
        if (!bucketId)
            return [];
        return (0, rxjs_1.firstValueFrom)(this.http.get(`${constants_1.API_ACTIVITY_WATCH_PREFIX}/${bucketId}/events`, {
            params
        }));
    }
    async bucketId(bucket) {
        const buckets = await this.buckets();
        if (!buckets)
            return null;
        return activity_watch_util_1.ActivityWatchUtil.parseBuckets(buckets)[bucket]?.id;
    }
    async collectAfkEvents(range) {
        return this.collectEvents('afkBucket', range);
    }
    async collectChromeEvents(range) {
        return this.collectEvents('chromeBucket', range);
    }
    async collectFirefoxEvents(range) {
        return this.collectEvents('firefoxBucket', range);
    }
    async collectWindowsEvents(range) {
        return this.collectEvents('windowBucket', range);
    }
    async ping() {
        try {
            const buckets = await this.buckets();
            return !!buckets;
        }
        catch (_) {
            return false;
        }
    }
    collectEdgeEvents(range) {
        return this.collectEvents('edgeBucket', range);
    }
};
exports.ActivityWatchEventService = ActivityWatchEventService = tslib_1.__decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], ActivityWatchEventService);
//# sourceMappingURL=activity-watch-event.service.js.map