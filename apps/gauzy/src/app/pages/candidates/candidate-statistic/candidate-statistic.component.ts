import { ICandidate, ICandidateInterview, IEmployee, IOrganization } from '@gauzy/contracts';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { CandidateInterviewService, CandidatesService, EmployeesService } from '@gauzy/ui-sdk/core';
import { Store } from '@gauzy/ui-sdk/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ga-candidate-statistic',
	templateUrl: './candidate-statistic.component.html',
	styleUrls: ['./candidate-statistic.component.scss']
})
export class CandidateStatisticComponent implements OnInit, OnDestroy {
	candidateRating: number;
	candidates: ICandidate[] = null;
	names: string[] = [];
	selectedOrganization: IOrganization;
	rating: number[] = [];
	interviewList: ICandidateInterview[];
	employeeList: IEmployee[];

	constructor(
		private readonly candidatesService: CandidatesService,
		private readonly candidateInterviewService: CandidateInterviewService,
		private readonly employeesService: EmployeesService,
		private readonly store: Store
	) {}

	ngOnInit() {
		this.store.selectedOrganization$
			.pipe(
				filter((organization) => !!organization),
				untilDestroyed(this)
			)
			.subscribe((organization) => {
				if (organization) {
					this.selectedOrganization = organization;
					this.loadData();
					this.loadEmployee();
				}
			});
	}
	async loadData() {
		const { tenantId } = this.store.user;
		const { id: organizationId } = this.selectedOrganization;
		const { items } = await firstValueFrom(
			this.candidatesService.getAll(['user', 'interview', 'feedbacks'], {
				organizationId,
				tenantId
			})
		);
		const interviews = await this.candidateInterviewService.getAll(
			['feedbacks', 'interviewers', 'technologies', 'personalQualities'],
			{ organizationId, tenantId }
		);
		if (items && interviews) {
			this.interviewList = interviews.items;
			for (const candidate of items) {
				candidate.rating = candidate.ratings;
			}
			this.candidates = items;
		}
	}
	async loadEmployee() {
		const { tenantId } = this.store.user;
		const { id: organizationId } = this.selectedOrganization;
		const { items } = await firstValueFrom(this.employeesService.getAll(['user'], { organizationId, tenantId }));
		this.employeeList = items;
	}
	ngOnDestroy() {}
}
