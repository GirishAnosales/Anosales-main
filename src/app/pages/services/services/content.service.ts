import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContentService {

	constructor() { }

	private content = [
		{
			name: "Content",
			service_name: "Content Creation",
			imageUrl: "../assets/images/services/Content Creation.png",
			routerLinkURL: "/services/content/content-creation",
			content: "Our team consists of skilled writers with expertise in various industries and niches. They possess the ability to conduct thorough research and craft well-written, engaging, and informative content that resonates with your audience.",
			button_name: "Go",
			mat_tool_tip: "Learn more about Content Creation"
		},
		{
			name: "Content",
			service_name: "Content Marketing",
			imageUrl: "../assets/images/services/Content Marketing.png",
			routerLinkURL: "/services/content/content-marketing",
			content: "We believe in a customized approach to content marketing. Our team of experienced strategists will work closely with you to develop a content strategy that aligns with your brand's objectives and resonates with your target audience. From defining your target market to outlining key content themes, we'll create a roadmap for success.",
			button_name: "Go",
			mat_tool_tip: "Learn more about Content Marketing"
		},
		{
			name: "Content",
			service_name: "Content Syndication",
			imageUrl: "../assets/images/services/Content Syndication.png",
			routerLinkURL: "/services/content/content-syndication",
			content: "Anosales LLC offers distinctive whitepaper marketing service to B2B firms in distributing whitepapers to their ideal leads.",
			button_name: "Go",
			mat_tool_tip: "Learn more about Content Syndication"
		},
	]

	getContentData() {
		return this.content;
	}
}
