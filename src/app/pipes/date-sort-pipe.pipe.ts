import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSortPipe'
})
export class DateSortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => {
      let x = a['startDate'];
      let y = b['startDate'];

      if (x < y) { return -1; }
      else if (x > y) { return 1; }
      else { return 0; }
    })
  }

}
