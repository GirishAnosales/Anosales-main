import { Component } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {
	r3 = [
		{
			location: "Anosales Headquarters, USA",
			address: "1 Radisson Plaza, Suite 800, New Rochelle, New York 10801",
			contact: "+1 (845) 915 - 4660",
			email: "sales@anosales.net",
		},
		{
			location: "Anosales Headquarters, United Kingdom",
			address: "N/A",
			contact: "+44 (0)20 8123 5007",
			email: "sales@anosales.net",
		},
		{
			location: "Anosales Headquarters, India",
			address: "128, Shitole Nagar, Near Narsinh High School, Old Sangvi, Pune. Zip Code- 411027, Maharashtra, India.",
			contact: "+91 9175720424",
			email: "sales@anosales.net",
		},
	]

	constructor() { }

}
