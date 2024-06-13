import { ITasksStatistics } from '@gauzy/contracts';
import { Observable } from 'rxjs';
export interface ITaskRender extends ITasksStatistics {
    taskNumber: string;
    isSelected: boolean;
    todayDuration: number;
}
export declare abstract class TaskRenderComponent {
    private readonly _task$;
    constructor();
    get task(): ITaskRender;
    get task$(): Observable<ITaskRender>;
    set rowData(value: ITaskRender);
}
//# sourceMappingURL=task-render.component.d.ts.map