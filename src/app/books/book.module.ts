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
import { MatButtonModule } from '@angular/material/button';
import { TableBooksComponent } from './table-books/table-book.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http'





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
    // TableBooksComponent,
  ],
  imports: [
    MatButtonModule,
    CommonModule, 
    WrBooksRoutingModule,
    HttpClientModule,
    // AppModule
  ]
})
export class BookModule { }
