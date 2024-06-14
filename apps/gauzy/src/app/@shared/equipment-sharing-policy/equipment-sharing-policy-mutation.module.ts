import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbIconModule,
	NbCardModule,
	NbButtonModule,
	NbInputModule,
	NbSelectModule,
	NbCheckboxModule,
	NbRadioModule
} from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EquipmentSharingPolicyService } from '@gauzy/ui-sdk/core';
import { EquipmentSharingPolicyMutationComponent } from './equipment-sharing-policy-mutation.component';

@NgModule({
	imports: [
		ThemeModule,
		FormsModule,
		NbCardModule,
		NbIconModule,
		NbCheckboxModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbInputModule,
		NbSelectModule,
		NbRadioModule,
		NgSelectModule,
		I18nTranslateModule.forChild()
	],
	declarations: [EquipmentSharingPolicyMutationComponent],
	providers: [EquipmentSharingPolicyService]
})
export class EquipmentSharingPolicyMutationModule {}
