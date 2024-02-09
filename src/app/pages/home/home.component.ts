import { Component, ElementRef, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccountBasedMarketingService } from '../services/account-based-marketing/account-based-marketing.service';
import { AppointmentGenerationService } from '../services/appointment-generation/appointment-generation.service';
import { ContentCreationService } from '../services/content/content-creation/content-creation.service';
import { ContentMarketingService } from '../services/content/content-marketing/content-marketing.service';
import { ContentSyndicationService } from '../services/content/content-syndication/content-syndication.service';
import { BantService } from '../services/intent-marketing/bant/bant.service';
import { EmailMarketingService } from '../services/intent-marketing/email-marketing/email-marketing.service';
import { HqlService } from '../services/intent-marketing/hql/hql.service';
import { MqlService } from '../services/intent-marketing/mql/mql.service';
import { SqlService } from '../services/intent-marketing/sql/sql.service';
import { AccountProfilingService } from '../services/database-management-solutions/account-profiling/account-profiling.service';
import { CustomDataBuildOutService } from '../services/database-management-solutions/custom-data-build-out/custom-data-build-out.service';
import { DatabaseHygieneService } from '../services/database-management-solutions/database-hygiene/database-hygiene.service';
import { EmailAppendService } from '../services/database-management-solutions/email-append/email-append.service';
import { TechnologyUserListService } from '../services/database-management-solutions/technology-user-list/technology-user-list.service';
import { ContentService } from '../services/services/content.service';
import { DataManagementSolutionsService } from '../services/services/data-management-solutions.service';
import { IntentMarketingService } from '../services/services/intent-marketing.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	goButton!: "Go";

	accountBasedMarketingData!: any[];
	appointmentGenerationData!: any[];
	contentCreationData!: any[];
	contentMarketingData!: any[];
	contentSyndicationData!: any[];
	bantData!: any[];
	emailMarketingData!: any[];
	hqlData!: any[];
	mqlData!: any[];
	sqlData!: any[];
	accountProfilingData!: any[];
	customDataBuildOutData!: any[];
	databaseHygieneData!: any[];
	emailAppendData!: any[];
	technologyUserListData!: any[];

	contentData!: any[];
	dataManagementSolutionsData!: any[];
	intentMarketingData!: any[];

	constructor(
		private elementRef: ElementRef,
		protected accountBasedMarketingService: AccountBasedMarketingService,
		protected appointmentGenerationService: AppointmentGenerationService,
		protected contentCreationService: ContentCreationService,
		protected contentMarketingService: ContentMarketingService,
		protected contentSyndicationService: ContentSyndicationService,
		protected bantService: BantService,
		protected emailMarketingService: EmailMarketingService,
		protected hqlService: HqlService,
		protected mqlService: MqlService,
		protected sqlService: SqlService,
		protected accountProfilingService: AccountProfilingService,
		protected customDataBuildOutService: CustomDataBuildOutService,
		protected databaseHygieneService: DatabaseHygieneService,
		protected emailAppendService: EmailAppendService,
		protected technologyUserListService: TechnologyUserListService,

		protected contentService: ContentService,
		protected dataManagementSolutionsService: DataManagementSolutionsService,
		protected intentMarketingService: IntentMarketingService,
	) {
		this.accountBasedMarketingData = this.accountBasedMarketingService.getAccountBasedMarketingData();
		this.appointmentGenerationData = this.appointmentGenerationService.getAppointmentGenerationData();
		this.contentCreationData = this.contentCreationService.getContentCreationData();
		this.contentMarketingData = this.contentMarketingService.getContentMarketingData();
		this.contentSyndicationData = this.contentSyndicationService.getContentSyndicationData();
		this.bantData = this.bantService.getBantData();
		this.emailMarketingData = this.emailMarketingService.getEmailMarketingData();
		this.hqlData = this.hqlService.getHqlData();
		this.mqlData = this.mqlService.getMqlData();
		this.sqlData = this.sqlService.getSqlData();
		this.accountProfilingData = this.accountProfilingService.getAccountProfilingData();
		this.customDataBuildOutData = this.customDataBuildOutService.getCustomDataBuildOutData();
		this.databaseHygieneData = this.databaseHygieneService.getDatabaseHygieneData();
		this.emailAppendData = this.emailAppendService.getEmailAppendData();
		this.technologyUserListData = this.technologyUserListService.getTechnologyUserListData();

		this.contentData = this.contentService.getContentData();
		this.dataManagementSolutionsData = this.dataManagementSolutionsService.getDataManagementSolutionsData();
		this.intentMarketingData = this.intentMarketingService.getIntentMarketingData();
	}

	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: false,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			740: {
				items: 3
			},
			940: {
				items: 4
			}
		},
		nav: true
	}

	images = [
		{
			src: '../../../assets/images/wallpapers/office/1 (5).jpg'
		},
		{
			src: '../../../assets/images/wallpapers/office/1 (2).jpg'
		},
		{
			src: '../../../assets/images/wallpapers/office/1 (6).jpg'
		},
		{
			src: '../../../assets/images/wallpapers/office/1 (8).jpg'
		}
	];

	onClick() {
		window.scroll(0, 0)
	}

	scrollToSection(sectionId: string): void {
		const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
		section.scrollIntoView({ behavior: 'smooth' });
	}

	ngOnInit() {
	}
}
