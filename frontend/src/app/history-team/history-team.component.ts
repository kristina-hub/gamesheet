import {Component} from '@angular/core';
import {Team} from "../team.interface";
import {TeamService} from "../team.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-history-team',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: 'history-team.component.html',
  styleUrl: './history-team.component.css'
})
export class HistoryTeamComponent{
  selectedTeamId: number | null = null; // Initialize with null or any default value
  teamHistory: Team[] = [];
  errorMsg: string = '';

  constructor(private teamService: TeamService) { }

  fetchTeamHistory() {
    if (this.selectedTeamId !== null) {
      this.teamService.getTeamHistory(this.selectedTeamId)
        .subscribe({
          next: (response) => {
            this.teamHistory = response;
            this.errorMsg = '';
          },
          error: (error) => {
            console.error('Error fetching team history:', error);
            this.errorMsg = 'Error fetching team history.';
            this.teamHistory = [];
          }
        });
    } else {
      console.error('No team ID selected');
      this.errorMsg = 'Please select a team ID.';
      this.teamHistory = [];
    }
  }
}
