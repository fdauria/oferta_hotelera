import {Routes, RouterModule} from "@angular/router";
import {OfertasComponent} from "./ofertas.component";

const asofertRoutes: Routes = [
  { path: 'ofertas', component: OfertasComponent },
];

export const OfertasRouting = RouterModule.forChild(asofertRoutes);
