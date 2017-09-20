import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HotelesComponent} from './hoteles.component';
import {HotelesRouting} from "./hoteles.routing";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelesRouting
  ],
  declarations: [
    HotelesComponent
  ]
})
export class HotelesModule {}
