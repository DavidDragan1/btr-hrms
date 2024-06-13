import { HttpClient } from '@angular/common/http';
import { IUser, RolesEnum, IUserRegistrationInput, PermissionsEnum, IAuthResponse } from '@gauzy/contracts';
import { Observable } from 'rxjs';
export declare class AuthService {
    private http;
    constructor(http: HttpClient);
    isAuthenticated(): Promise<boolean>;
    login(loginInput: any): Observable<IAuthResponse>;
    register(registerInput: IUserRegistrationInput): Observable<IUser>;
    requestPassword(requestPasswordInput: any): Observable<{
        token: string;
    }>;
    resetPassword(resetPasswordInput: any): Observable<Object>;
    hasRole(roles: RolesEnum[]): Observable<boolean>;
    hasPermission(permission: PermissionsEnum): Observable<boolean>;
}
//# sourceMappingURL=auth.service.d.ts.map