import { Observable } from 'rxjs';
import { NbAuthResult, NbAuthStrategy } from '@nebular/auth';
import { IAuthResponse } from '@gauzy/contracts';
import { NbAuthStrategyClass } from '@nebular/auth/auth.options';
import { AuthService } from './auth.service';
import { Store } from '../../services';
import { ElectronService } from '../../electron/services';
export declare class AuthStrategy extends NbAuthStrategy {
    private readonly authService;
    private readonly store;
    private readonly electronService;
    private static config;
    constructor(authService: AuthService, store: Store, electronService: ElectronService);
    static setup(options: {
        name: string;
    }): [NbAuthStrategyClass, any];
    authenticate(args: {
        email: string;
        password: string;
        rememberMe?: boolean | null;
    }): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    requestPassword(args: {
        email: string;
    }): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    logout(): Observable<NbAuthResult>;
    private _logout;
    login(loginInput: any): Observable<NbAuthResult>;
    electronAuthentication({ user, token }: IAuthResponse): void;
}
//# sourceMappingURL=auth-strategy.service.d.ts.map