import { Component } from '@angular/core';
import {Team} from "../team.interface";
import {TeamService} from "../team.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-select-team',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './select-team.component.html',
  styleUrl: './select-team.component.css'
})
export class SelectTeamComponent {
  selectedTeamId!: number;
  selectedTeam!: Team;
  errorMsg: string = '';

  constructor(private teamService: TeamService) { }

  getTeamById() {
    this.teamService.getTeamById(this.selectedTeamId)
      .subscribe({
        next: (response) => {
          this.selectedTeam = response;
          this.errorMsg = '';
        },
        error: (error) => {
          console.error('Error fetching team by ID:', error);
          this.errorMsg = 'Error fetching team by ID.';
          this.selectedTeam = error;
        }
      });
  }
}
