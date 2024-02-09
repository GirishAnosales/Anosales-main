import { Component } from '@angular/core';
import { CustomDataBuildOutService } from './custom-data-build-out.service';

@Component({
  selector: 'app-custom-data-build-out',
  templateUrl: './custom-data-build-out.component.html',
  styleUrls: ['./custom-data-build-out.component.scss']
})
export class CustomDataBuildOutComponent {

  customDataBuildOutData!: any[];

  constructor(private customDataBuildOutService: CustomDataBuildOutService) {
    this.customDataBuildOutData = this.customDataBuildOutService.getCustomDataBuildOutData();
  }
}
