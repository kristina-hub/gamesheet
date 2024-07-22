import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TeamService} from "../team.service";
import {Team} from "../team.interface";

@Component({
  selector: 'app-show-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-team.component.html',
  styleUrl: './show-team.component.css'
})
export class ShowTeamComponent implements OnInit{
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.showTeams();
  }

  showTeams() {
    console.log('Here');
    this.teamService.getTeams()
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.teams = data;
        } else {
          this.teams = [data];
        }
      });
  }
}
