import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes = [
  { path: ':abbr', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
