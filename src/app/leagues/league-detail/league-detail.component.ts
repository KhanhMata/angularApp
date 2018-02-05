import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { League } from '../../league';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  league: League;

  constructor(
    private leagueService: LeagueService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getLeague();
  }

  getLeague() {
    const leagueId = +this.route.snapshot.paramMap.get('id');
    this.leagueService.getLeague(leagueId).subscribe(league => this.league = league);
  }

  goBack() {
    this.location.back();
  }
}
