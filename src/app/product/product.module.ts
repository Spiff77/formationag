import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../jwt.interceptor';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/:id', component: ProductDetailComponent},
]

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  exports: [
    ProductAddComponent
  ]
})
export class ProductModule { }
