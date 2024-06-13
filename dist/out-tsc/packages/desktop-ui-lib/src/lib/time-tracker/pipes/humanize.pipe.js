"use strict";
// Copyright (c) 2019-2023 Ever Co. LTD
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanizePipe = void 0;
const tslib_1 = require("tslib");
// Modified code from https://github.com/urish/ngx-moment.
// Originally MIT Licensed
// - see https://github.com/urish/ngx-moment/blob/master/LICENSE
// - original code `ngx-moment (c) 2015, 2016 Uri Shaked`;
const core_1 = require("@angular/core");
const moment = require("moment");
let HumanizePipe = exports.HumanizePipe = class HumanizePipe {
    constructor(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    format(m) {
        return m.from(moment(), this._lastOmitSuffix);
    }
    transform(value, omitSuffix, formatFn) {
        if (this._hasChanged(value, omitSuffix)) {
            this._lastTime = this._time(value);
            this._lastValue = value;
            this._lastOmitSuffix = omitSuffix;
            this._lastLocale = this._locale(value);
            this._formatFn = formatFn || this.format.bind(this);
            this._removeTimer();
            this._createTimer();
            this._lastText = this._formatFn(moment(value));
        }
        else {
            this._createTimer();
        }
        return this._lastText;
    }
    ngOnDestroy() {
        this._removeTimer();
    }
    _createTimer() {
        if (this._currentTimer) {
            return;
        }
        const momentInstance = moment(this._lastValue);
        const timeToUpdate = this._secondsUntilUpdate(momentInstance) * 1000;
        this._currentTimer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this._lastText = this._formatFn(moment(this._lastValue));
                    this._currentTimer = null;
                    this.ngZone.run(() => this.cdRef.markForCheck());
                }, timeToUpdate);
            }
            else {
                return null;
            }
        });
    }
    _removeTimer() {
        if (this._currentTimer) {
            window.clearTimeout(this._currentTimer);
            this._currentTimer = null;
        }
    }
    _secondsUntilUpdate(momentInstance) {
        const howOld = Math.abs(moment().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    }
    _hasChanged(value, omitSuffix) {
        return (this._time(value) !== this._lastTime ||
            this._locale(value) !== this._lastLocale ||
            omitSuffix !== this._lastOmitSuffix);
    }
    _time(value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return moment(value).valueOf();
        }
    }
    _locale(value) {
        return moment.isMoment(value) ? value.locale() : moment.locale();
    }
};
exports.HumanizePipe = HumanizePipe = tslib_1.__decorate([
    (0, core_1.Pipe)({ name: 'humanize', pure: false }),
    tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
], HumanizePipe);
//# sourceMappingURL=humanize.pipe.js.map