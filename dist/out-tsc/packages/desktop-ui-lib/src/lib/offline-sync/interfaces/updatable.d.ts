import { Observable } from "rxjs";
export interface Updatable<T> {
    updater$: Observable<T>;
    updater: T;
}
//# sourceMappingURL=updatable.d.ts.map