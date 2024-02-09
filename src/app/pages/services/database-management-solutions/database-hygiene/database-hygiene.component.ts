import { Component } from '@angular/core';
import { DatabaseHygieneService } from './database-hygiene.service';

@Component({
  selector: 'app-database-hygiene',
  templateUrl: './database-hygiene.component.html',
  styleUrls: ['./database-hygiene.component.scss']
})
export class DatabaseHygieneComponent {

  databaseHygieneData!: any[];

  constructor(private databaseHygieneService: DatabaseHygieneService) {
    this.databaseHygieneData = this.databaseHygieneService.getDatabaseHygieneData();
  }
}
