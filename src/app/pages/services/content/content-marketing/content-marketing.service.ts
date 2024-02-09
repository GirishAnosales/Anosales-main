import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContentMarketingService {

	constructor() { }

	private contentMarketing = [
		{
			service_name: "Content",
			service_subname: "Content Marketing",
			imageUrl: "../../../assets/images/services/Content Marketing.png",
			routerLinkURL: "/services/content-marketing",
			content_block1: {
				content_block1_title: "Why Choose Our Content Marketing Service?",
				content_group: [
					{ title: "Tailored Content Strategy", content: "We believe in a customized approach to content marketing. Our team of experienced strategists will work closely with you to develop a content strategy that aligns with your brand's objectives and resonates with your target audience. From defining your target market to outlining key content themes, we'll create a roadmap for success.", },
					{ title: "Compelling Content Creation", content: "Our team of skilled writers understands the art of crafting captivating content. We'll bring your brand story to life through engaging blog posts, articles, social media updates, videos, and more. Every piece of content will be meticulously researched, impeccably written, and tailored to your brand's unique tone and style.", },
					{ title: "SEO Optimization", content: "We understand the importance of search engine optimization (SEO) in driving organic traffic to your website. Our content will be optimized with relevant keywords, meta tags, and other SEO best practices, ensuring that your website ranks higher in search engine results and attracts quality leads.", },
					{ title: "Content Distribution", content: "Creating outstanding content is only half the battle. Our content marketing service includes strategic distribution across various channels to maximize its reach. From leveraging social media platforms and email newsletters to guest posting and influencer outreach, we'll help you connect with your audience wherever they are.", },
					{ title: "Performance Analysis", content: "We believe in data-driven decision making. Our team will closely monitor the performance of your content marketing efforts, analyzing key metrics such as website traffic, engagement rates, and conversion rates. We'll provide detailed reports and insights, allowing you to make informed adjustments and continuously improve your content strategy.", },
					{ title: "Building Brand Authority", content: "Establishing your brand as an authority in your industry is crucial for long-term success. Through thought leadership content, industry insights, and expert opinions, we'll help position your brand as a trusted source of information and expertise, fostering loyalty and attracting new customers.", },
					{ title: "Continuous Optimization", content: "The digital landscape is ever-evolving, and so should your content strategy. We'll stay on top of the latest industry trends, algorithm updates, and consumer preferences to keep your content fresh, relevant, and effective. Our team will proactively optimize your content, ensuring that it remains aligned with your business goals.", },
				],
			},
			p: "In a world where attention is scarce, exceptional content is the key to standing out from the competition. With our Content Marketing service, you can build a robust online presence, attract and retain your target audience, and drive tangible business results.",
		},
	]

	getContentMarketingData() {
		return this.contentMarketing;
	}
}
