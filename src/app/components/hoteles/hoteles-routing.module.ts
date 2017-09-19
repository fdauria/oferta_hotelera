import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HotelesComponent} from './hoteles';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: HotelesComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HotelesRoutingModule {}
