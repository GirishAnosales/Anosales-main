import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CareersFormComponent } from 'src/app/components/forms/careers-form/careers-form.component';
import { EmployeesSigninFormComponent } from 'src/app/components/forms/employees-signin-form/employees-signin-form.component';

@Component({
	selector: 'app-careers',
	templateUrl: './careers.component.html',
	styleUrls: ['./careers.component.scss']
})
export class CareersComponent {

	careers_content = [
		{ title: "Dynamic and Innovative Work Environment", content: "Anosales cultivates a dynamic and innovative atmosphere, fueling creativity, collaboration, and continuous learning. We encourage employees to think outside the box and contribute their unique ideas, fostering an environment that thrives on innovation." },
		{ title: "Growth and Development Opportunities", content: "We prioritize employee growth and development, offering diverse training programs, mentorship initiatives, and career advancement prospects. We empower individuals to enhance skills, expand knowledge, and progress within Anosales." },
		{ title: "Competitive Compensation and Benefits", content: "Anosales values employee contributions with competitive compensation packages. We provide comprehensive benefits, including healthcare coverage, retirement plans, paid time off, and perks, prioritizing overall well-being." },
		{ title: "Strong Team Culture and Support", content: "Anosales embraces a strong team culture grounded in trust, respect, and support. We foster a collaborative and inclusive environment where individuals thrive, leveraging strengths and working together toward shared goals. " },
		{ title: "Meaningful Impact", content: "Join Anosales to make a meaningful impact. We work on projects that create positive change, allowing employees to contribute to something larger than themselves and leave a lasting imprint in their respective industries." },
		{ title: "Work-Life Balance", content: "Anosales values work-life balance, offering flexible scheduling options and supportive policies. We strive to ensure employees can maintain a healthy equilibrium between personal and professional lives, fostering overall well-being and satisfaction." },
	]

	constructor(private dialog: MatDialog) { }

	openCareersForm() {
		this.dialog.open(CareersFormComponent)
	}

	openEmployeesSigninForm() {
		this.dialog.open(EmployeesSigninFormComponent)
	}
}
