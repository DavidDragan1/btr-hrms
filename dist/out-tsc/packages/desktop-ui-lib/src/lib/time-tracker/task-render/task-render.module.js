"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRenderModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const theme_1 = require("@nebular/theme");
const duration_format_pipe_1 = require("../pipes/duration-format.pipe");
const task_progress_component_1 = require("./task-progress/task-progress.component");
const task_duration_component_1 = require("./task-duration/task-duration.component");
const task_estimate_component_1 = require("./task-estimate/task-estimate.component");
const task_render_cell_component_1 = require("./task-render-cell/task-render-cell.component");
const desktop_directive_module_1 = require("../../directives/desktop-directive.module");
const task_estimate_input_component_1 = require("./task-estimate/task-estimate-input/task-estimate-input.component");
const forms_1 = require("@angular/forms");
const task_due_date_component_1 = require("./task-due-date/task-due-date.component");
const core_2 = require("@ngx-translate/core");
const task_badge_view_component_1 = require("./task-badge-view/task-badge-view.component");
const task_status_component_1 = require("./task-status/task-status.component");
const task_badge_default_component_1 = require("./task-badge-default/task-badge-default.component");
const replace_pipe_1 = require("../pipes/replace.pipe");
const task_detail_component_1 = require("./task-detail/task-detail.component");
let TaskRenderModule = exports.TaskRenderModule = class TaskRenderModule {
};
exports.TaskRenderModule = TaskRenderModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [
            duration_format_pipe_1.DurationFormatPipe,
            task_progress_component_1.TaskProgressComponent,
            task_duration_component_1.TaskDurationComponent,
            task_estimate_component_1.TaskEstimateComponent,
            task_render_cell_component_1.TaskRenderCellComponent,
            task_estimate_input_component_1.TaskEstimateInputComponent,
            task_due_date_component_1.TaskDueDateComponent,
            task_badge_view_component_1.TaskBadgeViewComponent,
            replace_pipe_1.ReplacePipe,
            task_status_component_1.TaskStatusComponent,
            task_badge_default_component_1.TaskBadgeDefaultComponent,
            task_detail_component_1.TaskDetailComponent,
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            theme_1.NbProgressBarModule,
            theme_1.NbIconModule,
            theme_1.NbTooltipModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            theme_1.NbButtonModule,
            core_2.TranslateModule,
            theme_1.NbPopoverModule,
            theme_1.NbBadgeModule,
            theme_1.NbCardModule,
        ],
        exports: [task_badge_view_component_1.TaskBadgeViewComponent, replace_pipe_1.ReplacePipe],
    })
], TaskRenderModule);
//# sourceMappingURL=task-render.module.js.map