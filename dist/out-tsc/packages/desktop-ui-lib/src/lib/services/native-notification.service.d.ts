import { ElectronService } from '../electron/services';
import { NotificationService } from './notification.service';
export declare class NativeNotificationService extends NotificationService {
    private readonly _electronService;
    constructor(_electronService: ElectronService, environment: any);
    success(message: string): void;
    error(message: string): void;
}
//# sourceMappingURL=native-notification.service.d.ts.map