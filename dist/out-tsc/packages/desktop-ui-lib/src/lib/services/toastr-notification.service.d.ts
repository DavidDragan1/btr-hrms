import { NbToastrService } from '@nebular/theme';
import { NotificationService } from './notification.service';
export declare class ToastrNotificationService extends NotificationService {
    private readonly _toastrService;
    constructor(_toastrService: NbToastrService, environment: any);
    success(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}
//# sourceMappingURL=toastr-notification.service.d.ts.map