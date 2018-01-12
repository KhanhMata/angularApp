import { Component, OnInit } from '@angular/core';
import { LEAGUES } from '../mock-leagues';
import { League } from '../league';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues = LEAGUES;
  selectedLeague: League;

  constructor() { }

  ngOnInit() {
  }

  onSelect(league: League): void {
    this.selectedLeague = league;
  }

  hideLeague(): void {
  }
}
