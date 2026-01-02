import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent {
  rooms = [
    {
      name: 'Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views, king-size bed, and balcony.',
      images: [
        'assets/rooms/room1-204-2.jpg',
        'assets/rooms/room1-204-5.jpg',
        'assets/rooms/room1-204-4.jpg'
      ],
      currentIndex: 0
    },
    {
      name: 'Garden Cottage',
      description: 'Peaceful cottage surrounded by lush gardens, perfect for relaxation.',
      images: [
        'assets/rooms/ocean1.jpg',
        'assets/rooms/ocean1.jpg',
        'assets/rooms/ocean1.jpg'
      ],
      currentIndex: 0
    }
  ];

  setMainImage(roomIndex: number, imageIndex: number) {
    this.rooms[roomIndex].currentIndex = imageIndex;
  }
}
