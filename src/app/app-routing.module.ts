import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      {path: 'hoteles', loadChildren: './components/hoteles/hoteles.module#HotelesModule'},
      {path: 'ofertas', loadChildren: './components/ofertas/ofertas.module#OfertasModule'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
