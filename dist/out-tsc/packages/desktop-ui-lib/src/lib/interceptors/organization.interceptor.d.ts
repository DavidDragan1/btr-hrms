import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../services';
export declare class OrganizationInterceptor implements HttpInterceptor {
    private _store;
    constructor(_store: Store);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
}
//# sourceMappingURL=organization.interceptor.d.ts.map