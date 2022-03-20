import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button/button-module';
import {MatTableModule} from '@angular/material/table'

const MaterialComponents = [
  MatButtonModule
]


@NgModule({
  imports: [MaterialModule], 
  exports: [MaterialModule]
})
export class MaterialModule { }
