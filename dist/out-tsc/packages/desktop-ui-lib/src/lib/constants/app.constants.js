"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ACTIVITY_WATCH_PREFIX = exports.injector = exports.GAUZY_ENV = exports.BACKGROUND_SYNC_OFFLINE_INTERVAL = exports.BACKGROUND_SYNC_INTERVAL = exports.API_PREFIX = void 0;
const core_1 = require("@angular/core");
// @ts-ignore
const ui_config_1 = require("@gauzy/ui-config");
exports.API_PREFIX = '/api';
exports.BACKGROUND_SYNC_INTERVAL = 25000; // milliseconds
exports.BACKGROUND_SYNC_OFFLINE_INTERVAL = 5000; // milliseconds
exports.GAUZY_ENV = new core_1.InjectionToken('gauzyEnvironment');
console.log('Environment: ', JSON.stringify(ui_config_1.environment));
exports.injector = core_1.Injector.create({
    providers: [{ provide: exports.GAUZY_ENV, useValue: ui_config_1.environment }]
});
exports.API_ACTIVITY_WATCH_PREFIX = '/buckets';
//# sourceMappingURL=app.constants.js.map