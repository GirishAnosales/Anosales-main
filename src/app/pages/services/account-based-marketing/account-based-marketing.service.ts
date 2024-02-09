import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AccountBasedMarketingService {

	constructor() { }

	private accountBasedMarketing = [
		{
			service_name: "Account Based Marketing",
			imageUrl: "../assets/images/services/Account Based Marketing.png",
			routerLinkURL: "/services/account-based-marketing",
			content_block1: {
				content_block1_title: "Why Choose Our ABM Services?",
				content_group: [
					{ title: "Account Identification", content: "We work with you to identify the key accounts that are most likely to benefit from your products or services.", },
					{ title: "Account Research", content: "Once we have identified your target accounts, we conduct in-depth research to understand their needs, pain points, and buying behaviors.", },
					{ title: "Personalized Campaigns", content: "Using the insights gained through our research, we create personalized marketing campaigns that speak directly to the decision-makers at your target accounts.", },
					{ title: "Multi-Channel Outreach", content: "We use a variety of channels, including email, social media, and targeted advertising, to reach your target accounts and maximize engagement.", },
					{ title: "Analytics and Optimization", content: "We continually monitor and optimize your campaigns to ensure maximum ROI and ongoing success.", }
				],
			},
			content_block2: {
				content_block2_title: "By partnering with our team for your ABM needs, you can expect",
				content_group: [
					{ content: "Increased engagement and conversion rates with target accounts", },
					{ content: "Improved ROI on your marketing efforts", },
					{ content: "A more streamlined sales process, as we work to align your sales and marketing strategies", },
					{ content: "Personalized, relevant content that speaks directly to the needs of your target accounts", },
				],
			},
			button_name: "Go",
			mat_tool_tip: "Learn more about Account Based Marketing"
		},
	]

	getAccountBasedMarketingData() {
		return this.accountBasedMarketing;
	}
}