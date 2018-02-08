import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Team } from '../../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-in-league',
  templateUrl: './teams-in-league.component.html',
  styleUrls: ['./teams-in-league.component.css'],
  animations: [
    trigger('flyInOut', [
      // transition(':enter', [
      //   animate(300, keyframes([
      //     style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
      //     style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
      //     style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      //   ]))
      // ]),

      transition(':leave', [
        animate(150, keyframes([
          style({ opacity: 1, transform: 'translateX(-10px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class TeamsInLeagueComponent implements OnInit {

  @Input() leagueId: number;
  team = new Team('', '');
  teams: Team[];
  isAddTeamMode = false;
  isEditMode = false;
  currentTeamAbbr: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getLeagueTeams(this.leagueId).subscribe(teams => this.teams = teams);
  }

  changeAddTeamMode() {
    this.isAddTeamMode = !this.isAddTeamMode;
  }

  changeEditMode(abbr: string) {
    this.getTeams();
    this.isEditMode = abbr ? true : false;
    this.currentTeamAbbr = this.isEditMode ? abbr : '';
  }

  onCreate() {
    this.fillTeamDefaultValue(this.team);
    this.teamService.addTeam(this.team).subscribe();
    this.teams.push(this.team);
    this.team = new Team('', '');
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

  private fillTeamDefaultValue(team: Team) {
    team.leagueId = this.leagueId;
    this.teamService.fillDefaultValue(team);
  }

  private updateDerivedData(team: Team) {
    this.teamService.updateDerivedData(team);
  }
}
