import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@gauzy/ui-sdk/common';

@Component({
	selector: 'ngx-help',
	templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit, OnDestroy {
	constructor(private store: Store) {}

	ngOnInit() {}

	ngOnDestroy() {}
}
