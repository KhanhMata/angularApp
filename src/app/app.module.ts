import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueService } from './leagues/league.service';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamPipe } from './team.pipe';
import { TeamService } from './teams/team.service';
import { TeamsComponent } from './teams/teams.component';
import { TeamsOnDashboardComponent } from './teams/teams-on-dashboard/teams-on-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaguesComponent,
    TeamsComponent,
    TeamPipe,
    TeamsOnDashboardComponent,
    TeamDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LeagueService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
