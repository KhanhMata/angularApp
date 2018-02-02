import { Team } from './team';

export class League {
  id: number;
  name: string;
  description: string;
  leagueTeams?: Team[];
}
