// tslint:disable: nx-enforce-module-boundaries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
	NbCardModule,
	NbCheckboxModule,
	NbButtonModule,
	NbSelectModule,
	NbDatepickerModule,
	NbContextMenuModule,
	NbIconModule,
	NbDialogModule,
	NbSpinnerModule,
	NbPopoverModule,
	NbTooltipModule
} from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import {
	DialogsModule,
	EditTimeLogModalModule,
	GauzyButtonActionModule,
	GauzyFiltersModule,
	SharedModule,
	TableComponentsModule,
	TaskSelectModule,
	TimerPickerModule,
	ViewTimeLogModalModule,
	ViewTimeLogModule
} from '@gauzy/ui-sdk/shared';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DailyRoutingModule } from './daily-routing.module';
import { DailyComponent } from './daily/daily.component';
import { NoDataMessageModule } from '../../../../@shared/no-data-message/no-data-message.module';

@NgModule({
	declarations: [DailyComponent],
	imports: [
		CommonModule,
		FormsModule,
		DailyRoutingModule,
		NbButtonModule,
		NbCardModule,
		NbCheckboxModule,
		NbContextMenuModule,
		NbDatepickerModule,
		NbDialogModule,
		NbIconModule,
		NbPopoverModule,
		NbSelectModule,
		NbSpinnerModule,
		NbTooltipModule,
		NgxPermissionsModule.forChild(),
		I18nTranslateModule.forChild(),
		SharedModule,
		TimerPickerModule,
		TaskSelectModule,
		EditTimeLogModalModule,
		ViewTimeLogModalModule,
		GauzyFiltersModule,
		ViewTimeLogModule,
		DialogsModule,
		TableComponentsModule,
		GauzyButtonActionModule,
		NoDataMessageModule
	]
})
export class DailyModule {}
