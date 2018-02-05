import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { League } from '../../league';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.css']
})
export class AddLeagueComponent {

  model = new League('', '');

  constructor(
    private leagueService: LeagueService,
    private location: Location
  ) { }

  onSubmit() {
    this.leagueService.addLeague(this.model).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
