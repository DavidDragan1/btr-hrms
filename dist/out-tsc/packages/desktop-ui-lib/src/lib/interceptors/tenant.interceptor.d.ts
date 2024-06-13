import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../services';
export declare class TenantInterceptor implements HttpInterceptor {
    private _store;
    constructor(_store: Store);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
}
//# sourceMappingURL=tenant.interceptor.d.ts.map