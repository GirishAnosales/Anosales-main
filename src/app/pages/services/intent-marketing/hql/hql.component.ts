import { Component } from '@angular/core';
import { HqlService } from './hql.service';

@Component({
  selector: 'app-hql',
  templateUrl: './hql.component.html',
  styleUrls: ['./hql.component.scss']
})
export class HqlComponent {

  hqlData!: any[];

  constructor(private hqlService: HqlService) {
    this.hqlData = this.hqlService.getHqlData();
  }
}
