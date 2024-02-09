import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CustomDataBuildOutService {

	constructor() { }

	private customDataBuildOut = [
		{
			service_name: "Custom Data Build Out",
			imageUrl: "../../../assets/images/services/Custom Data Build Out.png",
			routerLinkURL: "/services/data-management-solutions/custom-data-build-out",
			content_block1: {
				content_group: [
					{ content: "We understand that accurate and up-to-date data is the backbone of successful B2B marketing and sales campaigns. At Anosales our team of data experts leverages cutting-edge technology and industry knowledge to deliver Custom Data Build Out services that meet your unique business needs." },
					{ content: "Whether you need to enrich your existing database, gather specific data points, or build a comprehensive target account list, our customized data solutions ensure that you have the most accurate and actionable information at your fingertips. At Anosales LLC we go above and beyond to provide you with the insights you need to drive business growth and stay ahead of the competition." },
				],
			},
			content_block2: {
				content_block2_title: "Our Services",
				content_group: [
					{ title: "Data Enrichment:", content: "Our data enrichment services help you enhance your existing database by adding missing or outdated information. Anosales LLC leverage various sources and verification techniques to ensure that your data is accurate, complete, and up-to-date. By enriching your data, you can gain a deeper understanding of your prospects, segment your audience effectively, and personalize your marketing efforts. Custom Data Build Out services often include data enrichment, which involves adding or updating missing or outdated information in an existing dataset. This process may involve verifying and enhancing data fields such as company details, contact information, firmographics, technographics, social media profiles, and more. By enriching the data, businesses can obtain a more comprehensive and accurate understanding of their target audience." },
					{ title: "Custom Data Acquisition:", content: "At Anosales we specialize in gathering custom data tailored to your specific requirements. Whether you need industry-specific data, technographic information, firmographic details, or any other data points critical to your target audience, our team conducts extensive research to build a comprehensive dataset that aligns with your business objectives. With our custom data acquisition services, you can gain unique insights and a competitive edge in your market. Custom Data Build Out involves acquiring data from various sources to build a tailored dataset. This may include industry-specific data, market research reports, public databases, web scraping, and other relevant sources. The acquired data is then organized, cleaned, and structured to meet the specific requirements of the business." },
					{ title: "Target Account List Development:", content: "We assist you in creating a targeted account list that aligns with your ideal customer profile. By combining data enrichment techniques with research and analysis, we identify high-value accounts and provide you with a curated list of potential prospects. This enables you to focus your marketing and sales efforts on the accounts that are most likely to convert, driving higher ROI and revenue growth." },
				],
			},
			content_block3: {
				content_block3_title: "Why Choose Us?",
				content_group: [
					{ title: "Data Expertise", content: "Our team comprises data experts who possess extensive experience in B2B data management and analysis. We stay up-to-date with the latest data enrichment techniques and industry best practices to deliver exceptional results for our clients." },
					{ title: "Customized Solutions", content: "We understand that every business has unique data requirements. That's why we offer customized solutions tailored to your specific needs. We collaborate closely with you to understand your goals and objectives, ensuring that our data build-out services align with your business strategy." },
					{ title: "Data Accuracy and Compliance", content: "We prioritize data accuracy and adhere to strict data privacy and security protocols. Our robust processes and quality checks ensure that the data we provide is reliable, compliant, and adheres to relevant regulations." },
					{ title: "Actionable Insights", content: "We don't just provide raw data; we deliver actionable insights to help you make informed decisions. Our team goes beyond data collection, offering strategic recommendations and guidance based on the insights derived from the data build-out process." },
				]
			},
		},
	];

	getCustomDataBuildOutData() {
		return this.customDataBuildOut;
	}
}
