import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService, AuthStrategy } from './services';
import { Store } from '../services';
import { ElectronService } from '../electron/services';
export declare class AuthGuard implements CanActivate {
    private readonly router;
    private readonly authService;
    private readonly electronService;
    private readonly authStrategy;
    private readonly store;
    constructor(router: Router, authService: AuthService, electronService: ElectronService, authStrategy: AuthStrategy, store: Store);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    private logoutAndRedirect;
    private logoutDesktop;
    private logoutAndClearStore;
    private redirectToLogin;
}
//# sourceMappingURL=auth.guard.d.ts.map