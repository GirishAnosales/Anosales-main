import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SqlService {

	constructor() { }

	private sql = [
		{
			service_name: "SQL - Sales Qualified Leads",
			imageUrl: "../../../assets/images/services/Sales Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/sql",
			content_block1: {
				content_block1_title: "Our Services",
				content_group: [
					{ title: "Lead Scoring and Filtering", content: "Our expert team utilizes advanced algorithms and data analytics to identify and score leads based on their demographic information, behavioral patterns, and engagement history. This ensures that only the most relevant and promising prospects are included in the SQL program." },
					{ title: "Qualification Process", content: "Once leads have been scored, our dedicated sales team further qualifies them through personalized interactions. We engage with prospects to understand their specific needs, address any concerns, and provide tailored solutions. This step allows us to separate window shoppers from serious buyers." },
					{ title: "Detailed Profiling", content: "To ensure maximum accuracy, we create detailed profiles for each SQL. These profiles contain valuable insights into the prospect's preferences, pain points, buying power, and purchasing timeline. Armed with this information, your sales team can engage in more meaningful conversations, resulting in higher conversion rates." },
					{ title: "Real-time Delivery", content: "Our SQLs are delivered directly to your inbox or CRM system in real-time. You'll never miss out on a hot lead again! With immediate access to qualified prospects, your sales team can strike while the iron is hot, increasing their chances of closing deals quickly." },
					{ title: "Continuous Optimization:", content: "Our SQL program is not a one-time solution. We continuously monitor and optimize the process to ensure the highest quality leads are delivered consistently. By analyzing feedback, refining criteria, and adapting to market trends, we guarantee you receive the best possible leads for your business." },
				],
			},
			content_block2: {
				content_block2_title: "Why Choose Us?",
				content_group: [
					{ title: "Increased Sales Efficiency", content: "By focusing on qualified leads, your sales team can optimize their efforts and spend more time closing deals instead of prospecting. This streamlined approach boosts overall sales efficiency and reduces wasted resources." },
					{ title: "Higher Conversion Rates", content: "Our SQLs have a significantly higher probability of conversion compared to regular leads. With well-qualified prospects who are actively seeking your products or services, you can expect higher conversion rates and improved ROI." },
					{ title: "Time and Cost Savings", content: "Our program saves you valuable time and money by eliminating the need for extensive lead research and cold calling. We do the heavy lifting for you, providing you with ready-to-convert leads that can generate revenue faster." },
					{ title: "Tailored Solutions", content: "The detailed profiles we create for each SQL enable you to personalize your sales approach. Understanding your prospects' pain points, preferences, and buying habits allows you to present tailored solutions that resonate with them, increasing the likelihood of a successful sale." },
					{ title: "Scalable and Flexible", content: "Whether you're a small business looking to expand or a large enterprise seeking consistent growth, our SQL program is scalable and adaptable to your needs. You can adjust the volume of leads you receive based on your sales team's capacity and goals." },
				]
			},
		},
	]

	getSqlData() {
		return this.sql;
	}
}
