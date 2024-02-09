import { Component } from '@angular/core';
import { AppointmentGenerationService } from './appointment-generation.service';

@Component({
  selector: 'app-appointment-generation',
  templateUrl: './appointment-generation.component.html',
  styleUrls: ['./appointment-generation.component.scss']
})
export class AppointmentGenerationComponent {

  appointmentgenerationData!: any[];

  constructor(private appointmentGenerationService: AppointmentGenerationService) {
    this.appointmentgenerationData = this.appointmentGenerationService.getAppointmentGenerationData();
  }
}
