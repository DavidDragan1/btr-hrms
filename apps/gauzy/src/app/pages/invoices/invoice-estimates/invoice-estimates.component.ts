import { TranslationBaseComponent } from '@gauzy/ui-sdk/i18n';
import { OnInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ga-estimates',
	templateUrl: './invoice-estimates.component.html'
})
export class EstimatesComponent extends TranslationBaseComponent implements OnInit {
	constructor(readonly translateService: TranslateService) {
		super(translateService);
	}

	ngOnInit() {}
}
