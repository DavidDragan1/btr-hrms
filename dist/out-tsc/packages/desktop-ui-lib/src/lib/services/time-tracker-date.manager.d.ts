import { IOrganization, LanguagesEnum } from '@gauzy/contracts';
export declare class TimeTrackerDateManager {
    private static _instance;
    private _organization;
    private _utcOffset;
    private _language;
    private constructor();
    private static get instance();
    private static get _startWeekDayNumber();
    static get startWeek(): string;
    static get endWeek(): string;
    static get startToday(): string;
    static get endToday(): string;
    static get utcOffset(): number;
    static get organization(): IOrganization;
    static set organization(value: IOrganization);
    static set utcOffset(value: number);
    /**
     * @returns True If it's currently midnight, otherwise False.
     */
    static get isMidnight(): boolean;
    private startWeekDay;
    static locale(language?: LanguagesEnum): void;
}
//# sourceMappingURL=time-tracker-date.manager.d.ts.map