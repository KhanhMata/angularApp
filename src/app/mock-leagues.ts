import { League } from './league';
import { EPL_TEAMS } from './mock-teams';

export const LEAGUES: League[] = [
  {id: 1, name: 'Premier League', description: 'The top level of the English football league system.', league_teams: EPL_TEAMS},
  {id: 2, name: 'La Liga', description: 'The Spanish Primera Liga.', league_teams: EPL_TEAMS},
  {id: 3, name: 'Bundesliga', description: 'A professional association football league in Germany. ', league_teams: EPL_TEAMS},
  {id: 4, name: 'Serie A', description: 'The top of the Italian football league system.', league_teams: EPL_TEAMS},
  {id: 5, name: 'Ligue 1', description: 'The top division of the professional football league in France.', league_teams: EPL_TEAMS}
];
