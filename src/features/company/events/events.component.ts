import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    {
      name: 'Wednesday Night Live Music Session',
      date: '2026-04-16T18:00:00',
      description: 'Join us for a live acoustic session under the stars. Perfect ambiance, perfect vibes.',
      image: 'assets/entertainment/night1.jpg'
    },
    {
      name: 'Friday Beach BBQ & Music',
      date: '2026-04-18T18:30:00',
      description: 'Enjoy grilled meats, DJ beats, and ocean breeze in our Friday fiesta.',
      image: 'assets/entertainment/night2.jpg'
    },
    {
      name: 'Wine & Dine Evening',
      date: '2026-04-20T20:00:00',
      description: 'A curated selection of wine and a three-course meal hosted in our wine cave.',
      image: 'assets/entertainment/night3.jpg'
    },
    {
      name: 'Family Fun Day',
      date: '2026-04-27T12:00:00',
      description: 'Games, live food stations, face painting, and family activities all day long.',
      image: 'assets/entertainment/ocean1.jpg'
    }
  ];

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }
}
