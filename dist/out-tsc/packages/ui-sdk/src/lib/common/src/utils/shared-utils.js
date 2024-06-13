"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = exports.parseToBoolean = exports.arrayToObject = exports.sleep = exports.compressImage = exports.sluggable = exports.__prepareExternalUrlLocation = exports.removeTrailingSlash = exports.addTrailingSlash = exports.employeeMapper = exports.cleanKeys = exports.mergeDeep = exports.splitCamelCase = exports.compareDate = exports.distinctUntilChange = exports.toUTC = exports.toLocal = exports.toTimezone = exports.toUtcOffset = exports.getUTCOffsetForTimezone = exports.ucFirst = exports.convertLocalToTimezone = exports.retrieveNameFromEmail = exports.convertPrecisionFloatDigit = exports.getContrastColor = exports.progressStatus = exports.toFormData = exports.isEmpty = exports.isNotEmpty = exports.isJsObject = exports.toParams = exports.isNotNullOrUndefinedOrEmpty = exports.isNotNullOrUndefined = exports.isNullOrUndefined = void 0;
const http_1 = require("@angular/common/http");
const moment_1 = require("moment");
const timezone = require("moment-timezone");
const operators_1 = require("rxjs/operators");
const slugify_1 = require("slugify");
/**
 * Check string is null or undefined
 * From https://github.com/typeorm/typeorm/issues/873#issuecomment-502294597
 *
 * @param obj
 * @returns
 */
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 * Checks if a value is not null or undefined.
 * @param value The value to be checked.
 * @returns true if the value is not null or undefined, false otherwise.
 */
function isNotNullOrUndefined(value) {
    return value !== undefined && value !== null;
}
exports.isNotNullOrUndefined = isNotNullOrUndefined;
/**
 * Check if a value is null, undefined, or an empty string.
 * @param value The value to check.
 * @returns true if the value is null, undefined, or an empty string, false otherwise.
 */
function isNotNullOrUndefinedOrEmpty(value) {
    return isNotNullOrUndefined(value) && value !== '';
}
exports.isNotNullOrUndefinedOrEmpty = isNotNullOrUndefinedOrEmpty;
// It will use for pass nested object or array in query params in get method.
function toParams(query) {
    let params = new http_1.HttpParams();
    Object.keys(query).forEach((key) => {
        if (isJsObject(query[key])) {
            params = toSubParams(params, key, query[key]);
        }
        else {
            params = params.append(key.toString(), query[key]);
        }
    });
    return params;
}
exports.toParams = toParams;
/**
 * Checks if the given value is a JavaScript object.
 * @param object The value to check.
 * @returns `true` if the value is a JavaScript object, `false` otherwise.
 */
function isJsObject(object) {
    return object !== null && object !== undefined && typeof object === 'object';
}
exports.isJsObject = isJsObject;
/**
 * Check value not empty.
 * @param item
 * @returns {boolean}
 */
function isNotEmpty(item) {
    return !isEmpty(item);
}
exports.isNotEmpty = isNotEmpty;
/**
 * Check value empty.
 * @param item
 * @returns {boolean}
 */
