import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { HeaderComponent } from './header/header.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { WrBooksComponent } from './wr-books.component';
import { WrBooksRoutingModule } from './wr-books-routing.module';
import { PaginationBookComponent } from './pagination-book/pagination-book.component';




@NgModule({
  declarations: [
    FirstPageComponent,
    HeaderComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    WrBooksComponent,
    PaginationBookComponent
  ],
  imports: [
    CommonModule, 
    WrBooksRoutingModule
    // AppModule
  ]
})
export class BookModule { }
