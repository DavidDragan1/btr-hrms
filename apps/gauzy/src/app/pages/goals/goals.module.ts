import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
	NbSpinnerModule,
	NbCardModule,
	NbAccordionModule,
	NbButtonModule,
	NbInputModule,
	NbDialogModule,
	NbIconModule,
	NbSelectModule,
	NbDatepickerModule,
	NbActionsModule,
	NbTabsetModule,
	NbLayoutModule,
	NbProgressBarModule,
	NbToggleModule,
	NbContextMenuModule,
	NbListModule,
	NbPopoverModule,
	NbAlertModule,
	NbTooltipModule,
	NbFormFieldModule,
	NbBadgeModule
} from '@nebular/theme';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgChartsModule } from 'ng2-charts';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { EmployeeMultiSelectModule, GauzyButtonActionModule, TaskSelectModule } from '@gauzy/ui-sdk/shared';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { EditObjectiveComponent } from './edit-objective/edit-objective.component';
import { EditKeyResultsComponent } from './edit-keyresults/edit-keyresults.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { SharedModule } from '@gauzy/ui-sdk/shared';
import { KeyResultDetailsComponent } from './keyresult-details/keyresult-details.component';
import { KeyResultUpdateComponent } from './keyresult-update/keyresult-update.component';
import { KeyResultProgressChartComponent } from './keyresult-progress-chart/keyresult-progress-chart.component';
import { GoalSettingsModule } from '../goal-settings/goal-settings.module';
import { KeyResultParametersComponent } from './key-result-parameters/key-result-parameters.component';
import { GoalCustomUnitModule } from '../../@shared/goal/goal-custom-unit/goal-custom-unit.module';
import { KeyresultTypeSelectModule } from '../../@shared/goal/keyresult-type-select/keyresult-type-select.module';
import { GoalLevelSelectModule } from '../../@shared/goal/goal-level-select/goal-level-select.module';
import { GoalTemplateSelectModule } from '../../@shared/goal/goal-template-select/goal-template-select.module';
import { NoDataMessageModule } from '../../@shared/no-data-message/no-data-message.module';

@NgModule({
	declarations: [
		GoalsComponent,
		EditObjectiveComponent,
		EditKeyResultsComponent,
		GoalDetailsComponent,
		KeyResultDetailsComponent,
		KeyResultUpdateComponent,
		KeyResultProgressChartComponent,
		KeyResultParametersComponent
	],
	imports: [
		CommonModule,
		GoalsRoutingModule,
		NbSpinnerModule,
		ReactiveFormsModule,
		NbCardModule,
		NbAccordionModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		NbSelectModule,
		NbActionsModule,
		NbDatepickerModule,
		NbTabsetModule,
		NbLayoutModule,
		NbToggleModule,
		NbProgressBarModule,
		NbContextMenuModule,
		NbListModule,
		NgChartsModule,
		SharedModule,
		NbPopoverModule,
		NbAlertModule,
		NbTooltipModule,
		NbFormFieldModule,
		NbBadgeModule,
		GoalSettingsModule,
		GoalCustomUnitModule,
		KeyresultTypeSelectModule,
		GoalTemplateSelectModule,
		GoalLevelSelectModule,
		TaskSelectModule,
		NbDialogModule.forChild(),
		I18nTranslateModule.forChild(),
		NgxPermissionsModule.forChild(),
		EmployeeMultiSelectModule,
		GauzyButtonActionModule,
		NoDataMessageModule
	]
})
export class GoalsModule {}
