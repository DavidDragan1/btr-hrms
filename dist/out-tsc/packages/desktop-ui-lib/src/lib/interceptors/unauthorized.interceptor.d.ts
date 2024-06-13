import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStrategy } from '../auth';
import { ElectronService } from '../electron/services';
import { Router } from '@angular/router';
import { Store } from '../services';
export declare class UnauthorizedInterceptor implements HttpInterceptor {
    private authStrategy;
    private electronService;
    private router;
    private store;
    constructor(authStrategy: AuthStrategy, electronService: ElectronService, router: Router, store: Store);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=unauthorized.interceptor.d.ts.map