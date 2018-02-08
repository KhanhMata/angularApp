import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { Team } from '../../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-on-dashboard',
  templateUrl: './teams-on-dashboard.component.html',
  styleUrls: ['./teams-on-dashboard.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),

      transition(':leave', [
        animate(150, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class TeamsOnDashboardComponent {

  @Input() leagueId: number;
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnChanges() {
    this.teams = [];
    this.getTeamsOnDashboard(this.leagueId);
  }

  getTeamsOnDashboard(leagueId: number): void {
    this.teamService.getLeagueTeams(leagueId).subscribe(teams => this.teams = teams.slice(0, 5));
  }
}
