import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ForRegistrationComponent} from './regstr/for-registration/for-registration.component'
import { TableBooksComponent } from './books/table-books/table-book.component';
import { FormComponentComponent } from './form/form-component/form-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'reg', component: ForRegistrationComponent }, 
  { path: 'table-book', component: TableBooksComponent}, 
  { path: 'form', component: FormComponentComponent}, 
  { path: 'auth', component: LoginComponent}, 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}