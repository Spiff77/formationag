import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  url = 'http://localhost:8080/learn/api/products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]>{
      return this.http.get<Product[]>(this.url);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  add(product: Product):  Observable<void> {
    return this.http.post<void>(this.url, product);
  }
}