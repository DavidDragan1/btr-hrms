import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '../services';
import { AuthService } from './services';
/**
 * Use for routes which only need to be displayed if user is NOT logged in
 */
export declare class NoAuthGuard implements CanActivate {
    private readonly router;
    private authService;
    private readonly store;
    constructor(router: Router, authService: AuthService, store: Store);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
//# sourceMappingURL=no-auth.guard.d.ts.map