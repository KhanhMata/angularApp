import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  @Input() team: Team;
  @Input() teams: Team[];

  constructor() { }

  ngOnInit() {
  }

}
