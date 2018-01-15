import { Injectable } from '@angular/core';
import { League } from './league';
import { LEAGUES } from './mock-leagues';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LeagueService {

  constructor() { }

  getLeagues(): Observable<League[]> {
    return of(LEAGUES);
  }

}
