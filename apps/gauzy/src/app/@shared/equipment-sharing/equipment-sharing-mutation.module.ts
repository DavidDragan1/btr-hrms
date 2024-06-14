import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbIconModule,
	NbCardModule,
	NbButtonModule,
	NbInputModule,
	NbSelectModule,
	NbCheckboxModule,
	NbDatepickerModule,
	NbRadioModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { Store } from '@gauzy/ui-sdk/common';
import { EmployeeMultiSelectModule } from '@gauzy/ui-sdk/shared';
import { EquipmentSharingMutationComponent } from './equipment-sharing-mutation.component';
import { EquipmentService, EquipmentSharingPolicyService, EquipmentSharingService } from '@gauzy/ui-sdk/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NbCardModule,
		NbIconModule,
		NbCheckboxModule,
		ReactiveFormsModule,
		FormsModule,
		NbButtonModule,
		NbInputModule,
		NbSelectModule,
		NbDatepickerModule,
		NgSelectModule,
		NbRadioModule,
		I18nTranslateModule.forChild(),
		EmployeeMultiSelectModule
	],
	declarations: [EquipmentSharingMutationComponent],
	providers: [EquipmentSharingService, Store, EquipmentService, EquipmentSharingPolicyService]
})
export class EquipmentSharingMutationModule {}
