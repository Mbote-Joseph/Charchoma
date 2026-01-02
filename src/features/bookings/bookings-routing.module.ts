import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OceanExperienceComponent } from './ocean-experience/ocean-experience.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { TableReservationComponent } from './table-reservation/table-reservation.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

const routes: Routes = [
  { path: 'room-booking', component: RoomBookingComponent },
  { path: 'table-reservation', component: TableReservationComponent },
  { path: 'ocean-experience', component: OceanExperienceComponent },
  { path: 'room-details/:id', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
