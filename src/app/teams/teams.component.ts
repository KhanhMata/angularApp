import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  @Input() leagueId: number;
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnChanges() {
    this.getLeagueTeams(this.leagueId);
  }

  getLeagueTeams(leagueId: number): void {
    this.teamService.getLeagueTeams(leagueId).subscribe(teams => this.teams = teams);
  }
}
