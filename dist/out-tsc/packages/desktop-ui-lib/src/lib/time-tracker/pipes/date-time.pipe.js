"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTimePipe = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const moment = require("moment");
let dateTimePipe = exports.dateTimePipe = class dateTimePipe {
    /**
     * It takes a string value, and returns a string value
     * @param {string} value - The value to be transformed.
     * @param {string} [format] - The format to use. Check out all the options from the Moment.js docs.
     * @returns The date in the format specified.
     */
    transform(value, format) {
        return moment(value).format(format ? format : 'lll');
    }
};
exports.dateTimePipe = dateTimePipe = tslib_1.__decorate([
    (0, core_1.Pipe)({
        name: 'dateTime'
    })
], dateTimePipe);
//# sourceMappingURL=date-time.pipe.js.map