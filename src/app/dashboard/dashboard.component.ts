import { Component, OnInit } from '@angular/core';

import { League } from '../league';
import { LeagueService } from '../leagues/league.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  leagues: League[] = [];
  selectedLeague: League;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getLeagues();
  }

  onSelect(league: League): void {
    this.selectedLeague = league;
  }

  getLeagues(): void {
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues.slice(0, 5));
  }
}
