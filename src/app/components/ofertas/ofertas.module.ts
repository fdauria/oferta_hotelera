import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OfertasComponent} from './ofertas';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertasComponent,
  ],
  declarations: [
    OfertasComponent
  ]
})
export class OfertasModule {}
