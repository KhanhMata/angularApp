import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Team } from '../../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const abbr = this.route.snapshot.paramMap.get('abbr');
    this.teamService.getTeam(abbr).subscribe(team => this.team = team[0]);
  }

  goBack() {
    this.location.back();
  }
}
