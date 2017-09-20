import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true
});
