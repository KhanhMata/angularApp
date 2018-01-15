import { Component, OnInit } from '@angular/core';
import { League } from '../league';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: League[];
  selectedLeague: League;

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getLeague();
  }

  onSelect(league: League): void {
    this.selectedLeague = league;
  }

  hideLeague(): void {
    this.selectedLeague = null;
  }

  getLeague(): void {
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues);
  }
}
