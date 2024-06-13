import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../services';
export declare class APIInterceptor implements HttpInterceptor {
    private readonly _store;
    private readonly environment;
    constructor(_store: Store, environment: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=api.interceptor.d.ts.map