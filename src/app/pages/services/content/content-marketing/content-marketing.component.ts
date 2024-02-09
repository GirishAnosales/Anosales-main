import { Component } from '@angular/core';
import { ContentMarketingService } from './content-marketing.service';

@Component({
  selector: 'app-content-marketing',
  templateUrl: './content-marketing.component.html',
  styleUrls: ['./content-marketing.component.scss']
})
export class ContentMarketingComponent {

  contentMarketingData!: any[];

  constructor(private contentMarketingService: ContentMarketingService) {
    this.contentMarketingData = this.contentMarketingService.getContentMarketingData();
  }
}
