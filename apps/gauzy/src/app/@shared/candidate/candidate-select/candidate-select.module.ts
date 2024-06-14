import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbSelectModule } from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { SharedModule } from '@gauzy/ui-sdk/shared';
import { CandidateSelectComponent } from './candidate-select.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NbSelectModule,
		I18nTranslateModule.forChild(),
		SharedModule
	],
	declarations: [CandidateSelectComponent],
	exports: [CandidateSelectComponent],
	providers: []
})
export class CandidateSelectModule {}
