import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpperAndLengthPipe} from './upper-and-length.pipe';



@NgModule({
  declarations: [UpperAndLengthPipe],
  imports: [
    CommonModule
  ],
  exports:[UpperAndLengthPipe]
})
export class SharedModule { }
