import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule} from '@angular/material/input';
import { CamelCase } from './pipes/camelCase.pipe';
import { BookModule } from './books/book.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TextModificatorDirective } from './directives/text-modificator.directive';
import { TextModificatorHostDirective } from './directives/text-modificator-host.directive';
import { TextRainbowColorDirective } from './directives/text-rainbow-color.directive';
import { FormComponentComponent } from './form/form-component/form-component.component';
import { TableBooksComponent } from './books/table-books/table-book.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    MatTableModule,
    MatInputModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BookModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    // RegstrModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
    ],
    declarations: [
      AppComponent,
      CamelCase,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent,
      MessagesComponent,
      HeroSearchComponent,
      TableBooksComponent, 
      TextModificatorHostDirective,
      TextModificatorDirective,
      TextRainbowColorDirective,
      FormComponentComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }