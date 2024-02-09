import { Component } from '@angular/core';
import { TechnologyUserListService } from './technology-user-list.service';

@Component({
  selector: 'app-technology-user-list',
  templateUrl: './technology-user-list.component.html',
  styleUrls: ['./technology-user-list.component.scss']
})
export class TechnologyUserListComponent {

  technologyUserListData!: any[];

  constructor(private technologyUserListService: TechnologyUserListService) {
    this.technologyUserListData = this.technologyUserListService.getTechnologyUserListData();
  }
}
