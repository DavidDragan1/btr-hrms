import { ChangeDetectorRef, PipeTransform, OnDestroy, NgZone } from '@angular/core';
import * as moment from 'moment';
export declare class HumanizePipe implements PipeTransform, OnDestroy {
    private cdRef;
    private ngZone;
    private _currentTimer;
    private _lastTime;
    private _lastValue;
    private _lastOmitSuffix;
    private _lastLocale?;
    private _lastText;
    private _formatFn;
    constructor(cdRef: ChangeDetectorRef, ngZone: NgZone);
    format(m: moment.Moment): string;
    transform(value: moment.MomentInput, omitSuffix?: boolean, formatFn?: (m: moment.Moment) => string): string;
    ngOnDestroy(): void;
    private _createTimer;
    private _removeTimer;
    private _secondsUntilUpdate;
    private _hasChanged;
    private _time;
    private _locale;
}
//# sourceMappingURL=humanize.pipe.d.ts.map