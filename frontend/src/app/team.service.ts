import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from "./team.interface";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getTeams() {
    console.log('Requesting URL:', `${this.baseUrl}/team`);
    return this.http.get<Team[]>(`${this.baseUrl}/team`);
  }

  postTeam(teamContent: string) {
    return this.http.post<any>(`${this.baseUrl}/team?name=${teamContent}`, {});
  }

  editTeam(id: number, updatedTeam: Team) {
    const url = `${this.baseUrl}/team/${id}/edit`;
    return this.http.put<Team>(url, updatedTeam);
  }

  getTeamHistory(id: number) {
    const url = `${this.baseUrl}/team/${id}/history`;
    return this.http.get<Team[]>(url);
  }

  getTeamById(id: number) {
    const url = `${this.baseUrl}/team/${id}`;
    return this.http.get<Team>(url);
  }
}
