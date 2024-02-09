import { Component } from '@angular/core';
import { BantService } from './bant.service';

@Component({
  selector: 'app-bant',
  templateUrl: './bant.component.html',
  styleUrls: ['./bant.component.scss']
})
export class BantComponent {

  bantData!: any[];

  constructor(private bantService: BantService) {
    this.bantData = this.bantService.getBantData();
  }
}
