import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-in-league',
  templateUrl: './teams-in-league.component.html',
  styleUrls: ['./teams-in-league.component.css']
})
export class TeamsInLeagueComponent implements OnInit {

  @Input() leagueId: number;
  teams: Team[];
  isEditMode = false;
  currentTeamAbbr: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getLeagueTeams(this.leagueId).subscribe(teams => this.teams = teams);
  }

  changeEditMode(abbr: string) {
    this.getTeams();
    this.isEditMode = abbr ? true : false;
    this.currentTeamAbbr = this.isEditMode ? abbr : '';
  }

  onSave(team: Team) {
    this.isEditMode = false;
    this.currentTeamAbbr = '';
    this.updateDerivedData(team);
    this.teamService.updateTeam(team).subscribe(() => this.getTeams());
  }

  onDelete(id: number) {
    this.teams = this.teams.filter(team => team.id !== id);
    this.teamService.deleteTeam(id).subscribe();
  }

  private updateDerivedData(team: Team) {
    this.teamService.updateDerivedData(team);
  }
}
