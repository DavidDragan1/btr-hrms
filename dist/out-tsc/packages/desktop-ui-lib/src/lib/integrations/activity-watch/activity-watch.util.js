"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityWatchUtil = void 0;
class ActivityWatchUtil {
    static parseBuckets(buckets) {
        const parsedBuckets = {
            windowBucket: null,
            afkBucket: null,
            chromeBucket: null,
            firefoxBucket: null,
            edgeBucket: null
        };
        Object.keys(buckets).forEach((key) => {
            const keyParse = key.split('_')[0];
            switch (keyParse) {
                case 'aw-watcher-window':
                    parsedBuckets.windowBucket = buckets[key];
                    break;
                case 'aw-watcher-afk':
                    parsedBuckets.afkBucket = buckets[key];
                    break;
                case 'aw-watcher-web-chrome':
                    parsedBuckets.chromeBucket = buckets[key];
                    break;
                case 'aw-watcher-web-firefox':
                    parsedBuckets.firefoxBucket = buckets[key];
                    break;
                case 'aw-watcher-web-edge':
                    parsedBuckets.edgeBucket = buckets[key];
                    break;
                default:
                    break;
            }
        });
        return parsedBuckets;
    }
}
exports.ActivityWatchUtil = ActivityWatchUtil;
//# sourceMappingURL=activity-watch.util.js.map