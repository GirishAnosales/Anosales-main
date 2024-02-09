import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AppointmentGenerationService {

	constructor() { }

	private appointment_generation = [
		{
			service_name: "Appointment Generation",
			imageUrl: "../assets/images/services/Appointment Settings.png",
			routerLinkURL: "/services/appointment-generation",
			content_block1: {
				content_block1_title: "What we provide in B2B Appointment Setting Services",
				p: "Our appointment-setting process is straightforward and effective. Here's how it works:",
				content_group: [
					{ title: "Account Identification", content: "We work with you to identify the key accounts that are most likely to benefit from your products or services.", },
					{ title: "Account Research", content: "Once we have identified your target accounts, we conduct in-depth research to understand their needs, pain points, and buying behaviors.", },
					{ title: "Personalized Campaigns", content: "Using the insights gained through our research, we create personalized marketing campaigns that speak directly to the decision-makers at your target accounts.", },
					{ title: "Multi-Channel Outreach", content: "We use a variety of channels, including email, social media, and targeted advertising, to reach your target accounts and maximize engagement.", },
					{ title: "Analytics and Optimization", content: "We continually monitor and optimize your campaigns to ensure maximum ROI and ongoing success.", }
				],
			},
			content_block2: {
				pcontent_block2_title: "Benefits of our B2B Appointment Setting Services",
				content_group: [
					{ content: "Increased engagement and conversion rates with target accounts", },
					{ content: "Improved ROI on your marketing efforts", },
					{ content: "A more streamlined sales process, as we work to align your sales and marketing strategies", },
					{ content: "Personalized, relevant content that speaks directly to the needs of your target accounts", },
				],
			},
			p: "Our B2B appointment-setting service can help your business save time and resources while securing high-quality appointments with potential clients.",
			button_name: "Go",
			mat_tool_tip: "Learn more about Appointment Generation"
		},
	]

	getAppointmentGenerationData() {
		return this.appointment_generation;
	}
}
