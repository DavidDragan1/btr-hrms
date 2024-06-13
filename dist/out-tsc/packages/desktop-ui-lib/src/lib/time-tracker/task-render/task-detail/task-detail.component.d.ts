import { EventEmitter } from '@angular/core';
import { ITaskRender } from '../task-render.component';
import { ITag, ITaskPriority, ITaskSize, ITaskStatus } from '@gauzy/contracts';
import { TranslateService } from '@ngx-translate/core';
import { NbDialogRef } from '@nebular/theme';
export declare class TaskDetailComponent {
    private _translateService;
    private _dialogRef;
    task: ITaskRender;
    hidden: EventEmitter<Boolean>;
    constructor(_translateService: TranslateService, _dialogRef: NbDialogRef<TaskDetailComponent>);
    get title(): string;
    get number(): string;
    get tags(): ITag[];
    get description(): string;
    get size(): ITaskSize;
    get priority(): ITaskPriority;
    get status(): ITaskStatus;
    hide(): void;
    dismiss(): void;
}
//# sourceMappingURL=task-detail.component.d.ts.map