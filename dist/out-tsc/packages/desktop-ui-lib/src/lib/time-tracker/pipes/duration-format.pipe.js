"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationFormatPipe = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const moment = require("moment");
require("moment-duration-format");
let DurationFormatPipe = exports.DurationFormatPipe = class DurationFormatPipe {
    transform(value, format, unitOfTime) {
        return moment
            .duration(value, unitOfTime || 'seconds')
            .format(format || 'HH:mm:ss', {
            trim: false,
            trunc: true,
        });
    }
};
exports.DurationFormatPipe = DurationFormatPipe = tslib_1.__decorate([
    (0, core_1.Pipe)({
        name: 'durationFormat',
    })
], DurationFormatPipe);
//# sourceMappingURL=duration-format.pipe.js.map