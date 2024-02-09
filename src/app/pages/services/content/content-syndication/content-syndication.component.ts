import { Component } from '@angular/core';
import { ContentSyndicationService } from './content-syndication.service';

@Component({
  selector: 'app-content-syndication',
  templateUrl: './content-syndication.component.html',
  styleUrls: ['./content-syndication.component.scss']
})
export class ContentSyndicationComponent {

  contentSyndicationData!: any[];

  constructor(private contentSyndicationService: ContentSyndicationService) {
    this.contentSyndicationData = this.contentSyndicationService.getContentSyndicationData();
  }
}
