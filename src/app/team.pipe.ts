import { Pipe, PipeTransform } from '@angular/core';

import { Team } from './team';

@Pipe({
  name: 'sortByPoints'
})
export class TeamPipe implements PipeTransform {

  transform(array: Team[]): Team[] {
    array.sort((a: Team, b: Team) => {
      if (a.points < b.points) {
        return 1;
      } else if (a.points > b.points) {
        return -1;
      } else {
        if (a.goalDifference < b.goalDifference) {
          return 1;
        } else if (a.goalDifference > b.goalDifference) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    return array;
  }

}
