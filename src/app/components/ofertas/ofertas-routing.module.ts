import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OfertasComponent} from './ofertas';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: OfertasComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OfertasRoutingModule {}
