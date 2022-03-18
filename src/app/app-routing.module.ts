import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ForRegistrationComponent} from './regstr/for-registration/for-registration.component'
import { FirstPageComponent } from './books/first-page/first-page.component';
import { HeaderComponent } from './books/header/header.component';
import { SecondPageComponent } from './books/second-page/second-page.component';
import { ThirdPageComponent } from './books/third-page/third-page.component';
import { FourthPageComponent } from './books/fourth-page/fourth-page.component';
import { FifthPageComponent } from './books/fifth-page/fifth-page.component';
import { WrBooksComponent } from './books/wr-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'reg', component: ForRegistrationComponent }, 
  { path: 'books', component: WrBooksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}