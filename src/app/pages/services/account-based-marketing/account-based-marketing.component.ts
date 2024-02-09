import { Component } from '@angular/core';
import { AccountBasedMarketingService } from './account-based-marketing.service';

@Component({
  selector: 'app-account-based-marketing',
  templateUrl: './account-based-marketing.component.html',
  styleUrls: ['./account-based-marketing.component.scss']
})
export class AccountBasedMarketingComponent {

  accountBasedMarketingData!: any[];

  constructor(private accountBasedMarketingService: AccountBasedMarketingService) {
    this.accountBasedMarketingData = this.accountBasedMarketingService.getAccountBasedMarketingData();
  }

}
