import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class IntentMarketingService {

	constructor() { }

	private intentMarketing = [
		{
			name: "Intent Marketing",
			service_name: "Bant",
			imageUrl: "../assets/images/services/Bant.png",
			routerLinkURL: "/services/intent-marketing/bant",
			content_block1: {
				h5: "Track your Leads' progress through the purchasing journey with our highly-specialized BANT Framework.",
				p: "Our BANT service is designed to help you answer these questions and more, so you can identify the leads that are most likely to become paying customers. We use a combination of data analysis, market research, and customer feedback to help you:",
				title0: "", content0: "Identify your ideal customer profile: We'll help you understand the characteristics and behaviors of your most valuable customers, so you can target similar prospects more effectively.",
				title1: "", content1: "Score and prioritize your leads: We'll help you develop a lead scoring system that takes into account BANT criteria as well as other factors such as engagement and fit with your product or service.",
				title2: "", content2: "Optimize your sales process: We'll work with you to streamline your sales process, so you can focus your time and resources on the leads that are most likely to convert.",
				title3: "", content3: "",
				title4: "", content4: "",
			},
			content_block2: {
				p: "",
				content0: "",
				content1: "",
				content2: "",
				content3: "",
			},
			p: "",
			button_name: "Go",
			mat_tool_tip: "Learn more about Bant"
		},
		{
			service_name: "Email Marketing",
			imageUrl: "../assets/images/services/Email Marketing.png",
			routerLinkURL: "/services/intent-marketing/email-marketing",
			content_block1: {
				h5: "Are you looking for a powerful marketing strategy that can help you reach your customers effectively and increase your sales? Look no further than our Email Marketing Service!",
				p0: "With our service, you can create targeted and personalized emails to engage with your customers, build brand loyalty, and drive conversions. Our team of experts will work with you to develop a customized email marketing campaign that aligns with your business goals and brand voice.",
				p1: "Here are some of the benefits of our Email Marketing Service:",
				title0: "Increased ROI", content0: "Email marketing is one of the most cost-effective marketing channels, and it has an impressive ROI compared to other marketing strategies. With our service, you can expect to see a significant return on your investment.",
				title1: "Better Customer Engagement", content1: "With personalized and targeted emails, you can build stronger relationships with your customers, increase their engagement with your brand, and improve your brand reputation.",
				title2: "Increased Sales", content2: "By sending targeted and relevant emails to your customers, you can drive more sales and revenue for your business.",
				title3: "Improved Analytics", content3: "Our email marketing service provides in-depth analytics that tracks the performance of your campaigns. You can use these insights to improve your future campaigns and optimize your email marketing strategy.",
			},
			content_block2: {
				p: "",
				content0: "",
				content1: "",
				content2: "",
				content3: "",
			},
			p: "",
			button_name: "Go",
			mat_tool_tip: "Learn more about Email Marketing"
		},
		{
			service_name: "Highly Qualified Leads",
			imageUrl: "../../../assets/images/services/Highly Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/hql",
			content_block1: {
				h5: "",
				p: "Our team of expert linguists is dedicated to delivering the best possible language solutions to our clients. we are committed to delivering high-quality language services that will help you achieve your global goals. Our services include:",
				title0: "Translation", content0: "Our translation services cover a wide range of industries and languages. We provide accurate and culturally sensitive translations that will help you reach your global audience. Our translators are experts in their respective fields and work tirelessly to ensure that your message is conveyed accurately.",
				title1: "Interpretation", content1: "Our interpretation services are ideal for meetings, conferences, and events. We provide simultaneous and consecutive interpretation services in a variety of languages. Our interpreters are trained professionals who understand the nuances of different languages and cultures, ensuring that communication is smooth and effective.",
				title2: "Localization", content2: "Our localization services are perfect for companies that want to adapt their content to specific cultural and linguistic contexts. We provide localization services for websites, software, and other digital media, ensuring that your message is conveyed effectively to your target audience.",
				title3: "Transcription", content3: "Our transcription services are ideal for businesses that need accurate audio or video recordings transcripts. We provide high-quality transcriptions that are precise and easy to read.",
				title4: "Editing and Proofreading", content4: "Our editing and proofreading services are perfect for businesses that want to ensure that their content is error-free and polished. We provide thorough editing and proofreading services that will help you deliver your message with clarity and precision.",
				title5: "Language Consulting", content5: "Our language consulting services are designed to help businesses navigate the complexities of global communication. We provide expert advice on language and cultural issues, helping businesses to avoid pitfalls and maximize their global impact.",
			},
			content_block2: {
				p: "",
				content0: "",
				content1: "",
				content2: "",
				content3: "",
			},
			p: "",
			button_name: "Go",
			mat_tool_tip: "Learn more about Highly Qualified Leads"
		},
		{
			service_name: "Market Qualified Leads",
			imageUrl: "../../../assets/images/services/Market Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/mql",
			content_block1: {
				h5: "Why MQL Services",
				p: "Harness the power of MQLs to bolster and fortify your sales pipeline.",
				title0: "", content0: "Custom Indicator Development We can create custom indicators based on your trading strategy or requirements. Our team of MQL programmers has experience developing a wide range of indicators, including trend, momentum, and volume.",
				title1: "", content1: "Expert Advisor Development Expert advisors are automated trading systems that can execute trades on your behalf based on predefined rules. We can create expert advisors that are tailored to your trading strategy and preferences.",
				title2: "", content2: "Script Development Scripts are small programs that can perform a variety of functions in the MetaTrader platform. We can develop scripts to automate tasks such as opening and closing trades, managing positions, and analyzing data.",
				title3: "", content3: "Back-testing and Optimization We can back test and optimize your trading strategy using historical data to help you identify potential weaknesses and improve your results.",
				title4: "", content4: "Technical Support and Maintenance We provide technical support and maintenance services to ensure that your custom indicators, expert advisors, and scripts are working properly and efficiently.",
			},
			content_block2: {
				p: "Why Choose Us?",
				content0: "Experienced MQL Programmers Our team of MQL programmers has years of experience in developing custom indicators, expert advisors, and scripts. We have worked with traders and brokers around the world, and we have a deep understanding of the forex market.",
				content1: "High-Quality Services We are committed to providing high-quality services that meet the needs and expectations of our clients. We take pride in our work and strive to deliver reliable, efficient, and effective solutions.",
				content2: "Timely Delivery We understand the importance of deadlines in the forex market, and we work diligently to deliver our services in a timely manner. We communicate regularly with our clients to ensure that they are aware of the progress of their projects.",
				content3: "Competitive Pricing We offer competitive pricing for our MQL services, without compromising on quality. We believe that our services should be accessible to traders and brokers of all sizes.",
			},
			p: "",
			button_name: "Go",
			mat_tool_tip: "Learn more about Market Qualified Leads"
		},
		{
			service_name: "Sales Qualified Leads",
			imageUrl: "../../../assets/images/services/Sales Qualified Leads.png",
			routerLinkURL: "/services/intent-marketing/sql",
			content_block1: {
				h5: "",
				p: "SQL (Structured Query Language) is a powerful programming language used for managing and manipulating relational databases. It is the go-to language for managing data, and its popularity continues to grow as the amount of data collected and stored by companies increases. Here are some key features and benefits of SQL:",
				title0: "Managing Data", content0: "SQL provides the ability to create, modify, and delete data within a database. It is used to manage and organize large volumes of data efficiently.",
				title1: "Data Integrity", content1: "SQL ensures that data is consistent and accurate by enforcing rules and constraints. This helps maintain the integrity of the data and prevents errors and inconsistencies.",
				title2: "Data Security", content2: "SQL provides security measures that ensure only authorized users have access to sensitive data.",
				title3: "Scalability", content3: " SQL is scalable, which means it can handle large amounts of data without sacrificing performance or speed.",
				title4: "Flexibility", content4: "SQL is a flexible language that can be used with various database management systems. This makes it a versatile option for developers and organizations.",
			},
			content_block2: {
				p: "If you are new to SQL, it may seem daunting at first. However, with some basic knowledge and practice, you can become proficient in using SQL to manage and manipulate data. Here are some basic SQL commands to get you started:",
				title0: "SELECT", content0: "This command is used to retrieve data from a database.",
				title1: "INSERT", content1: "This command is used to insert data into a database.",
				title2: "UPDATE", content2: "This command is used to update existing data in a database.",
				title3: "DELETE", content3: "This command is used to delete data from a database.",
				title4: "CREATE", content4: "This command is used to create a new table, view, or other database object.",
				title5: "ALTER", content5: "This command is used to modify an existing table, view, or other database object.",
				title6: "DROP", content6: "This command is used to delete an existing table, view, or other database object.",
			},
			p: "By mastering these basic commands, you can begin to explore the many capabilities of SQL and use it to manage data effectively. Whether you are a developer, data analyst, or business owner, SQL can help you manage and manipulate data with ease.",
			button_name: "Go",
			mat_tool_tip: "Learn more about Sales Qualified Leads"
		},
	]

	getIntentMarketingData() {
		return this.intentMarketing;
	}
}
