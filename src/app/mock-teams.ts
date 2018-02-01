import { Team } from './team';

export const EPL_TEAMS: Team[] = [
  { name: 'Man City', matches: 25, won: 22, drawn: 2, lost: 1, goalsFor: 73, goalsAgainst: 18, goalDifference: 55, points: 68},
  { name: 'Man Utd', matches: 25, won: 16, drawn: 5, lost: 4, goalsFor: 49, goalsAgainst: 18, goalDifference: 31, points: 53},
  { name: 'Chelsea', matches: 25, won: 15, drawn: 5, lost: 5, goalsFor: 45, goalsAgainst: 19, goalDifference: 26, points: 50},
  { name: 'Liverpool', matches: 25, won: 14, drawn: 8, lost: 3, goalsFor: 57, goalsAgainst: 29, goalDifference: 28, points: 50},
  { name: 'Tottenham Hotspurs', matches: 25, won: 14, drawn: 6, lost: 5, goalsFor: 49, goalsAgainst: 22, goalDifference: 27, points: 48},
  { name: 'Arsenal', matches: 25, won: 12, drawn: 6, lost: 7, goalsFor: 46, goalsAgainst: 34, goalDifference: 12, points: 42},
  { name: 'Burnley', matches: 25, won: 9, drawn: 8, lost: 8, goalsFor: 20, goalsAgainst: 22, goalDifference: -2, points: 35},
  { name: 'Leicester', matches: 25, won: 9, drawn: 7, lost: 9, goalsFor: 37, goalsAgainst: 34, goalDifference: 3, points: 34},
  { name: 'Everton', matches: 25, won: 8, drawn: 7, lost: 10, goalsFor: 28, goalsAgainst: 40, goalDifference: -12, points: 31},
  { name: 'Bournemouth', matches: 25, won: 7, drawn: 7, lost: 11, goalsFor: 28, goalsAgainst: 36, goalDifference: -8, points: 28}
]

export const LALIGA_TEAMS: Team[] = [
  { name: 'Barcelona', matches: 18, points: 48 },
  { name: 'Atletico de Madrid', matches: 18, points: 39},
  { name: 'Valencia', matches: 18, points: 37},
  { name: 'Real Madrid', matches: 17, points: 32},
  { name: 'Sevilla', matches: 18, points: 29}
]

export const BUNDESLIGA_TEAMS: Team[] = [
  { name: 'Bayern', matches: 18, points: 44},
  { name: 'Schalke', matches: 17, points: 30 },
  { name: 'Dortmund', matches: 17, points: 28 },
  { name: 'Leverkusen', matches: 18, points: 28 },
  { name: 'Leipzig', matches: 17, points: 28 }
]

export const SERIEA_TEAMS: Team[] = [
  { name: 'Napoli', matches: 20, points: 51 },
  { name: 'Juventus', matches: 20, points: 50 },
  { name: 'Inter', matches: 20, points: 42 },
  { name: 'Lazio', matches: 19, points: 40 },
  { name: 'Roma', matches: 19, points: 39}
]

export const LIGUE1_TEAMS: Team[] = [
  { name: 'PSG', matches: 19, points: 50 },
  { name: 'Monaco', matches: 19, points: 41 },
  { name: 'Lyon', matches: 19, points: 38 },
  { name: 'Marseille', matches: 19, points: 38 },
  { name: 'Nantes', matches: 19, points: 33 }
]
