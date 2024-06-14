import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbAccordionModule,
	NbActionsModule,
	NbBadgeModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbRouteTabsetModule,
	NbSelectModule,
	NbSpinnerModule,
	NbTabsetModule,
	NbToggleModule,
	NbTooltipModule
} from '@nebular/theme';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { NgxPermissionsModule } from 'ngx-permissions';
import {
	CandidatesService,
	InviteGuard,
	OrganizationEmploymentTypesService,
	OrganizationsService,
	SkillsService
} from '@gauzy/ui-sdk/core';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import {
	EditEmployeeMembershipFormModule,
	EmployeeEndWorkModule,
	EmployeeLocationModule,
	EmployeeMutationModule,
	EmployeeRatesModule,
	EmployeeStartWorkModule,
	GauzyButtonActionModule,
	ImageUploaderModule,
	PaginationV2Module,
	SharedModule,
	TableComponentsModule,
	TagsColorInputModule,
	TimeZoneSelectorModule
} from '@gauzy/ui-sdk/shared';
import { RecurringExpenseDeleteConfirmationModule } from '../../@shared/expenses/recurring-expense-delete-confirmation/recurring-expense-delete-confirmation.module';
import { RecurringExpenseMutationModule } from '../../@shared/expenses/recurring-expense-mutation/recurring-expense-mutation.module';
import { InviteMutationModule } from '../../@shared/invite/invite-mutation/invite-mutation.module';
import { InviteTableModule } from '../../@shared/invite/invites/invites.module';
import {
	EditEmployeeContactComponent,
	EditEmployeeEmploymentComponent,
	EditEmployeeHiringComponent,
	EditEmployeeLocationComponent,
	EditEmployeeMainComponent,
	EditEmployeeProjectsComponent,
	EditEmployeeRatesComponent,
	EditEmployeeProfileComponent,
	EditEmployeeOtherSettingsComponent
} from './edit-employee/edit-employee-profile';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ManageEmployeeInviteComponent } from './manage-employee-invite/manage-employee-invite.component';
import {
	EmployeeAverageBonusComponent,
	EmployeeAverageExpensesComponent,
	EmployeeAverageIncomeComponent,
	EmployeeBonusComponent,
	EmployeeWorkStatusComponent,
	EmployeeTimeTrackingStatusComponent
} from './table-components';
import { RecurringExpenseBlockModule } from '../../@shared/expenses/recurring-expense-block/recurring-expense-block.module';
import { EditEmployeeNetworksComponent } from './edit-employee/edit-employee-profile/edit-employee-networks/edit-employee-networks.component';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { LanguageSelectorModule } from '@gauzy/ui-sdk/shared/src/language/language-selector';
import { SkillsInputModule } from '@gauzy/ui-sdk/shared/src/skills/skills-input/skills-input.module';

const COMPONENTS = [
	EmployeesComponent,
	EmployeeBonusComponent,
	EmployeeAverageIncomeComponent,
	EmployeeAverageExpensesComponent,
	EmployeeAverageBonusComponent,
	EmployeeWorkStatusComponent,
	EmployeeTimeTrackingStatusComponent,
	EditEmployeeComponent,
	EditEmployeeProfileComponent,
	EditEmployeeMainComponent,
	EditEmployeeRatesComponent,
	ManageEmployeeInviteComponent,
	EditEmployeeProjectsComponent,
	EditEmployeeContactComponent,
	EditEmployeeHiringComponent,
	EditEmployeeLocationComponent,
	EditEmployeeEmploymentComponent,
	EditEmployeeNetworksComponent,
	EditEmployeeOtherSettingsComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		Angular2SmartTableModule,
		CKEditorModule,
		NbAccordionModule,
		NbActionsModule,
		NbBadgeModule,
		NbButtonModule,
		NbCardModule,
		NbCheckboxModule,
		NbDatepickerModule,
		NbDialogModule.forChild(),
		NbIconModule,
		NbInputModule,
		NbRouteTabsetModule,
		NbSelectModule,
		NbSpinnerModule,
		NbTabsetModule,
		NbToggleModule,
		NbTooltipModule,
		NgSelectModule,
		NgxPermissionsModule.forChild(),
		I18nTranslateModule.forChild(),
		EmployeesRoutingModule,
		SharedModule,
		TableComponentsModule,
		EmployeeMutationModule,
		EmployeeEndWorkModule,
		RecurringExpenseMutationModule,
		ImageUploaderModule,
		InviteMutationModule,
		InviteTableModule,
		RecurringExpenseDeleteConfirmationModule,
		EditEmployeeMembershipFormModule,
		RecurringExpenseBlockModule,
		TagsColorInputModule,
		SkillsInputModule,
		EmployeeLocationModule,
		EmployeeRatesModule,
		EmployeeStartWorkModule,
		LanguageSelectorModule,
		GauzyButtonActionModule,
		PaginationV2Module,
		CardGridModule,
		TimeZoneSelectorModule
	],
	declarations: [...COMPONENTS],
	providers: [OrganizationsService, InviteGuard, CandidatesService, OrganizationEmploymentTypesService, SkillsService]
})
export class EmployeesModule {}
