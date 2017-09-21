import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {OfertasComponent} from './components/ofertas/ofertas.component';
import {HotelesComponent} from './components/hoteles/hoteles.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'hoteles', component: HotelesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, OfertasComponent, HotelesComponent];
