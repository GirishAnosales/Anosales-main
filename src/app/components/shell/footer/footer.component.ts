import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable, map } from 'rxjs';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface AnosalesServicesNode {
	name: string;
	link: string;
	children?: AnosalesServicesNode[];
}

const DROPDOWN_DATA: AnosalesServicesNode[] = [
	{
		name: 'Account Based Marketing',
		link: "/services/account-based-marketing"
	},
	{
		name: 'Appointment Generation',
		link: "/services/appointment-generation"
	},
	{
		name: 'Content',
		link:"",
		children: [
			{ name: 'Content Creation', link: "/services/content/content-creation" },
			{ name: 'Content Marketing', link: "/services/content/content-marketing" },
			{ name: 'Content Syndication', link: "/services/content/content-syndication" }
		],
	},
	{
		name: 'Data Management Solutions',
		link:"",
		children: [
			{ name: 'Account Profiling', link: "/services/data-management-solutions/account-profiling" },
			{ name: 'Custom Data Build Out', link: "/services/data-management-solutions/custom-data-build-out" },
			{ name: 'Database Hygiene', link: "/services/data-management-solutions/database-hygiene" },
			{ name: 'Email Append', link: "/services/data-management-solutions/email-append" },
			{ name: 'Technology User List', link: "/services/data-management-solutions/technology-user-list" }
		],
	},
	{
		name: 'Intent Marketing',
		link:"",
		children: [
			{ name: 'Bant', link: "/services/intent-marketing/bant" },
			{ name: 'Email Marketing', link: "/services/intent-marketing/email-marketing" },
			{ name: 'Hql', link: "/services/intent-marketing/hql" },
			{ name: 'Mql', link: "/services/intent-marketing/mql" },
			{ name: 'Sql', link: "/services/intent-marketing/sql" }
		],
	},
];

/**
 * @title Tree with nested nodes
 */

interface AnosalesFlatNode {
	expandable: boolean;
	name: string;
	level: number;
	link: string;
}

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	private _transformer = (node: AnosalesServicesNode, level: number) => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			level: level,
			link: node.link,
		};
	};

	treeControl = new FlatTreeControl<AnosalesFlatNode>(
		node => node.level,
		node => node.expandable,
	);

	treeFlattener = new MatTreeFlattener(
		this._transformer,
		node => node.level,
		node => node.expandable,
		node => node.children,
	);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	isSmallXSmall!: Observable<boolean>

	services_url = [
		{ link: "services/account-based-marketing", title: "Account Based Marketing" },
		{ link: "services/appointment-generation", title: "Appointment Generation" },
		{ link: "services/content/content-creation", title: "Content Creation" },
		{ link: "services/content/content-marketing", title: "Content Marketing" },
		{ link: "services/content/content-syndication", title: "Content Syndication" },
		{ link: "services/data-management-solutions/account-profiling", title: "Account Profiling" },
		{ link: "services/data-management-solutions/custom-data-build-out", title: "Custom data build out" },
		{ link: "services/data-management-solutions/database-hygiene", title: "Database Hygiene" },
		{ link: "services/data-management-solutions/email-append", title: "Email Append" },
		{ link: "services/data-management-solutions/technology-user-list", title: "Technology User List" },
		{ link: "services/intent-marketing/bant", title: "BANT" },
		{ link: "services/intent-marketing/email-marketing", title: "Email Marketing" },
		{ link: "services/intent-marketing/hql", title: "HQL" },
		{ link: "services/intent-marketing/mql", title: "MQL" },
		{ link: "services/intent-marketing/sql", title: "SQL" },
	]

	constructor(private breakpointObserver: BreakpointObserver) {
		this.dataSource.data = DROPDOWN_DATA;
	}

	hasChild = (_: number, node: AnosalesFlatNode) => node.expandable;
	

	onClick() {
		window.scroll(0, 0)
	}

	ngOnInit(): void {
		this.isSmallXSmall = this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small
		])
			.pipe(
				map(res => res.matches)
			)
	}
}
