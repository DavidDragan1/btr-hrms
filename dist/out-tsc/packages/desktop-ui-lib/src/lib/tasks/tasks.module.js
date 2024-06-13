"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const tasks_component_1 = require("./tasks.component");
const theme_1 = require("@nebular/theme");
const forms_1 = require("@angular/forms");
const ng_select_1 = require("@ng-select/ng-select");
const time_tracker_service_1 = require("../time-tracker/time-tracker.service");
const desktop_directive_module_1 = require("../directives/desktop-directive.module");
const core_2 = require("@ngx-translate/core");
const ckeditor4_angular_1 = require("ckeditor4-angular");
const task_render_1 = require("../time-tracker/task-render");
const services_1 = require("../services");
let TasksModule = exports.TasksModule = class TasksModule {
};
exports.TasksModule = TasksModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [tasks_component_1.TasksComponent],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbSidebarModule,
            theme_1.NbMenuModule.forRoot(),
            theme_1.NbCardModule,
            theme_1.NbIconModule,
            theme_1.NbListModule,
            theme_1.NbSelectModule,
            forms_1.FormsModule,
            theme_1.NbToggleModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            theme_1.NbAlertModule,
            theme_1.NbProgressBarModule,
            theme_1.NbTabsetModule,
            theme_1.NbAccordionModule,
            theme_1.NbDatepickerModule,
            ng_select_1.NgSelectModule,
            forms_1.ReactiveFormsModule,
            theme_1.NbBadgeModule,
            desktop_directive_module_1.DesktopDirectiveModule,
            core_2.TranslateModule,
            ckeditor4_angular_1.CKEditorModule,
            task_render_1.TaskRenderModule
        ],
        providers: [theme_1.NbToastrService, time_tracker_service_1.TimeTrackerService, services_1.TagService],
        exports: [tasks_component_1.TasksComponent]
    })
], TasksModule);
//# sourceMappingURL=tasks.module.js.map