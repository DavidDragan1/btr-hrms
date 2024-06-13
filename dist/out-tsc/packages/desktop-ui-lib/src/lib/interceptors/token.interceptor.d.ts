import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../services';
export declare class TokenInterceptor implements HttpInterceptor {
    private store;
    constructor(store: Store);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=token.interceptor.d.ts.map