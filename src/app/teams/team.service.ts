import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Team } from '../team';

@Injectable()
export class TeamService {

  private teamsUrl = 'api/teams';

  constructor(private http: HttpClient) { }

  getTeam(abbr: string): Observable<Team> {
    const url = `${this.teamsUrl}/?abbreviation=${abbr}`;

    return this.http.get<Team>(url)
      .pipe(
        catchError(this.handleError<Team>('getTeam'))
      );
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
      .pipe(
        catchError(this.handleError('getTeams', []))
      );
  }

  getLeagueTeams(leagueId: number): Observable<Team[]> {
    const url = `${this.teamsUrl}/?leagueId=${leagueId}`;

    return this.http.get<Team[]>(url)
      .pipe(
        catchError(this.handleError('getLeagueTeams', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
