import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { HeaderComponent } from './header/header.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { WrBooksComponent } from './wr-books.component';
import { WrBooksRoutingModule } from './wr-books-routing.module';
import { PaginationBookComponent } from './pagination-book/pagination-book.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BookChartComponent } from './book-chart/book-chart/book-chart.component'
import { AppComponent } from '../app.component';
import { ModalBookComponent } from './modal-book/modal-book.component';





@NgModule({
  declarations: [
    FirstPageComponent,
    HeaderComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    WrBooksComponent,
    PaginationBookComponent,
    ModalBookComponent,
    BookChartComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule, 
    WrBooksRoutingModule,
    HttpClientModule,
  ]
})
export class BookModule { }
