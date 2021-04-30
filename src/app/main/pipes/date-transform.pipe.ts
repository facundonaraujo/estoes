import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'DateTransform'
  })
export class DateTransformPipe implements PipeTransform {

  transform(date: Date,): any {
    let newdate = new Date(date).toLocaleDateString()+ ' '+ new Date(date).toLocaleTimeString()
    return newdate;
  }
}

