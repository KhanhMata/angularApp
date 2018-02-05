import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamPipe } from '../team.pipe';
import { TeamService } from './team.service';
import { TeamsComponent } from './teams.component';
import { TeamsOnDashboardComponent } from './teams-on-dashboard/teams-on-dashboard.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  declarations: [
    TeamDetailComponent,
    TeamsComponent,
    TeamsOnDashboardComponent,
    TeamPipe
  ],
  providers: [TeamService],
  exports: [
    TeamDetailComponent,
    TeamsComponent,
    TeamsOnDashboardComponent
  ]
})
export class TeamsModule { }
