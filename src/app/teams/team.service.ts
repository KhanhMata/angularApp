import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Team } from '../team';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  updateTeam(team: Team): Observable<any> {
    const url = `${this.teamsUrl}/?abbreviation=${team.abbreviation}`;

    return this.http.put(url, team, httpOptions)
      .pipe(
        catchError(this.handleError('updateTeam'))
      );
  }

  updateDerivedData(team: Team): void {
    team.matches = team.won*1 + team.drawn*1 + team.lost*1;
    team.goalDifference = team.goalsFor*1 - team.goalsAgainst*1;
    team.points = team.won*3 + team.drawn*1;
  }

  deleteTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;

    return this.http.delete<Team>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Team>('deleteTeam'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
