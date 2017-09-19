import { Component } from '@angular/core';

import { OfertasComponent} from './ofertas/ofertas.component';
import { HotelesComponent} from './hoteles/hoteles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

// @Component({
//   selector: 'app-header',
//   templateUrl: './app-header.component.html',
//   styleUrls: ['./app-header.component.css'],
//
// })
// export class AppHeader{
//   title1 = 'Oferta';
//   title2 = 'Hotelera';
// }
