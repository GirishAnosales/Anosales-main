import { Component } from '@angular/core';
import { EmailMarketingService } from './email-marketing.service';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.scss']
})
export class EmailMarketingComponent {

  emailMarketingData!: any[];

  constructor(private emailMarketingService: EmailMarketingService) {
    this.emailMarketingData = this.emailMarketingService.getEmailMarketingData();
  }
}
