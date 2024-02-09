import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BantService {

	constructor() { }

	private bant = [
		{
			service_name: "Bant",
			imageUrl: "../../../assets/images/services/Bant.png",
			routerLinkURL: "/services/intent-marketing/bant",
			content_block1: {
				content_group: [
					{ content: "Identify your ideal customer profile: We'll help you understand the characteristics and behaviors of your most valuable customers, so you can target similar prospects more effectively." },
					{ content: "Score and prioritize your leads: We'll help you develop a lead scoring system that takes into account BANT criteria as well as other factors such as engagement and fit with your product or service." },
					{ content: "Optimize your sales process: We'll work with you to streamline your sales process, so you can focus your time and resources on the leads that are most likely to convert." },
				],
			},
		},
	]

	getBantData() {
		return this.bant;
	}
}
