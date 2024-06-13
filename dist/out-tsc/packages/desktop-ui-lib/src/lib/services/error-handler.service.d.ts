import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { ToastrNotificationService } from './toastr-notification.service';
import { ErrorClientService } from './error-client.service';
import { ErrorServerService } from './error-server.service';
import { LoggerService } from '../electron/services';
export declare class ErrorHandlerService implements ErrorHandler {
    private readonly _toastrNotifierService;
    private readonly _errorClientService;
    private readonly _errorServerService;
    private readonly _loggerService;
    constructor(_toastrNotifierService: ToastrNotificationService, _errorClientService: ErrorClientService, _errorServerService: ErrorServerService, _loggerService: LoggerService);
    handleError(error: Error | HttpErrorResponse): void;
}
//# sourceMappingURL=error-handler.service.d.ts.map