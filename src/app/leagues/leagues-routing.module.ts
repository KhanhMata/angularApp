import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LeaguesComponent } from './leagues.component';

const routes = [
  { path: '', component: LeaguesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguesRoutingModule { }
