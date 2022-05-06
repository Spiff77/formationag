import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ParentComponent } from './sandbox/parent/parent.component';
import { ChildrenComponent } from './sandbox/children/children.component';
import { SiblingComponent } from './sandbox/sibling/sibling.component';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import { PostAddComponent } from './sandbox/post-add/post-add.component';
import { HomeComponent } from './sandbox/home/home.component';
import { Err404Component } from './sandbox/err404/err404.component';
import {RouterModule, Routes} from '@angular/router';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalplayComponent } from './sandbox/modalplay/modalplay.component';
import { TestComponent } from './sandbox/test/test.component';
import {ProductModule} from './product/product.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'modal', component: ModalplayComponent},
  {path: 'a', loadChildren: () => import('./sandbox/a/a.module').then( m => m.AModule)},
  {path: 'b', loadChildren: () => import('./sandbox/b/b.module').then( m => m.BModule)},
  {path: 'suppliers', loadChildren: () => import('./supplier/supplier.module').then( m => m.SupplierModule)},
  {path: 'parent', component: ParentComponent},
  {path: 'parent/:name', component: ParentComponent},
  {path: 'sibling', component: SiblingComponent},
  {path: 'addpost', component: PostAddComponent},
  {path: '', redirectTo: 'home', pathMatch:"full"},
  {path: '**', component: Err404Component},
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ParentComponent,
    ChildrenComponent,
    SiblingComponent,
    PostAddComponent,
    HomeComponent,
    Err404Component,
    ModalplayComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [SupplierService, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
