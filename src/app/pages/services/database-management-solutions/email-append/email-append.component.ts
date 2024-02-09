import { Component } from '@angular/core';
import { EmailAppendService } from './email-append.service';

@Component({
  selector: 'app-email-append',
  templateUrl: './email-append.component.html',
  styleUrls: ['./email-append.component.scss']
})
export class EmailAppendComponent {

  emailAppendData!: any[];

  constructor(private emailAppendService: EmailAppendService) {
    this.emailAppendData = this.emailAppendService.getEmailAppendData();
  }
}
