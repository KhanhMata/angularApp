import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LeagueService } from '../leagues/league.service';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TeamsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [LeagueService]
})
export class DashboardModule { }
