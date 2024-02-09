import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MqlService {

	constructor() { }

	private mql = [
		{
			service_name: "MQL - Marketing Qualified Leads",
			imageUrl: "../../../assets/images/services/Market Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/mql",
			content_block1: {
				content_group: [
					{ title: "Custom Indicator Development", content: "We can create custom indicators based on your trading strategy or requirements. Our team of MQL programmers has experience developing a wide range of indicators, including trend, momentum, and volume." },
					{ title: "Expert Advisor Development", content: "Expert advisors are automated trading systems that can execute trades on your behalf based on predefined rules. We can create expert advisors that are tailored to your trading strategy and preferences." },
					{ title: "Script Development", content: "Scripts are small programs that can perform a variety of functions in the MetaTrader platform. We can develop scripts to automate tasks such as opening and closing trades, managing positions, and analyzing data." },
					{ title: "Back-testing and Optimization", content: "We can back test and optimize your trading strategy using historical data to help you identify potential weaknesses and improve your results." },
				],
			},
			content_block2: {
				content_block2_title: "Our Services",
				content_group: [
					{ title: "Experienced MQL Programmers", content: "Our team of MQL programmers has years of experience in developing custom indicators, expert advisors, and scripts. We have worked with traders and brokers around the world, and we have a deep understanding of the forex market." },
					{ title: "High-Quality Services", content: "We are committed to providing high-quality services that meet the needs and expectations of our clients. We take pride in our work and strive to deliver reliable, efficient, and effective solutions." },
					{ title: "Timely Delivery", content: "We understand the importance of deadlines in the forex market, and we work diligently to deliver our services in a timely manner. We communicate regularly with our clients to ensure that they are aware of the progress of their projects." },
					{ title: "Competitive Pricing", content: "We offer competitive pricing for our MQL services, without compromising on quality. We believe that our services should be accessible to traders and brokers of all sizes." },
				],
			},
		},
	]

	getMqlData() {
		return this.mql;
	}
}
