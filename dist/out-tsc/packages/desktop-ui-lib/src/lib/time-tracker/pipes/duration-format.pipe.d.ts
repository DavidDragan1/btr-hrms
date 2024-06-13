import { PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment-duration-format';
export declare class DurationFormatPipe implements PipeTransform {
    transform(value: number, format?: string, unitOfTime?: moment.unitOfTime.DurationConstructor): string;
}
//# sourceMappingURL=duration-format.pipe.d.ts.map