import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';
import { Store } from '../services';
import { ElectronService } from '../electron/services';
export declare class ServerErrorInterceptor implements HttpInterceptor {
    private readonly _errorHandlerService;
    private readonly _electronService;
    private readonly _store;
    constructor(_errorHandlerService: ErrorHandlerService, _electronService: ElectronService, _store: Store);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=server-error.interceptor.d.ts.map