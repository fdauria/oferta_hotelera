import {Routes, RouterModule} from "@angular/router";
import {HotelesComponent} from "./hoteles.component";

const appRoutes: Routes = [
  { path: 'hoteles', component: HotelesComponent },
];

export const HotelesRouting = RouterModule.forChild(appRoutes);
