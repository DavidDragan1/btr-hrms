export declare enum ZoneEnum {
    LOCAL = "local",
    UTC = "utc"
}
export declare class TimeZoneManager {
    static changeZone(value: ZoneEnum): void;
    static get zones(): {
        translation: string;
        name: ZoneEnum;
    }[];
}
//# sourceMappingURL=time-zone-manager.d.ts.map