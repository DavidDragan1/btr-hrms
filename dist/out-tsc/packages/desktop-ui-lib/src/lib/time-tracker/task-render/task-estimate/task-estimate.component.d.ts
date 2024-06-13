import { EventEmitter } from '@angular/core';
import { ITaskRender } from '../task-render.component';
import { Observable } from 'rxjs';
export declare class TaskEstimateComponent {
    isEdit: boolean;
    edited: EventEmitter<number>;
    task$: Observable<ITaskRender>;
    constructor();
    get estimate$(): Observable<number>;
    get isEditDisabled$(): Observable<boolean>;
    update(event: number): void;
}
//# sourceMappingURL=task-estimate.component.d.ts.map