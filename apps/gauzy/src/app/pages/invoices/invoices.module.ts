import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbBadgeModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbRouteTabsetModule,
	NbSelectModule,
	NbTooltipModule,
	NbDatepickerModule,
	NbRadioModule,
	NbSpinnerModule,
	NbToggleModule,
	NbContextMenuModule,
	NbMenuModule,
	NbPopoverModule,
	NbTabsetModule,
	NbFormFieldModule,
	NbListModule,
	NbAccordionModule
} from '@nebular/theme';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxPermissionsModule } from 'ngx-permissions';
import {
	EmployeesService,
	InvoiceEstimateHistoryService,
	InvoiceItemService,
	InvoicesService,
	OrganizationContactService,
	OrganizationProjectsService,
	OrganizationsService,
	PaymentService,
	ProductService,
	TasksService,
	TasksStoreService,
	TranslatableService
} from '@gauzy/ui-sdk/core';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { ThemeModule } from '../../@theme/theme.module';
import { InvoiceAddComponent } from './invoice-add/invoice-add.component';
import { InvoicesComponent } from './invoices.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { InvoicesReceivedComponent } from './invoices-received/invoices-received.component';
import { InvoiceSendMutationComponent } from './invoice-send/invoice-send-mutation.component';
import {
	ContactSelectModule,
	CurrencyModule,
	CurrencyPositionPipe,
	EmployeeMultiSelectModule,
	GauzyButtonActionModule,
	PaginationV2Module,
	ProjectSelectModule,
	SharedModule,
	TableComponentsModule,
	TagsColorInputModule,
	UserFormsModule
} from '@gauzy/ui-sdk/shared';
import { InvoiceEmailMutationComponent } from './invoice-email/invoice-email-mutation.component';
import { InvoiceDownloadMutationComponent } from './invoice-download/invoice-download-mutation.component';
import { CardGridModule } from './../../@shared/card-grid/card-grid.module';
import { InvoicePdfComponent } from './invoice-pdf/invoice-pdf.component';
import { AddInternalNoteComponent } from './add-internal-note/add-internal-note.component';
import { PublicLinkComponent } from './public-link/public-link.component';
import {
	InvoiceApplyTaxDiscountComponent,
	InvoiceEmployeesSelectorComponent,
	InvoiceExpensesSelectorComponent,
	InvoicePaidComponent,
	InvoiceProductsSelectorComponent,
	InvoiceProjectsSelectorComponent,
	InvoiceTasksSelectorComponent
} from './table-components';
import {
	EstimateAddComponent,
	EstimateEditComponent,
	EstimatesComponent,
	EstimatesReceivedComponent,
	EstimateViewComponent
} from './invoice-estimates';
import {
	InvoicePaymentReceiptMutationComponent,
	InvoicePaymentsComponent,
	PaymentMutationComponent
} from './invoice-payments';
import { InvoiceViewComponent, InvoiceViewInnerComponent } from './invoice-view';

@NgModule({
	imports: [
		TableComponentsModule,
		TagsColorInputModule,
		InvoicesRoutingModule,
		ClipboardModule,
		NbCardModule,
		NbSpinnerModule,
		NbIconModule,
		NbButtonModule,
		Angular2SmartTableModule,
		CardGridModule,
		FormsModule,
		NbBadgeModule,
		ReactiveFormsModule,
		NbCheckboxModule,
		NbDialogModule.forChild(),
		ThemeModule,
		NbInputModule,
		NbRouteTabsetModule,
		NbSelectModule,
		NbTooltipModule,
		NbRadioModule,
		EmployeeMultiSelectModule,
		UserFormsModule,
		NbDatepickerModule,
		NgSelectModule,
		NbToggleModule,
		NbContextMenuModule,
		NbMenuModule,
		NbTabsetModule,
		NbPopoverModule,
		NbFormFieldModule,
		NbListModule,
		I18nTranslateModule.forChild(),
		NgxPermissionsModule.forChild(),
		CurrencyModule,
		PaginationV2Module,
		ContactSelectModule,
		ProjectSelectModule,
		SharedModule,
		NbAccordionModule,
		GauzyButtonActionModule
	],
	providers: [
		InvoicesService,
		OrganizationsService,
		InvoiceItemService,
		TasksService,
		OrganizationContactService,
		OrganizationProjectsService,
		EmployeesService,
		ProductService,
		PaymentService,
		TasksStoreService,
		InvoiceEstimateHistoryService,
		TranslatableService,
		CurrencyPipe,
		CurrencyPositionPipe
	],
	declarations: [
		InvoicesComponent,
		InvoiceAddComponent,
		InvoiceTasksSelectorComponent,
		InvoiceProjectsSelectorComponent,
		InvoiceEmployeesSelectorComponent,
		InvoiceEditComponent,
		InvoicesReceivedComponent,
		InvoiceSendMutationComponent,
		InvoiceViewComponent,
		InvoiceProductsSelectorComponent,
		InvoicePaidComponent,
		InvoiceEmailMutationComponent,
		InvoiceViewInnerComponent,
		InvoiceDownloadMutationComponent,
		EstimatesComponent,
		EstimateAddComponent,
		EstimateEditComponent,
		EstimatesReceivedComponent,
		EstimateViewComponent,
		InvoicePaymentsComponent,
		PaymentMutationComponent,
		InvoiceApplyTaxDiscountComponent,
		InvoiceExpensesSelectorComponent,
		InvoicePdfComponent,
		AddInternalNoteComponent,
		PublicLinkComponent,
		InvoicePaymentReceiptMutationComponent
	],
	exports: [InvoiceViewInnerComponent]
})
export class InvoicesModule {}
