import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataManagementSolutionsService {

	constructor() { }

	private dataManagementSolutions = [
		{
			name: "Data Management Solutions",
			service_name: "Account Profiling",
			imageUrl: "../assets/images/services/Account Profiling.png",
			routerLinkURL: "/services/data-management-solutions/account-profiling",
			content_block1: {
				h5: "Why Choose Our Services?",
				p: "",
				title0: "", content0: "For any prospect you will be approaching, all you need is adequate information about the business and the individual who will be a fantastic fit. This is exactly what we provide.",
				title1: "", content1: "Our Anosales experts dig deeply to research the ins and outs of your prospects to produce a detailed report.",
				title2: "", content2: "Think about the fact you know your customers with our B2B Account Profiling Services.",
				title3: "", content3: "It's much easier to get started, make decisions, and look for insights into this sector, doesn't it?",
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
			mat_tool_tip: "Learn more about Account Profiling"
		},
		{
			name: "Data Management Solutions",
			service_name: "Custom Data Build Out",
			imageUrl: "../assets/images/services/Custom Data Build Out.png",
			routerLinkURL: "/services/data-management-solutions/custom-data-build-out",
			content_block1: {
				h5: "Why Choose Our Services?",
				p: "",
				title0: "", content0: "The quality of your contact database for the marketing or sales program decides the success of your campaigns.",
				title1: "", content1: "Imagine how productive your sales team will be if they have the higher (90%) chance of pitching the right contact at the first time!",
				title2: "", content2: "We offer you our highly cost-effective contact discovery service to solve your lead generation problems.",
				title3: "", content3: "Anosales B2B contact discovery solution is different from data resellers or mailing list brokers who can just provide you millions of ineffective contacts.",
				title4: "", content4: "In its place we can provide you large enough custom-built business contact list which consists of name, title, company name, physical location of the company, valid email address and contact number which have been validated by our telemarketing team.",
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
			mat_tool_tip: "Learn more about Custom Data Build Out"
		},
		{
			name: "Data Management Solutions",
			service_name: "Database Hygiene",
			imageUrl: "../../../assets/images/services/Database Hygiene.png",
			routerLinkURL: "/services/data-management-solutions/database-hygiene",
			content_block1: {
				h5: "Why Choose Our Services?",
				p: "",
				title0: "", content0: "Every company depends on reliable and accurate data.",
				title1: "", content1: "Clean data promotes enhanced corporate performance by enhancing marketing and providing accurate performance metrics.",
				title2: "", content2: "Anosales data enrichment professionals provide comprehensive data cleansing services to our clients for maintaining their data records accurately.",
				title3: "", content3: "Also, we reduce unnecessary costs and wastage associated.",
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
			mat_tool_tip: "Learn more about Database Hygiene"
		},
		{
			name: "Data Management Solutions",
			service_name: "Email Append",
			imageUrl: "../../../assets/images/services/Email Append.png",
			routerLinkURL: "/services/data-management-solutions/email-append",
			content_block1: {
				h5: "Why Choose Our Services?",
				p: "",
				title0: "", content0: "E-mail addresses can be appended when you want to go beyond conventional methods of communication and conduct email communications.",
				title1: "", content1: "Using our updates address appending services, we will add your database with every customer's contact information.",
				title2: "", content2: "Our experts acquire this information from different databases so as to keep your databank up to date, which makes it easier for you to do more research and connect with new clients.",
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
			mat_tool_tip: "Learn more about Email Append"
		},
		{
			name: "Data Management Solutions",
			service_name: "Technology User List",
			imageUrl: "../../../assets/images/services/Technology User List.png",
			routerLinkURL: "/services/data-management-solutions/technology-user-list",
			content_block1: {
				h5: "Why Choose Our Services?",
				p: "",
				title0: "", content0: "Our list of Technology Users has been established from the most reliable sources and completed meticulously to cultivate multichannel campaigns and effective business communication. It is the perfect email list to reach the tech industry.",
				title1: "", content1: "The Anosales team will work with clients to create their mailing lists. The Marketing Technology Users Mailing List will be tailored to fit several different specifications such as the business sector, customer base, geographical location, and job roles. We will additionally give versatile options for marketing messages devised to increase responses.",
				title2: "", content2: "",
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
			mat_tool_tip: "Learn more about Technology User List"
		},
	]

	getDataManagementSolutionsData() {
		return this.dataManagementSolutions;
	}
}
