import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { League } from './league';
import { LEAGUES } from './mock-leagues';

@Injectable()
export class LeagueService {

  constructor() { }

  getLeagues(): Observable<League[]> {
    return of(LEAGUES);
  }

}
