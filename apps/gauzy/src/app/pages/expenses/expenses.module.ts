import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {
	NbCardModule,
	NbButtonModule,
	NbInputModule,
	NbIconModule,
	NbDialogModule,
	NbSpinnerModule,
	NbBadgeModule,
	NbActionsModule,
	NbTooltipModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { ExpensesMutationModule } from '../../@shared/expenses/expenses-mutation/expenses-mutation.module';
import { PaginationV2Module, TableComponentsModule, TagsColorInputModule, UserFormsModule } from '@gauzy/ui-sdk/shared';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { SharedModule } from '@gauzy/ui-sdk/shared';
import { ExpenseCategoriesComponent } from './expense-categories/expense-categories.component';
import { ExpenseCategoriesStoreService, OrganizationExpenseCategoriesService } from '@gauzy/ui-sdk/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { GauzyButtonActionModule } from '@gauzy/ui-sdk/shared';
import { ExpenseCategoryMutationComponent } from './expense-categories/expense-category-mutation/expense-category-mutation.component';
import { NoDataMessageModule } from '../../@shared/no-data-message/no-data-message.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
	imports: [
		NbBadgeModule,
		ExpensesRoutingModule,
		ThemeModule,
		SharedModule,
		NbCardModule,
		FormsModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		Angular2SmartTableModule,
		NbDialogModule.forChild(),
		ExpensesMutationModule,
		UserFormsModule,
		TableComponentsModule,
		CardGridModule,
		I18nTranslateModule.forChild(),
		NbSpinnerModule,
		NbActionsModule,
		TagsColorInputModule,
		NgxPermissionsModule.forChild(),
		PaginationV2Module,
		GauzyButtonActionModule,
		NoDataMessageModule,
		NbTooltipModule,
		InfiniteScrollModule
	],
	declarations: [ExpensesComponent, ExpenseCategoriesComponent, ExpenseCategoryMutationComponent],
	providers: [ExpenseCategoriesStoreService, OrganizationExpenseCategoriesService]
})
export class ExpensesModule {}