function isEmpty(item) {
    if (item instanceof Array) {
        item = item.filter((val) => !isEmpty(val));
        return item.length === 0;
    }
    else if (item && typeof item === 'object') {
        for (var key in item) {
            if (item[key] === null || item[key] === undefined || item[key] === '') {
                delete item[key];
            }
        }
        return Object.keys(item).length === 0;
    }
    else {
        return !item || (item + '').toLocaleLowerCase() === 'null' || (item + '').toLocaleLowerCase() === 'undefined';
    }
}
exports.isEmpty = isEmpty;
function toSubParams(params, key, object) {
    Object.keys(object).forEach((childKey) => {
        if (isJsObject(object[childKey])) {
            params = toSubParams(params, `${key}[${childKey}]`, object[childKey]);
        }
        else {
            params = params.append(`${key}[${childKey}]`, object[childKey]);
        }
    });
    return params;
}
// It will use when file uploading from angular, just pass object of with file it will convert it to from data
function toFormData(obj, form, namespace) {
    const fd = form || new FormData();
    let formKey;
    for (const property in obj) {
        if (obj.hasOwnProperty(property) && obj[property]) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            }
            else {
                formKey = property;
            }
            // if the property is an object, but not a File, use recursively.
            if (obj[property] instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            }
            else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                toFormData(obj[property], fd, formKey);
            }
            else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }
    return fd;
}
exports.toFormData = toFormData;
function progressStatus(value) {
    if (value <= 25) {
        return 'danger';
    }
    else if (value <= 50) {
        return 'warning';
    }
    else if (value <= 75) {
        return 'info';
    }
    else {
        return 'success';
    }
}
exports.progressStatus = progressStatus;
/**
 * Determines the contrasting color (black or white) based on the given hexadecimal color.
 * @param hex The hexadecimal color code (with or without the '#' prefix).
 * @returns The contrasting color ('#000000' for dark backgrounds, '#ffffff' for light backgrounds).
 */
function getContrastColor(hex) {
    const threshold = 130;
    const hexToRGB = (hex) => {
        const hexValue = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;
        return {
            red: parseInt(hexValue.substring(0, 2), 16),
            green: parseInt(hexValue.substring(2, 4), 16),
            blue: parseInt(hexValue.substring(4, 6), 16)
        };
    };
    const { red, green, blue } = hexToRGB(hex);
    const cBrightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return cBrightness > threshold ? '#000000' : '#ffffff';
}
exports.getContrastColor = getContrastColor;
/**
 * The precision for a decimal (exact numeric applies only for decimal column), which is the maximum
 * number of digits that are stored.
 */
function convertPrecisionFloatDigit(val, digit = 6) {
    return parseFloat(parseFloat(val.toString()).toFixed(digit));
}
exports.convertPrecisionFloatDigit = convertPrecisionFloatDigit;
/*
 * Retrieve name from email address
 */
function retrieveNameFromEmail(email) {
    if (email) {
        return ucFirst(email.substring(0, email.lastIndexOf('@')), true);
    }
    return;
}
exports.retrieveNameFromEmail = retrieveNameFromEmail;
// convert local time to another timezone
function convertLocalToTimezone(localDt, localDtFormat, timeZone, format = 'YYYY-MM-DD hh:mm:ss') {
    return timezone(localDt, localDtFormat).tz(timeZone).format(format);
}
exports.convertLocalToTimezone = convertLocalToTimezone;
/*
 * Capitalize the first letter of a string being
 */
function ucFirst(str, force) {
    str = force ? str.toLowerCase() : str;
    return str.replace(/(\b)([a-zA-Z])/, function (firstLetter) {
        return firstLetter.toUpperCase();
    });
}
exports.ucFirst = ucFirst;
/**
 * Get the UTC offset for a given timezone.
 *
 * @param timezone The timezone identifier (e.g., 'Europe/Paris').
 * @returns The UTC offset in minutes.
 */
function getUTCOffsetForTimezone(timezone = 'UTC') {
    return moment_1.default.tz(timezone).utcOffset();
}
exports.getUTCOffsetForTimezone = getUTCOffsetForTimezone;
/**
 * Converts a date to UTC using the offset of the specified timezone.
 *
 * @param date The date to convert, can be a string, Date object, or moment object.
 * @param timezone (Optional) The timezone identifier (e.g., 'Europe/Paris'). If not provided, the local timezone is used.
 * @returns A moment object representing the date in UTC.
 */
function toUtcOffset(date, timezone) {
    // Get the UTC offset for the specified timezone
    const utcOffset = timezone ? getUTCOffsetForTimezone(timezone) : (0, moment_1.default)().utcOffset();
    // Clone the provided date to avoid mutating it, then subtract the UTC offset
    return (0, moment_1.default)(date).clone().subtract(utcOffset, 'minutes');
}
exports.toUtcOffset = toUtcOffset;
/**
 * Converts the given date to the specified timezone.
 *
 * @param date The date to convert to the specified timezone.
 * @param timezone The IANA timezone identifier (e.g., 'America/New_York', 'Europe/London').
 * @returns A moment object representing the date in the specified timezone.
 */
