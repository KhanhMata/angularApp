import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueService } from './league.service';
import { TeamsComponent } from './teams/teams.component';
import { TeamPipe } from './team.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaguesComponent,
    TeamsComponent,
    TeamPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
