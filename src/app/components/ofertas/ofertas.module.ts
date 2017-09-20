import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OfertasComponent} from './ofertas.component';
import {RouterModule} from '@angular/router';

const ofertasRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'ofertas',
    component: OfertasComponent
  }
]);

@NgModule({
  imports: [
    ofertasRouting,
    FormsModule
  ],
  declarations: [
    OfertasComponent
  ]
})
export class OfertasModule {}
