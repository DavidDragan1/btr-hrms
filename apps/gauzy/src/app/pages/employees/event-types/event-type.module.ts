import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbInputModule,
	NbSelectModule,
	NbSpinnerModule,
	NbDialogModule,
	NbToastrModule
} from '@nebular/theme';
import { EventTypeRoutingModule } from './event-type.routing.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { EventTypeService } from '@gauzy/ui-sdk/core';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import {
	GauzyButtonActionModule,
	PaginationV2Module,
	SharedModule,
	TableComponentsModule,
	TagsColorInputModule,
	UserFormsModule
} from '@gauzy/ui-sdk/shared';
import { EventTypeComponent } from './event-type.component';
import { EventTypeMutationModule } from './event-type-mutation/event-type-mutation.module';
import { CardGridModule } from '../../../@shared/card-grid/card-grid.module';

@NgModule({
	imports: [
		TableComponentsModule,
		TagsColorInputModule,
		EventTypeRoutingModule,
		SharedModule,
		NbToastrModule,
		NbCardModule,
		FormsModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		NbSelectModule,
		Angular2SmartTableModule,
		NbSpinnerModule,
		EventTypeMutationModule,
		UserFormsModule,
		CardGridModule,
		NbDialogModule.forChild(),
		I18nTranslateModule.forChild(),
		GauzyButtonActionModule,
		PaginationV2Module
	],
	declarations: [EventTypeComponent],
	providers: [EventTypeService]
})
export class EventTypeModule {}
