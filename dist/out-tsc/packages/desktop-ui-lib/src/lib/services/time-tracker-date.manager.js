"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerDateManager = void 0;
const moment = require("moment");
const contracts_1 = require("@gauzy/contracts");
class TimeTrackerDateManager {
    constructor() {
        this._utcOffset = moment().utcOffset();
        this._language = contracts_1.LanguagesEnum.ENGLISH;
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new TimeTrackerDateManager();
        }
        return this._instance;
    }
    static get _startWeekDayNumber() {
        return moment()
            .day(this.organization?.startWeekOn || 'Monday')
            .isoWeekday();
    }
    static get startWeek() {
        return moment()
            .startOf('week')
            .subtract(this.utcOffset, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss');
    }
    static get endWeek() {
        return moment()
            .endOf('week')
            .subtract(this.utcOffset, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss');
    }
    static get startToday() {
        return moment()
            .startOf('day')
            .subtract(this.utcOffset, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss');
    }
    static get endToday() {
        return moment()
            .endOf('day')
            .subtract(this.utcOffset, 'minutes')
            .format('YYYY-MM-DD HH:mm:ss');
    }
    static get utcOffset() {
        return this.instance._utcOffset;
    }
    static get organization() {
        return this.instance._organization;
    }
    static set organization(value) {
        this.instance._organization = value;
        // Set the start of the week when organization's change
        this._instance.startWeekDay();
    }
    static set utcOffset(value) {
        this.instance._utcOffset = value;
    }
    /**
     * @returns True If it's currently midnight, otherwise False.
     */
    static get isMidnight() {
        const now = moment();
        const endOfDay = now.clone().endOf('day');
        return moment(now.format('YYYY-MM-DD HH:mm:ss')).isSame(endOfDay.format('YYYY-MM-DD HH:mm:ss'));
    }
    // Set the start of the week
    startWeekDay() {
        moment.updateLocale(this._language, {
            week: {
                dow: TimeTrackerDateManager._startWeekDayNumber,
            },
        });
    }
    static locale(language = contracts_1.LanguagesEnum.ENGLISH) {
        moment.locale(language);
        this.instance._language = language;
    }
}
exports.TimeTrackerDateManager = TimeTrackerDateManager;
//# sourceMappingURL=time-tracker-date.manager.js.map