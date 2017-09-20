import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {OfertasComponent} from './ofertas.component';
import {CommonModule} from "@angular/common";
import {OfertasRouting} from "./ofertas.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfertasRouting
  ],
  declarations: [
    OfertasComponent
  ]
})
export class OfertasModule {}
