import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { ForRegistrationComponent } from './for-registration/for-registration.component';


@NgModule({
  declarations: [
    ForRegistrationComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
  ]
})
export class RegstrModule { }
