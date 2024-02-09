import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSigninFormComponent } from './employees-signin-form.component';

describe('EmployeesSigninFormComponent', () => {
  let component: EmployeesSigninFormComponent;
  let fixture: ComponentFixture<EmployeesSigninFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesSigninFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesSigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
