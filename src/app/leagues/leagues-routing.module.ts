import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AddLeagueComponent } from './add-league/add-league.component';
import { LeaguesComponent } from './leagues.component';

const routes = [
  { path: '', component: LeaguesComponent },
  { path: 'add', component: AddLeagueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
