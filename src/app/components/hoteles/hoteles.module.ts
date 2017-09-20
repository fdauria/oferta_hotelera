import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HotelesComponent} from './hoteles.component';
import {RouterModule} from '@angular/router';

const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'hoteles',
    component: HotelesComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    editorRouting
  ],
  declarations: [
    HotelesComponent
  ]
})
export class HotelesModule {}
