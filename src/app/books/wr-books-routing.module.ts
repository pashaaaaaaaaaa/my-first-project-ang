import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';

const getBookRout: Routes = [
  { path: 'books', redirectTo: '/books/first-paget', pathMatch: 'full' },
  { path: 'first-page', component: FirstPageComponent }, 
  { path: 'second-page', component: SecondPageComponent }, 
  { path: 'third-page', component: ThirdPageComponent }, 
  { path: 'fourth-page', component: FourthPageComponent }, 
  { path: 'fifth-page', component: FifthPageComponent }, 

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(getBookRout)
  ],
  exports: [RouterModule]
})
export class WrBooksRoutingModule { }
