interface INotification {
    title: string;
    message: string;
}
export declare abstract class NotificationService {
    protected _notification: INotification;
    abstract success(message: string): void;
    abstract error(message: string): void;
}
export {};
//# sourceMappingURL=notification.service.d.ts.map