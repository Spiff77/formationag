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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
