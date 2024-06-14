import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbBadgeModule, NbButtonModule, NbIconModule, NbTagModule, NbTooltipModule } from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { PipesModule } from '@gauzy/ui-sdk/shared';
import { StatusBadgeModule } from '../../../@shared/status-badge';
import { JobTitleDescriptionDetailsComponent } from './job-title-description-details/job-title-description-details.component';
import { JobStatusComponent } from './job-status/job-status.component';

@NgModule({
	imports: [
		CommonModule,
		NbBadgeModule,
		NbButtonModule,
		NbIconModule,
		NbTagModule,
		NbTooltipModule,
		I18nTranslateModule.forChild(),
		PipesModule,
		StatusBadgeModule
	],
	declarations: [JobTitleDescriptionDetailsComponent, JobStatusComponent],
	exports: [JobTitleDescriptionDetailsComponent, JobStatusComponent]
})
export class JobTableComponentsModule {}
