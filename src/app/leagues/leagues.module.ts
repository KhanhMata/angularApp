import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesComponent } from './leagues.component';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeagueService } from './league.service';
import { TeamsModule } from '../teams/teams.module';

@NgModule({
  imports: [
    CommonModule,
    LeaguesRoutingModule,
    TeamsModule
  ],
  declarations: [
    LeaguesComponent
  ],
  providers: [
    LeagueService
  ]
})
export class LeaguesModule { }
