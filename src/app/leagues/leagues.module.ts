import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { LeaguesComponent } from './leagues.component';
import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeagueService } from './league.service';
import { TeamsModule } from '../teams/teams.module';
import { AddLeagueComponent } from './add-league/add-league.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LeaguesRoutingModule,
    TeamsModule
  ],
  declarations: [
    AddLeagueComponent,
    LeagueDetailComponent,
    LeaguesComponent
  ],
  providers: [
    LeagueService
  ]
})
export class LeaguesModule { }
