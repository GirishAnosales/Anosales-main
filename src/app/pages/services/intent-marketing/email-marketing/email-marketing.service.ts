import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmailMarketingService {

	constructor() { }

	private emailMarketing = [
		{
			service_name: "Email Marketing",
			imageUrl: "../../../assets/images/services/Email Marketing.png",
			routerLinkURL: "/services/intent-marketing/email-marketing",
			content_block1: {
				content_group: [
					{ title: "Increased ROI", content: "Email marketing is one of the most cost-effective marketing channels, and it has an impressive ROI compared to other marketing strategies. With our service, you can expect to see a significant return on your investment." },
					{ title: "Better Customer Engagement", content: "With personalized and targeted emails, you can build stronger relationships with your customers, increase their engagement with your brand, and improve your brand reputation." },
					{ title: "Increased Sales", content: "By sending targeted and relevant emails to your customers, you can drive more sales and revenue for your business." },
					{ title: "Improved Analytics", content: "Our email marketing service provides in-depth analytics that tracks the performance of your campaigns. You can use these insights to improve your future campaigns and optimize your email marketing strategy." },
				],
			},
		},
	]

	getEmailMarketingData() {
		return this.emailMarketing;
	}
}
