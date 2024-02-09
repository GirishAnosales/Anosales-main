import { Component } from '@angular/core';
import { AccountProfilingService } from './account-profiling.service';

@Component({
  selector: 'app-account-profiling',
  templateUrl: './account-profiling.component.html',
  styleUrls: ['./account-profiling.component.scss']
})
export class AccountProfilingComponent {

  accountProfilingData!: any[];

  constructor(private accountProfilingService: AccountProfilingService) {
    this.accountProfilingData = this.accountProfilingService.getAccountProfilingData();
  }
}
