import { Component } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';
import { DrinksComponent } from "../drinks/drinks.component";
import { EventsComponent } from "../events/events.component";
import { AccommodationComponent } from "../accommodation/accommodation.component";

@Component({
  selector: 'app-home',
  imports: [ReviewsComponent, DrinksComponent, EventsComponent, AccommodationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  logoUrl: any = 'assets/images/Logo.png'
}
