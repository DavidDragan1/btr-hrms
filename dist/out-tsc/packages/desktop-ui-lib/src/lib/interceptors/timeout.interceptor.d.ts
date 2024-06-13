/**
 * Idea of how to handle timeout is taken from https://gist.github.com/harbirchahal/84d3d7dd1d0838479d298a06b1c51928
 * Original code author: Harbir Chahal (https://github.com/harbirchahal)
 */
import { InjectionToken } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare const DEFAULT_TIMEOUT: InjectionToken<number>;
export declare class TimeoutInterceptor implements HttpInterceptor {
    protected defaultTimeout: number;
    constructor(defaultTimeout: number);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
}
//# sourceMappingURL=timeout.interceptor.d.ts.map