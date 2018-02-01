import { Component, OnInit } from '@angular/core';

import { League } from '../league';
import { LeagueService } from '../league.service';
import { Team } from '../team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  leagues: League[] = [];
  selectedLeague: League;
  teams: Team[];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getLeagues();
  }

  onSelect(league: League): void {
    this.selectedLeague = league;
    this.teams = league.leagueTeams.slice(0,5);
  }

  getLeagues(): void {
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues.slice(0, 5));
  }
}
