import { EventEmitter, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { TimeTrackerService } from '../time-tracker/time-tracker.service';
import { IEmployee, IOrganizationContact, IOrganizationProject, IOrganizationTeam, ITag, ITagCreateInput, ITaskPriority, ITaskSize, ITaskStatus, IUserOrganization, TaskStatusEnum } from '@gauzy/contracts';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Store, TagService } from '../services';
import { Observable } from 'rxjs';
export declare class TasksComponent implements OnInit {
    private timeTrackerService;
    private toastrService;
    private translate;
    private readonly _environment;
    private store;
    private _dialogRef;
    private _tagService;
    userData: IUserOrganization;
    employee: IEmployee;
    hasProjectPermission: boolean;
    selected: {
        projectId: IOrganizationProject['id'];
        teamId: IOrganizationTeam['id'];
        contactId: IOrganizationContact['id'];
    };
    isAddTask: EventEmitter<boolean>;
    newTaskCallback: EventEmitter<{
        isSuccess: boolean;
        message: string;
    }>;
    isSaving: boolean;
    editorConfig: import("ckeditor4-angular").CKEditor4.Config;
    hasAddTagPermission$: Observable<boolean>;
    form: UntypedFormGroup;
    projects: IOrganizationProject[];
    employees: IEmployee[];
    tags: ITag[];
    taskSizes: ITaskSize[];
    taskStatuses: ITaskStatus[];
    taskPriorities: ITaskPriority[];
    contacts: IOrganizationContact[];
    teams: IOrganizationTeam[];
    statuses: {
        id: TaskStatusEnum;
        name: string;
    }[];
    isLoading: boolean;
    constructor(timeTrackerService: TimeTrackerService, toastrService: NbToastrService, translate: TranslateService, _environment: any, store: Store, _dialogRef: NbDialogRef<TasksComponent>, _tagService: TagService);
    private _projects;
    private _tags;
    private _employees;
    private _clients;
    private _teams;
    private _sizes;
    private _priorities;
    private _formatStatus;
    ngOnInit(): void;
    close(res?: any): void;
    save(): Promise<void>;
    addProject: (name: string) => Promise<void>;
    background(bgColor: string): string;
    backgroundContrast(bgColor: string): "#000000" | "#ffffff";
    /**
     * Create new tag
     *
     * @param name
     * @returns
     */
    createTag: (name: ITagCreateInput['name']) => Promise<void>;
}
//# sourceMappingURL=tasks.component.d.ts.map