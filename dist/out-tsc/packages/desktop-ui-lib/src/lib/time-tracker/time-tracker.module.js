"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular2_smart_table_1 = require("angular2-smart-table");
const common_1 = require("@angular/common");
const time_tracker_component_1 = require("./time-tracker.component");
const time_tracker_service_1 = require("./time-tracker.service");
const custom_render_cell_component_1 = require("./custom-render-cell.component");
const theme_1 = require("@nebular/theme");
const eva_icons_1 = require("@nebular/eva-icons");
const forms_1 = require("@angular/forms");
const ng_select_1 = require("@ng-select/ng-select");
const tasks_module_1 = require("../tasks/tasks.module");
const pagination_module_1 = require("./pagination/pagination.module");
const no_data_message_component_1 = require("./no-data-message/no-data-message.component");
const humanize_pipe_1 = require("./pipes/humanize.pipe");
const user_organization_service_1 = require("./organization-selector/user-organization.service");
const organization_selector_component_1 = require("./organization-selector/organization-selector.component");
const services_1 = require("../services");
const services_2 = require("../electron/services");
const time_tracker_status_module_1 = require("./time-tracker-status/time-tracker-status.module");
const offline_sync_1 = require("../offline-sync");
const image_viewer_module_1 = require("../image-viewer/image-viewer.module");
const ngx_translate_1 = require("../ngx-translate");
const language_selector_service_1 = require("../language/language-selector.service");
const always_on_service_1 = require("../always-on/always-on.service");
const task_render_module_1 = require("./task-render/task-render.module");
const integrations_1 = require("../integrations");
let TimeTrackerModule = exports.TimeTrackerModule = class TimeTrackerModule {
};
exports.TimeTrackerModule = TimeTrackerModule = tslib_1.__decorate([
    (0, core_1.NgModule)({
        declarations: [
            time_tracker_component_1.TimeTrackerComponent,
            custom_render_cell_component_1.CustomRenderComponent,
            no_data_message_component_1.NoDataMessageComponent,
            humanize_pipe_1.HumanizePipe,
            organization_selector_component_1.OrganizationSelectorComponent
        ],
        imports: [
            common_1.CommonModule,
            theme_1.NbLayoutModule,
            theme_1.NbCardModule,
            theme_1.NbToggleModule,
            theme_1.NbSelectModule,
            theme_1.NbInputModule,
            theme_1.NbButtonModule,
            theme_1.NbSpinnerModule,
            theme_1.NbIconModule,
            eva_icons_1.NbEvaIconsModule,
            theme_1.NbSidebarModule,
            forms_1.FormsModule,
            theme_1.NbCheckboxModule,
            forms_1.ReactiveFormsModule,
            ng_select_1.NgSelectModule,
            theme_1.NbDialogModule,
            theme_1.NbFormFieldModule,
            angular2_smart_table_1.Angular2SmartTableModule,
            theme_1.NbTooltipModule,
            tasks_module_1.TasksModule,
            theme_1.NbToggleModule,
            theme_1.NbBadgeModule,
            pagination_module_1.PaginationModule,
            theme_1.NbTooltipModule,
            time_tracker_status_module_1.TimeTrackerStatusModule,
            image_viewer_module_1.ImageViewerModule,
            ngx_translate_1.NgxTranslateModule,
            task_render_module_1.TaskRenderModule,
            integrations_1.ActivityWatchModule
        ],
        providers: [
            theme_1.NbSidebarService,
            time_tracker_service_1.TimeTrackerService,
            theme_1.NbDialogService,
            theme_1.NbToastrService,
            user_organization_service_1.UserOrganizationService,
            services_1.ErrorHandlerService,
            services_1.NativeNotificationService,
            services_1.ToastrNotificationService,
            services_2.ElectronService,
            services_2.LoggerService,
            services_1.Store,
            offline_sync_1.TimeSlotQueueService,
            language_selector_service_1.LanguageSelectorService,
            always_on_service_1.AlwaysOnService,
        ],
        exports: [time_tracker_component_1.TimeTrackerComponent],
    })
], TimeTrackerModule);
//# sourceMappingURL=time-tracker.module.js.map