function toTimezone(date, timezone) {
    return moment_1.default.utc(date).tz(timezone);
}
exports.toTimezone = toTimezone;
/**
 * Converts the given date to the local timezone.
 *
 * @param date The date to convert to local timezone.
 * @returns A moment object representing the date in the local timezone.
 */
function toLocal(date) {
    return moment_1.default.utc(date).local();
}
exports.toLocal = toLocal;
/**
 * Converts the given date to the UTC timezone.
 * @param date The date to convert to UTC timezone.
 * @returns A moment object representing the date in UTC timezone.
 */
function toUTC(date) {
    return (0, moment_1.default)(date).utc();
}
exports.toUTC = toUTC;
/**
 * Returns an operator function that filters out consecutive duplicate values in an observable sequence.
 * @returns An operator function that filters out consecutive duplicate values in an observable sequence.
 */
function distinctUntilChange() {
    return (source) => {
        return source.pipe((0, operators_1.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)));
    };
}
exports.distinctUntilChange = distinctUntilChange;
/**
 * Compares two dates.
 * @param date1 The first date to compare.
 * @param date2 The second date to compare.
 * @returns `true` if `date1` is greater than `date2`, `false` if they are equal or `date1` is less than `date2`.
 */
const compareDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const same = d1.getTime() === d2.getTime();
    if (same) {
        return false;
    }
    return d1 > d2;
};
exports.compareDate = compareDate;
/**
 * Splits a camelCase or snake_case string into separate words.
 * @param word The input string to split.
 * @returns The input string split into separate words, with each word capitalized.
 * @throws If the input parameter is not a string.
 */
