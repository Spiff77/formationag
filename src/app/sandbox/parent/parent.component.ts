import { Component, OnInit } from '@angular/core';
import {debounce, debounceTime, filter, fromEvent, interval, map, Observable, take} from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  descs = ["Hello ca va?", "Oui et toi?", "Super"]
  constructor() { }

  ngOnInit(): void {
















  /* const inter: Observable<number> = interval(500).pipe(
     take(10),
     filter(v => v % 2 == 0),
     map(v => v * 10)
   );

   const clickObservable: Observable<Event> = fromEvent(document,'click').pipe(debounceTime(2000));
    clickObservable.subscribe(v => console.log(v))

    inter.subscribe(v => console.log( 'val', v))*/

  }

  receiveHello(msg: number) {
    console.log(`PARENT RECOIS DE ENFANT: ${msg}`)
  }
}
