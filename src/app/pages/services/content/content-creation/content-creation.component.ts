import { Component } from '@angular/core';
import { ContentCreationService } from './content-creation.service';

@Component({
  selector: 'app-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.scss']
})
export class ContentCreationComponent {

  contentCreationData!: any[];

  constructor(private contentCreationService: ContentCreationService) {
    this.contentCreationData = this.contentCreationService.getContentCreationData();
  }
}
