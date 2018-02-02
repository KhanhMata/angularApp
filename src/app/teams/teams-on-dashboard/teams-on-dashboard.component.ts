import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-on-dashboard',
  templateUrl: './teams-on-dashboard.component.html',
  styleUrls: ['./teams-on-dashboard.component.css']
})
export class TeamsOnDashboardComponent {

  @Input() leagueId: number;
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnChanges() {
    this.getTeamsOnDashboard(this.leagueId);
  }

  getTeamsOnDashboard(leagueId: number): void {
    this.teamService.getLeagueTeams(leagueId).subscribe(teams => this.teams = teams.slice(0, 5));
  }
}
