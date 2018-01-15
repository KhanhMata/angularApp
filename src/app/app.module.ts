import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { LeagueService } from './league.service';


@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
