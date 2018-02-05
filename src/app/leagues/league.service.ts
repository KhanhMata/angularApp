import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { League } from '../league';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LeagueService {

  private leaguesUrl = 'api/leagues';

  constructor(private http: HttpClient) { }

  getLeague(id: number): Observable<League> {
    return this.http.get<League>(`${this.leaguesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<League>('getLeague'))
      );
  }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.leaguesUrl)
      .pipe(
        catchError(this.handleError('getLeagues', []))
      );
  }

  addLeague(league: League): Observable<League> {
    return this.http.post<League>(this.leaguesUrl, league, httpOptions)
      .pipe(
        catchError(this.handleError<League>('addLeague'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
