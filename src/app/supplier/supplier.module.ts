import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {SupplierComponent} from './supplier/supplier.component';
import {SupplierAddComponent} from './supplier-add/supplier-add.component';
import {AnonymizeBankAccountPipe} from './anonymize-bank-account.pipe';
import {FormsModule} from '@angular/forms';
import {ProductModule} from '../product/product.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: SupplierListComponent},
  {path: '/add', component: SupplierAddComponent},
]


@NgModule({
  declarations: [
    SupplierListComponent,
    SupplierComponent,
    SupplierAddComponent,
    AnonymizeBankAccountPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductModule,
    RouterModule.forChild(routes),
    SharedModule,

  ]
})
export class SupplierModule { }
