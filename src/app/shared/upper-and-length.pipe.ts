import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperAndLength'
})
export class UpperAndLengthPipe implements PipeTransform {

  transform(value: string, displayStrLength: boolean = true): string {
    return value.toUpperCase() +  (displayStrLength ? '(' + value.length + ')' : '');
  }

}
