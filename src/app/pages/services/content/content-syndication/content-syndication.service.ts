import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContentSyndicationService {

	constructor() { }

	private contentSyndication = [
		{
			service_name: "Content",
			service_subname: "Content Syndication",
			imageUrl: "../../../assets/images/services/Content Syndication.png",
			routerLinkURL: "/services/content-syndication",
			content_block1: {
				content_block1_title: "How Does Our Content Syndication Service Work?",
				content_group: [
					{ content: "Anosales LLC offers distinctive whitepaper marketing service to B2B firms in distributing whitepapers to their ideal leads.", },
					{ content: "We have adapted a proven telemarketing model to target whitepapers, Brochure, flyers, comparison charts and case studies to your industry & other readers.", },
					{ content: "We reach out relevant audience segment of opt-in subscriber base and understand whether they would be interested in your product or service.", },
					{ content: "If we get a positive response we send the whitepaper to the individual's email id and the lead will be captured.", },
				],
			},
		},
	]

	getContentSyndicationData() {
		return this.contentSyndication;
	}
}
