"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplacePipe = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const underscore_1 = require("underscore");
let ReplacePipe = exports.ReplacePipe = class ReplacePipe {
    transform(input, pattern, replacement) {
        if (!(0, underscore_1.isString)(input) ||
            (0, underscore_1.isUndefined)(pattern) ||
            (0, underscore_1.isUndefined)(replacement)) {
            return input;
        }
        if ((0, underscore_1.isRegExp)(pattern)) {
            return input.replace(pattern, replacement);
        }
        else {
            return this.replaceAll(input, pattern, replacement);
        }
    }
    replaceAll(string, search, replace) {
        return string.split(search).join(replace);
    }
};
exports.ReplacePipe = ReplacePipe = tslib_1.__decorate([
    (0, core_1.Pipe)({
        name: 'replace',
    })
], ReplacePipe);
//# sourceMappingURL=replace.pipe.js.map