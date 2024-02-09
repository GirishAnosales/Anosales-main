import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContentCreationService {

	constructor() { }

	private contentCreation = [
		{
			service_name: "Content",
			service_subname: "Content Creation",
			imageUrl: "../../../assets/images/services/Content Creation.png",
			routerLinkURL: "/services/content-creation",
			content_block1: {
				content_block1_title: "Why Choose Our Content Creation Service?",
				content_group: [
					{ title: "Expert Writers", content: "Our team consists of skilled writers with expertise in various industries and niches. They possess the ability to conduct thorough research and craft well-written, engaging, and informative content that resonates with your audience.", },
					{ title: "Customized Approach", content: "We understand that every business is unique. That's why we take a personalized approach to content creation. Our writers work closely with you to understand your brand, target audience, and content goals, ensuring that the final product aligns perfectly with your vision.", },
					{ title: "Search Engine Optimization(SEO)", content: "We are well-versed in the best SEO practices to ensure that your content ranks high in search engine results. From incorporating relevant keywords to optimizing meta tags and headers, we take care of the technical aspects to boost your website's visibility and organic traffic.", },
					{ title: "Engaging and Shareable Content", content: "We believe that content should not only inform but also captivate and inspire your readers. Our writers are skilled in creating compelling narratives, evoking emotions, and crafting shareable content that sparks conversations and drives social engagement.", },
					{ title: "Timely Delivery", content: "We understand the importance of meeting deadlines. Our content creation service ensures that you receive your content on time, allowing you to maintain a consistent publishing schedule and keep your audience engaged.", },
					{ title: "Unlimited Revisions", content: "Your satisfaction is our top priority. We offer unlimited revisions to ensure that the content we deliver exceeds your expectations. We work closely with you to incorporate any feedback or changes, guaranteeing that the final content is exactly what you envisioned.", },
				],
			},
			content_block2: {
				content_group: [
					{ content: "We start by scheduling a consultation with you to discuss your content requirements, goals, and preferences. This helps us gain a thorough understanding of your brand and target audience.", },
					{ content: "Our writers conduct in-depth research on the topic, industry, and target audience. We create an outline or content strategy to ensure that the content is informative, well-structured, and aligned with your goals.", },
					{ content: "Our skilled writers bring your content to life, using their expertise to create engaging and informative pieces. Once the initial draft is complete, our editors review the content for grammar, style, and clarity, ensuring that it meets our high standards.", },
					{ content: "We share the content with you for review. You can provide feedback, suggest revisions, or request any changes you desire. We work closely with you to make sure the final content aligns perfectly with your expectations.", },
					{ content: "Once all revisions are complete and you are satisfied with the content, we deliver the final product to you in your preferred format, ready for publishing on your website or platform.", },
				],
			},
			p: "Whether you need blog posts, articles, website copy, social media content, or any other form of written content, our Content Creation Service is here to help. Get in touch with us today to discuss your content needs and take the first step toward engaging, informative, and captivating content that drives results."
		},
	]

	getContentCreationData() {
		return this.contentCreation;
	}
}
