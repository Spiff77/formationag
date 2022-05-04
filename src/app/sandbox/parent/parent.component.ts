import { Component, OnInit } from '@angular/core';
import {debounce, debounceTime, filter, fromEvent, interval, map, Observable, take} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  descs: string[] = ["Super"]
  constructor(private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.aRoute.snapshot.paramMap.get('name');
    if(name)
      this.descs.push(name);


// Créer un composant: DetailsProduct
// Le mapper à une route (products/:id) --> ex:products/5

// Creér un lien vers chaque detail de produit
// Afficher le détail du produit avec l'id 5
    // --> FindOne de votre ProductService
    // --> Affichage de ce produit











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
