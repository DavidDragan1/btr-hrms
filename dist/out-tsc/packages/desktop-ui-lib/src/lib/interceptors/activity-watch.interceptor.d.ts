import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class ActivityWatchInterceptor implements HttpInterceptor {
    private readonly environment;
    constructor(environment: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
//# sourceMappingURL=activity-watch.interceptor.d.ts.map