import { PipeTransform } from '@angular/core';
export declare class dateTimePipe implements PipeTransform {
    /**
     * It takes a string value, and returns a string value
     * @param {string} value - The value to be transformed.
     * @param {string} [format] - The format to use. Check out all the options from the Moment.js docs.
     * @returns The date in the format specified.
     */
    transform(value: string, format?: string): string;
}
//# sourceMappingURL=date-time.pipe.d.ts.map