function splitCamelCase(word) {
    if (typeof word !== 'string') {
        throw new Error('The "word" parameter must be a string.');
    }
    const split = word.split('_');
    const output = split.map((text) => ucFirst(text, true));
    return output.join(' ');
}
exports.splitCamelCase = splitCamelCase;
/**
 * Deep Merge
 *
 * @param target
 * @param sources
 * @returns
 */
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isJsObject(target) && isJsObject(source)) {
        for (const key in source) {
            if (isJsObject(source[key])) {
                if (!target[key])
                    Object.assign(target, {
                        [key]: {}
                    });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
exports.mergeDeep = mergeDeep;
/**
 * Delete Keys from nested object
 *
 * @param data
 * @param deleteKeys
 * @returns
 */
function cleanKeys(data, deleteKeys) {
    // There is nothing to be done if `data` is not an object,
    if (typeof data != 'object')
        return;
    if (!data)
        return; // null object
    for (const key in data) {
        if (deleteKeys.includes(key)) {
            delete data[key];
        }
        else {
            // If the key is not deleted from the current `data` object,
            // the value should be check for black-listed keys.
            cleanKeys(data[key], deleteKeys);
        }
    }
}
exports.cleanKeys = cleanKeys;
/**
 * Maps a row of employee data to a partial employee state object.
 * @param row The row of employee data to map.
 * @returns A partial employee state object containing 'name', 'fullName', 'id', and 'imageUrl' properties.
 */
function employeeMapper(row) {
    return {
        name: row.employee && row.employee.user ? row.employee.fullName : null,
        fullName: row.employee && row.employee.user ? row.employee.fullName : null,
        id: row.employee ? row.employee.id : null,
        imageUrl: row.employee && row.employee.user ? row.employee.user.imageUrl : null
    };
}
exports.employeeMapper = employeeMapper;
/**
 * Adding Trailing Slash In URL
 *
 * "/#/pages/home"
 * console.log(addTrailingSlashIfMissing('#/pages/home'));
 *
 * "/pages/home"
 * console.log(addTrailingSlashIfMissing('pages/home'));
 *
 */
function addTrailingSlash(str) {
    if (!str) {
        return;
    }
    const slashChar = str.startsWith('/') ? '' : '/';
    return slashChar + str;
}
exports.addTrailingSlash = addTrailingSlash;
/**
 * Removing Trailing Slash In URL
 *
 * "example.com"
 * console.log(stripTrailingSlash('example.com/'));
 *
 */
function removeTrailingSlash(str) {
    if (!str) {
        return;
    }
    return str.endsWith('/') ? str.replace(/\/+$/, '') : str;
}
exports.removeTrailingSlash = removeTrailingSlash;
/**
 * Prepare external URL
 *
 * @param url
 * @returns
 */
function __prepareExternalUrlLocation(url) {
    return [removeTrailingSlash(location.origin), addTrailingSlash(url)].join('');
}
exports.__prepareExternalUrlLocation = __prepareExternalUrlLocation;
/**
 * Generate slug from string value
 *
 * @param string
 * @param replacement
 * @returns {string}
 */
function sluggable(string, replacement = '-') {
    return (0, slugify_1.default)(string, {
        replacement: replacement,
        remove: /[*+~()'"!:@,.]/g,
        lower: true,
        trim: true // trim leading and trailing replacement chars, defaults to `true`
    }).replace(/[_]/g, replacement);
}
exports.sluggable = sluggable;
/**
 * It takes a base64 image, compresses it to a given width and height, and returns a promise that
 * resolves to the compressed image
 * @param {string} base64Image - The base64 image string
 * @param {number} width - The width of the image you want to compress.
 * @param {number} height - The height of the image in pixels.
 * @returns A promise that resolves to a string.
 */
function compressImage(base64Image, width, height) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Image;
        img.onload = () => {
            const elem = document.createElement('canvas');
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const data = ctx.canvas.toDataURL();
            resolve(data);
        };
        img.onerror = (error) => reject(error);
    });
}
exports.compressImage = compressImage;
/**
 * How To Make A Sleep Function In TypeScript?
 *
 * @param ms
 * @returns
 */
function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
exports.sleep = sleep;
/**
 * Convert an array of objects to an object with specified key-value pairs.
 *
 * @param array - The array of objects.
 * @param key - The property to use as the key in the resulting object.
 * @param value - The property to use as the value in the resulting object.
 * @returns An object with key-value pairs based on the specified properties.
 */
function arrayToObject(array, key, value) {
    return array.reduce((prev, current) => {
        return {
            ...prev,
            [String(current[key])]: current[value]
        };
    }, {});
}
exports.arrayToObject = arrayToObject;
/**
 * Converts a given input into a boolean value.
 * If the input is `undefined` or `null`, it returns `false`.
 *
 * @param value - The input to convert to a boolean.
 * @returns {boolean} - A boolean representation of the given input.
 */
const parseToBoolean = (value) => {
    if (value === undefined || value === null) {
        return false; // Return false for undefined or null
    }
    try {
        const parsed = JSON.parse(value); // Attempt to parse as JSON
        if (typeof parsed === 'boolean') {
            return parsed; // Return if it's already a boolean
        }
        // Convert numbers: 0 is false, other numbers are true
        if (typeof parsed === 'number') {
            return parsed !== 0;
        }
        // Convert common truthy/falsy strings
        if (typeof parsed === 'string') {
            const lowerCase = parsed.toLowerCase().trim();
            return lowerCase === 'true' || lowerCase === '1'; // Consider 'true' and '1' as true
        }
        return Boolean(parsed); // Fallback to Boolean conversion
    }
    catch (error) {
        // Handle JSON parse errors
        return false; // Return false on parsing errors
    }
};
exports.parseToBoolean = parseToBoolean;
/**
 * Replaces all occurrences of a substring in a given string with another substring.
 *
 * @param {string} value - The input value.
 * @param {string} search - The substring to search for.
 * @param {string} replace - The substring to replace the search substring with.
 * @return {string} The modified string with all occurrences of the search substring replaced.
 */
function replaceAll(value, search, replace) {
    return value.split(search).join(replace);
}
exports.replaceAll = replaceAll;
//# sourceMappingURL=shared-utils.js.map