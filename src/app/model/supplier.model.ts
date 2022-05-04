import {Itaxable} from './itaxable.model';

export class Supplier implements Itaxable{


  constructor(public id: number = -1, public companyName: string = '', public bankAccountNumber: string = '', public ca: number = 0) {
  }

  calculatedCa(): number {
    return this.ca * .8;
  }

}
