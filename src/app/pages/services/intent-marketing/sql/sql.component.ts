import { Component } from '@angular/core';
import { SqlService } from './sql.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})
export class SqlComponent {

  sqlData!: any[];

  constructor(private sqlService: SqlService) {
    this.sqlData = this.sqlService.getSqlData();
  }
}
