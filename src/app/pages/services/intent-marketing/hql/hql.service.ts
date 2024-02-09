import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HqlService {

	constructor() { }

	private hql = [
		{
			service_name: "HQL - High Quality Leads",
			imageUrl: "../../../assets/images/services/Highly Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/hql",
			content_block1: {
				content_group: [
					{ title: "How do we generate Highly Qualified Leads?", content: "At Anosales, we employ a combination of advanced techniques and cutting-edge technologies to generate HQL that aligns with your target audience." },
				],
			},
			content_block2: {
				content_block2_title: "Our Services",
				content_group: [
					{ title: "Comprehensive Data Analysis", content: "We analyze vast datasets and utilize sophisticated algorithms to identify individuals and businesses who exhibit patterns and behaviors indicative of high purchase intent. This allows us to filter out unqualified leads and focus on the most promising prospects." },
					{ title: "Targeted Marketing Campaigns", content: "Through strategic online marketing campaigns, we promote your products or services to potential customers who match your ideal buyer profile. By reaching out to individuals who have already shown an interest in similar offerings, we maximize the chances of generating highly qualified leads." },
					{ title: "Lead Scoring and Qualification", content: "We employ lead scoring techniques to assign a value or score to each lead based on various factors such as demographics, engagement level, and online behavior. This helps prioritize leads and enables your sales team to focus on the prospects with the highest conversion potential." },
					{ title: "Behavioral Tracking", content: "Our advanced tracking tools monitor user behavior across multiple channels and touchpoints. By understanding how potential customers interact with your brand, we can tailor your marketing messages to resonate with their interests, pain points, and motivations." },
				],
			},
			content_block3: {
				content_block3_title: "Why Choose Us?",
				content_group: [
					{ title: "Quality over Quantity", content: "We prioritize quality over quantity. Instead of bombarding you with a large volume of generic leads, we focus on delivering a select group of highly qualified prospects who are genuinely interested in what you offer." },
					{ title: "Time and Cost Efficiency", content: "Our HQL services save you valuable time and resources. By providing you with pre-qualified leads, you can allocate your sales team's efforts more efficiently, resulting in higher conversion rates and reduced acquisition costs." },
					{ title: "Improved Conversion Rates", content: "With HQL, you can significantly increase your conversion rates. By targeting prospects who are more likely to convert, you minimize the chances of wasting time and resources on leads that are unlikely to result in sales." },
					{ title: "Enhanced Customer Insights", content: "HQL provides you with valuable insights into your target audience. By understanding their preferences, pain points, and motivations, you can tailor your products, services, and marketing strategies to better meet their needs." },
				]
			},
		},
	]

	getHqlData() {
		return this.hql;
	}
}
