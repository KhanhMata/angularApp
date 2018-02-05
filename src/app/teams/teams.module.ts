import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamPipe } from '../team.pipe';
import { TeamService } from './team.service';
import { TeamsComponent } from './teams.component';
import { TeamsInLeagueComponent } from './teams-in-league/teams-in-league.component';
import { TeamsOnDashboardComponent } from './teams-on-dashboard/teams-on-dashboard.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TeamsRoutingModule
  ],
  declarations: [
    TeamDetailComponent,
    TeamPipe,
    TeamsInLeagueComponent,
    TeamsComponent,
    TeamsOnDashboardComponent
  ],
  providers: [TeamService],
  exports: [
    TeamDetailComponent,
    TeamsComponent,
    TeamsInLeagueComponent,
    TeamsOnDashboardComponent
  ]
})
export class TeamsModule { }
