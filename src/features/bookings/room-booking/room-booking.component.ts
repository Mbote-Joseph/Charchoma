import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent {
  rooms = [
    {
      name: 'Ocean View Suite',
      images: [
        'assets/rooms/room1-204-2.jpg',
        'assets/rooms/room1-204-5.jpg',
        'assets/rooms/room1-204-4.jpg'
      ],
      selectedImageIndex: 0,
      description: 'A luxurious suite with stunning views of the ocean.'
    },
    {
      name: 'Garden Room',
      images: [
        'assets/rooms/ocean1.jpg',
        'assets/rooms/room1-101-1.jpg',
        'assets/rooms/room1-101-2.jpg'
      ],
      selectedImageIndex: 0,
      description: 'A peaceful room facing the lush garden.'
    },
    {
      name: 'Poolside Room',
      images: [
        'assets/rooms/room1-101-3.jpg',
        'assets/rooms/room1-101-4.jpg',
        'assets/rooms/room1-101-1.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Just steps away from the refreshing pool.'
    },
    {
      name: 'Executive Suite',
      images: [
        'assets/rooms/room1-103.jpg',
        'assets/rooms/room1-103-2.jpg',
        'assets/rooms/room1-103-1.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Spacious with dedicated work and rest zones.'
    },
    {
      name: 'Standard Room',
      images: [
        'assets/rooms/room1-103-3.jpg',
        'assets/rooms/room1-103-4.jpg',
        'assets/rooms/room1-103-5.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Comfort and convenience combined.'
    },
    {
      name: 'Deluxe Room',
      images: [
        'assets/rooms/room1-204.jpg',
        'assets/rooms/room1-204-2.jpg',
        'assets/rooms/room1-204-1.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Extra space and premium features.'
    },
    {
      name: 'Family Suite',
      images: [
        'assets/rooms/room1-204-5.jpg',
        'assets/rooms/room1-204-4.jpg',
        'assets/rooms/room1-204-3.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Perfect for families with kids.'
    },
    {
      name: 'Penthouse',
      images: [
        'assets/rooms/ocean1.jpg',
        'assets/rooms/room1-101-1.jpg',
        'assets/rooms/room1-101-2.jpg'
      ],
      selectedImageIndex: 0,
      description: 'The ultimate luxury experience.'
    }
  ];

  selectImage(roomIndex: number, imageIndex: number) {
    this.rooms[roomIndex].selectedImageIndex = imageIndex;
  }
}
