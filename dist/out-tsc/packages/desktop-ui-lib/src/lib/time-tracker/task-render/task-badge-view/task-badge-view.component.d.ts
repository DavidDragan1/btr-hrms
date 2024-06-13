import { ITaskPriority, ITaskSize, ITaskStatus } from '@gauzy/contracts';
import { StatusIconService } from '@gauzy/desktop-ui-lib';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
export type ITaskBadge = ITaskStatus | ITaskSize | ITaskPriority;
export declare class TaskBadgeViewComponent {
    private _statusIconService;
    constructor(_statusIconService: StatusIconService);
    private _taskBadge;
    get taskBadge(): ITaskBadge;
    set taskBadge(value: ITaskBadge);
    get textColor(): "#000000" | "#ffffff";
    get backgroundColor(): string;
    get icon$(): Observable<SafeUrl>;
    get name(): string;
    get imageFilter(): string;
}
//# sourceMappingURL=task-badge-view.component.d.ts.map