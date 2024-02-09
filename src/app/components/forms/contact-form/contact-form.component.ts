import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
	@Input()
	initialState: BehaviorSubject<User> = new BehaviorSubject({} as User);

	@Output()
	formValuesChanged = new EventEmitter<User>();

	@Output()
	formSubmitted = new EventEmitter<User>();

	form!: FormGroup

	private formSubmit_URL = 'https://formsubmit.co/ajax/sales@anosales.net'

	constructor(
		private fb: FormBuilder,
		private _snackBar: MatSnackBar,
	) { }

	get firstName() { return this.form.get('firstName')!; }
	get lastName() { return this.form.get('lastName')!; }
	get email() { return this.form.get('email')!; }
	get mobile() { return this.form.get('mobile')!; }
	get subject() { return this.form.get('subject')!; }
	get message() { return this.form.get('message')!; }

	ngOnInit() {
		this.initialState.subscribe(user => {
			this.form = this.fb.group({
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				email: ['', [Validators.required, Validators.email]],
				mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
				subject: ['', Validators.required],
				message: ['', Validators.required],
			});
		});

		this.form.valueChanges.subscribe((val) => { this.formValuesChanged.emit(val); });
	}

	//onSubmit()
	onSubmit(user: User) {
		const formData = new FormData();
		formData.append('First Name', this.form.get('firstName')!.value);
		formData.append('Last Name', this.form.get('lastName')!.value);
		formData.append('Email', this.form.get('email')!.value);
		formData.append('Mobile', this.form.get('mobile')!.value);
		formData.append('Subject', this.form.get('subject')!.value);
		formData.append('Message', this.form.get('message')!.value);

		fetch(this.formSubmit_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				this.openSuccessSnackBar();
			})
			.catch(error => {
				this.openFailureSnackBar();
			});

	}

	//Successful Snackbar addDoNotSellMyInfoUser() event
	openSuccessSnackBar() {
		const config = new MatSnackBarConfig();
		config.verticalPosition = 'bottom';
		config.horizontalPosition = 'center';
		config.panelClass = ['snackbar-padding'];
		config.duration = 3000;
		this._snackBar.open('Message sent!', 'Close', config);
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
