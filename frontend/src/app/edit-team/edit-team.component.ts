import {Component, Input} from '@angular/core';
import {Team} from "../team.interface";
import {TeamService} from "../team.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-team',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './edit-team.component.html',
  styleUrl: './edit-team.component.css'
})

export class EditTeamComponent {
  @Input() teamId!: number;
  updatedTeam: Team = { id: 0, content: '' };
  msg: string = '';

  constructor(private teamService: TeamService) { }

  editTeam() {
    this.teamService.editTeam(this.teamId, this.updatedTeam)
      .subscribe({
        next: (response) => {
          this.msg = "Team edited successfully: " + response;
        },
        error: (error) => {
          this.msg = "Error editing the team: " + error;
        }
      });
  }
}
