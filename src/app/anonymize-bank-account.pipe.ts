import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anonymizeBankAccount'
})
export class AnonymizeBankAccountPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    let res = value

    if(length && value.length != length){
      res = 'INVALID BANK ACCOUNT NUMBER'
    }else{
      res = value.substring(0,4).padEnd(12, '*')
    }
    return res
  }

}
