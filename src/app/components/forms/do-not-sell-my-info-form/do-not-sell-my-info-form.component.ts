import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { DoNotSellMyInfoUser } from 'src/app/interfaces/user';
import { DoNotSellMyInfoUserService } from 'src/app/services/do-not-sell-my-info-user/do-not-sell-my-info-user.service';

@Component({
	selector: 'app-do-not-sell-my-info-form',
	templateUrl: './do-not-sell-my-info-form.component.html',
	styleUrls: ['./do-not-sell-my-info-form.component.scss']
})
export class DoNotSellMyInfoFormComponent {
	@Input()
	initialState: BehaviorSubject<DoNotSellMyInfoUser> = new BehaviorSubject({} as DoNotSellMyInfoUser);

	@Output()
	formValuesChanged = new EventEmitter<DoNotSellMyInfoUser>();

	@Output()
	formSubmitted = new EventEmitter<DoNotSellMyInfoUser>();

	doNotSellMyInfoForm!: FormGroup

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
		private doNotSellMyInfoUserService: DoNotSellMyInfoUserService,
	) { }

	countries: string[] = [
		"Afghanistan",
		"Albania",
		"Algeria",
		"American Samoa",
		"Andorra",
		"Angola",
		"Anguilla",
		"Antarctica",
		"Antigua and Barbuda",
		"Argentina",
		"Armenia",
		"Aruba",
		"Australia",
		"Austria",
		"Azerbaijan",
		"Bahamas (the)",
		"Bahrain",
		"Bangladesh",
		"Barbados",
		"Belarus",
		"Belgium",
		"Belize",
		"Benin",
		"Bermuda",
		"Bhutan",
		"Bolivia (Plurinational State of)",
		"Bonaire, Sint Eustatius and Saba",
		"Bosnia and Herzegovina",
		"Botswana",
		"Bouvet Island",
		"Brazil",
		"British Indian Ocean Territory (the)",
		"Brunei Darussalam",
		"Bulgaria",
		"Burkina Faso",
		"Burundi",
		"Cabo Verde",
		"Cambodia",
		"Cameroon",
		"Canada",
		"Cayman Islands (the)",
		"Central African Republic (the)",
		"Chad",
		"Chile",
		"China",
		"Christmas Island",
		"Cocos (Keeling) Islands (the)",
		"Colombia",
		"Comoros (the)",
		"Congo (the Democratic Republic of the)",
		"Congo (the)",
		"Cook Islands (the)",
		"Costa Rica",
		"Croatia",
		"Cuba",
		"Curaçao",
		"Cyprus",
		"Czechia",
		"Côte d'Ivoire",
		"Denmark",
		"Djibouti",
		"Dominica",
		"Dominican Republic (the)",
		"Ecuador",
		"Egypt",
		"El Salvador",
		"Equatorial Guinea",
		"Eritrea",
		"Estonia",
		"Eswatini",
		"Ethiopia",
		"Falkland Islands (the) [Malvinas]",
		"Faroe Islands (the)",
		"Fiji",
		"Finland",
		"France",
		"French Guiana",
		"French Polynesia",
		"French Southern Territories (the)",
		"Gabon",
		"Gambia (the)",
		"Georgia",
		"Germany",
		"Ghana",
		"Gibraltar",
		"Greece",
		"Greenland",
		"Grenada",
		"Guadeloupe",
		"Guam",
		"Guatemala",
		"Guernsey",
		"Guinea",
		"Guinea-Bissau",
		"Guyana",
		"Haiti",
		"Heard Island and McDonald Islands",
		"Holy See (the)",
		"Honduras",
		"Hong Kong",
		"Hungary",
		"Iceland",
		"India",
		"Indonesia",
		"Iran (Islamic Republic of)",
		"Iraq",
		"Ireland",
		"Isle of Man",
		"Israel",
		"Italy",
		"Jamaica",
		"Japan",
		"Jersey",
		"Jordan",
		"Kazakhstan",
		"Kenya",
		"Kiribati",
		"Korea (the Democratic People's Republic of)",
		"Korea (the Republic of)",
		"Kuwait",
		"Kyrgyzstan",
		"Lao People's Democratic Republic (the)",
		"Latvia",
		"Lebanon",
		"Lesotho",
		"Liberia",
		"Libya",
		"Liechtenstein",
		"Lithuania",
		"Luxembourg",
		"Macao",
		"Madagascar",
		"Malawi",
		"Malaysia",
		"Maldives",
		"Mali",
		"Malta",
		"Marshall Islands (the)",
		"Martinique",
		"Mauritania",
		"Mauritius",
		"Mayotte",
		"Mexico",
		"Micronesia (Federated States of)",
		"Moldova (the Republic of)",
		"Monaco",
		"Mongolia",
		"Montenegro",
		"Montserrat",
		"Morocco",
		"Mozambique",
		"Myanmar",
		"Namibia",
		"Nauru",
		"Nepal",
		"Netherlands (the)",
		"New Caledonia",
		"New Zealand",
		"Nicaragua",
		"Niger (the)",
		"Nigeria",
		"Niue",
		"Norfolk Island",
		"Northern Mariana Islands (the)",
		"Norway",
		"Oman",
		"Pakistan",
		"Palau",
		"Palestine, State of",
		"Panama",
		"Papua New Guinea",
		"Paraguay",
		"Peru",
		"Philippines (the)",
		"Pitcairn",
		"Poland",
		"Portugal",
		"Puerto Rico",
		"Qatar",
		"Republic of North Macedonia",
		"Romania",
		"Russian Federation (the)",
		"Rwanda",
		"Réunion",
		"Saint Barthélemy",
		"Saint Helena, Ascension and Tristan da Cunha",
		"Saint Kitts and Nevis",
		"Saint Lucia",
		"Saint Martin (French part)",
		"Saint Pierre and Miquelon",
		"Saint Vincent and the Grenadines",
		"Samoa",
		"San Marino",
		"Sao Tome and Principe",
		"Saudi Arabia",
		"Senegal",
		"Serbia",
		"Seychelles",
		"Sierra Leone",
		"Singapore",
		"Sint Maarten (Dutch part)",
		"Slovakia",
		"Slovenia",
		"Solomon Islands",
		"Somalia",
		"South Africa",
		"South Georgia and the South Sandwich Islands",
		"South Sudan",
		"Spain",
		"Sri Lanka",
		"Sudan (the)",
		"Suriname",
		"Svalbard and Jan Mayen",
		"Sweden",
		"Switzerland",
		"Syrian Arab Republic",
		"Taiwan",
		"Tajikistan",
		"Tanzania, United Republic of",
		"Thailand",
		"Timor-Leste",
		"Togo",
		"Tokelau",
		"Tonga",
		"Trinidad and Tobago",
		"Tunisia",
		"Turkey",
		"Turkmenistan",
		"Turks and Caicos Islands (the)",
		"Tuvalu",
		"Uganda",
		"Ukraine",
		"United Arab Emirates (the)",
		"United Kingdom of Great Britain and Northern Ireland (the)",
		"United States Minor Outlying Islands (the)",
		"United States of America (the)",
		"Uruguay",
		"Uzbekistan",
		"Vanuatu",
		"Venezuela (Bolivarian Republic of)",
		"Viet Nam",
		"Virgin Islands (British)",
		"Virgin Islands (U.S.)",
		"Wallis and Futuna",
		"Western Sahara",
		"Yemen",
		"Zambia",
		"Zimbabwe",
		"Åland Islands"
	];

	get firstName() { return this.doNotSellMyInfoForm.get('firstName')!; }
	get lastName() { return this.doNotSellMyInfoForm.get('lastName')!; }
	get company() { return this.doNotSellMyInfoForm.get('company')!; }
	get email() { return this.doNotSellMyInfoForm.get('email')!; }
	get job() { return this.doNotSellMyInfoForm.get('job')!; }
	get country() { return this.doNotSellMyInfoForm.get('country')!; }

	ngOnInit() {
		this.initialState.subscribe(user => {
			this.doNotSellMyInfoForm = this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				company: ['', Validators.required],
				email: ['', [Validators.required, Validators.email]],
				job: ['', Validators.required],
				countries: ['', Validators.required],
			});
		});

		this.doNotSellMyInfoForm.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
	}

	//onSubmit()
	onSubmit(doNotSellMyInfoUser: DoNotSellMyInfoUser) {
		this.addDoNotSellMyInfoUser(doNotSellMyInfoUser);
	}

	// addDoNotSellMyInfoUser() to send data to database onSubmit() event
	addDoNotSellMyInfoUser(doNotSellMyInfoUser: DoNotSellMyInfoUser) {
		this.doNotSellMyInfoUserService.createUser(doNotSellMyInfoUser)
			.subscribe({
				next: (createdUser) => {
					// console.log(createdUser);
					this.openSuccessSnackBar()
				},
				error: (error) => {
					// console.error(error);
					this.openFailureSnackBar()
				}
			});
	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Request sent successfully!', 'Close', config);
	}

	//Failure Snackbar addDoNotSellMyInfoUser() event
	openFailureSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message not sent!', 'Close', config);
	}
}
