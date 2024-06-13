import { TaskRenderComponent } from '../task-render.component';
import { Observable } from 'rxjs';
import { ITaskPriority, ITaskSize } from '@gauzy/contracts';
import { NbDialogService, NbPopoverDirective } from '@nebular/theme';
export declare class TaskRenderCellComponent extends TaskRenderComponent {
    private _dialogService;
    private _popover;
    constructor(_dialogService: NbDialogService);
    get popover(): NbPopoverDirective;
    set popover(value: NbPopoverDirective);
    get title(): string;
    get number(): string;
    get size(): ITaskSize;
    get priority(): ITaskPriority;
    get isSelected$(): Observable<boolean>;
    private buildTaskNumber;
    showDetail(): void;
}
//# sourceMappingURL=task-render-cell.component.d.ts.map