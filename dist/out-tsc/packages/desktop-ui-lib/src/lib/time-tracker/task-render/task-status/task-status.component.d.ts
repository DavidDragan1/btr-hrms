import { EventEmitter, OnInit } from '@angular/core';
import { TaskRenderComponent } from '../task-render.component';
import { ITaskStatus } from '@gauzy/contracts';
import { Store } from '../../../services';
import { Observable } from 'rxjs';
export declare class TaskStatusComponent extends TaskRenderComponent implements OnInit {
    private readonly store;
    statuses$: Observable<ITaskStatus[]>;
    updated: EventEmitter<ITaskStatus>;
    constructor(store: Store);
    get taskStatus$(): Observable<ITaskStatus>;
    get status$(): Observable<string>;
    updateStatus(taskStatus: ITaskStatus): void;
    ngOnInit(): void;
}
//# sourceMappingURL=task-status.component.d.ts.map