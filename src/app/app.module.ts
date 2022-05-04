import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './sandbox/parent/parent.component';
import { ChildrenComponent } from './sandbox/children/children.component';
import { UpperAndLengthPipe } from './upper-and-length.pipe';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { AnonymizeBankAccountPipe } from './anonymize-bank-account.pipe';
import { SiblingComponent } from './sandbox/sibling/sibling.component';
import {PostService} from './sandbox/post.service';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import { PostAddComponent } from './sandbox/post-add/post-add.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { HomeComponent } from './sandbox/home/home.component';
import { Err404Component } from './sandbox/err404/err404.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'parent/:name', component: ParentComponent},
  {path: 'sibling', component: SiblingComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'suppliers', component: SupplierListComponent},
  {path: 'suppliers/add', component: SupplierAddComponent},
  {path: 'addpost', component: PostAddComponent},
  {path: '', redirectTo: 'home', pathMatch:"full"},
  {path: '**', component: Err404Component},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    ParentComponent,
    ChildrenComponent,
    UpperAndLengthPipe,
    SupplierComponent,
    SupplierListComponent,
    AnonymizeBankAccountPipe,
    SiblingComponent,
    PostAddComponent,
    ProductAddComponent,
    SupplierAddComponent,
    HomeComponent,
    Err404Component,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
