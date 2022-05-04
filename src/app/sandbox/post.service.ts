import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  /*findOne(id: number): Product | undefined {
    return this.products.find( s => s.id === id);
  }

  delete(id: number): void {
    let searchElement = this.products.find(s => s.id == id);
    if(searchElement){
      let start = this.products.indexOf(searchElement);
      this.products.splice(start, 1)
    }
  }
*/
  add(s :Post): Observable<void>{
   return this.http.post<void>(this.url, s);
  }

}
