import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEvtName'
})
export class FilterEvtNamePipe implements PipeTransform {

  transform(value: any, term: any): any {
    if(term === undefined) return value;

    return value.filter((event) => {
      let nameFilter = event.name.toLowerCase().includes(term.toLowerCase())
      return nameFilter;
    })
  }

}
