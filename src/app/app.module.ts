import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent} from './ofertas/ofertas.component';
import { HotelesComponent} from './hoteles/hoteles.component';

const appRoutes: Routes = [
  { path: 'ofertas', component: OfertasComponent },
  { path: 'hoteles', component: HotelesComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
