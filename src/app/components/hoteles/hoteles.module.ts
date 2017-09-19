import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HotelesComponent} from './hoteles';
import {HotelesRoutingModule} from './hoteles-routing.module';
import {CalendarModule} from '../../../components/calendar/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotelesRoutingModule,
    HotelesModule
  ],
  declarations: [
    HotelesComponent
  ]
})
export class HotelesModule {}

@NgModule({
  imports: [CommonModule],
  exports: [HotelesComponent],
  declarations: [Calendar]
})
export class CalendarModule { }
