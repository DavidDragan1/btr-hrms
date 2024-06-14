import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { ImageAssetComponent } from './image-asset.component';

@NgModule({
	declarations: [ImageAssetComponent],
	exports: [ImageAssetComponent],
	imports: [
		CommonModule,
		NbCardModule,
		NbButtonModule,
		NbInputModule,
		I18nTranslateModule.forChild(),
		FormsModule,
		ReactiveFormsModule
	]
})
export class ImageAssetModule {}
