import { Component } from '@angular/core';
import { MqlService } from './mql.service';

@Component({
  selector: 'app-mql',
  templateUrl: './mql.component.html',
  styleUrls: ['./mql.component.scss']
})
export class MqlComponent {

  mqlData!: any[];

  constructor(private mqlService: MqlService) {
    this.mqlData = this.mqlService.getMqlData();
  }
}
