import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Skills {
  skills: string;
}

@Component({
  selector: 'app-careers-form',
  templateUrl: './careers-form.component.html',
  styleUrls: ['./careers-form.component.scss']
})
export class CareersFormComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: Skills[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add Skill
    if (value) {
      this.skills.push({ skills: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(skills: Skills): void {
    const index = this.skills.indexOf(skills);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  edit(skills: Skills, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove skill if it no longer has a name
    if (!value) {
      this.remove(skills);
      return;
    }

    // Edit existing skill
    const index = this.skills.indexOf(skills);
    if (index >= 0) {
      this.skills[index].skills = value;
    }
  }
}
