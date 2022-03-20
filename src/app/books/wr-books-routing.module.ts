import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { WrBooksComponent } from './wr-books.component';

const getBookRout: Routes = [
  { path: 'books', component: WrBooksComponent, children: [
    { path: '', redirectTo: '/books/title-1', pathMatch: 'full' },
    { path: 'title-1', component: FirstPageComponent }, 
    { path: 'title-2', component: SecondPageComponent }, 
    { path: 'title-3', component: ThirdPageComponent }, 
    { path: 'title-4', component: FourthPageComponent }, 
    { path: 'title-5', component: FifthPageComponent }, 
  ]},
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
