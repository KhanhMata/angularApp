import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

import { League } from '../league';
import { LeagueService } from '../leagues/league.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('flyIn', [
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translate(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translate(15px)', offset: 0.3}),
          style({ opacity: 1, transform: 'translate(0)', offset: 1.0 })
        ]))
      ])
    ]),

    trigger('selectedLeague', [
      state('true', style({
        transform: 'scale(0.9)'
      })),

      transition('false => true', [
        style({
          transform: 'scale(0.7)'
        }),

        animate('80ms ease-in', style({
          transform: 'scale(1)'
        }))
      ])
    ])
  ]
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
