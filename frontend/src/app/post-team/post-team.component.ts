import { Component } from '@angular/core';
import {ShowTeamComponent} from "../show-team/show-team.component";
import {CommonModule} from "@angular/common";
import {TeamService} from "../team.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-post-team',
  standalone: true,
  imports: [CommonModule, ShowTeamComponent, FormsModule],
  templateUrl: './post-team.component.html',
  styleUrl: './post-team.component.css'
})
export class PostTeamComponent {
  msg!: string;
  teamContent!: string;
  constructor(private teamService: TeamService) { }

  postTeam() {
    this.msg = "Posting team: " + this.teamContent;
    this.teamService.postTeam(this.teamContent)
      .subscribe({
        next: (response) => {
          this.msg = "Team posted successfully: " + response;
        },
        error: (error) => {
          this.msg = "Error posting the team: " + error;
        }
      });
    return this.msg;
  }
}
