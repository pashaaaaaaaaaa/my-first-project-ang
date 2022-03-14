import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button/button-module';

const MaterialComponents = [
  MatButtonModule
]


@NgModule({
  imports: [MaterialModule], 
  exports: [MaterialModule]
})
export class MaterialModule { }
