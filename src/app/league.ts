import { Team } from './team';

export class League {
  id: number;
  name: string;
  description: string;
  league_teams: Team[];
}
