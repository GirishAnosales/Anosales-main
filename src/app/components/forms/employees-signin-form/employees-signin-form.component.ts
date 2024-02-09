import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-signin-form',
  templateUrl: './employees-signin-form.component.html',
  styleUrls: ['./employees-signin-form.component.scss']
})
export class EmployeesSigninFormComponent {
  employeesSigninForm!: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.employeesSigninForm = this.fb.group({
      email: ['', [Validators.required, Validators.required]],
      password: ['', Validators.required],
    });
  }
}
