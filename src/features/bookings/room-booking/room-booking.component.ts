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
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Pool1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room4_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'A luxurious suite with stunning views of the ocean.'
    },
    {
      name: 'Garden Room',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/loungerooms1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room2_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'A peaceful room facing the lush garden.'
    },
    {
      name: 'Poolside Room',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Pool1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room4_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Just steps away from the refreshing pool.'
    },
    {
      name: 'Executive Suite',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/loungerooms1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room2_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Spacious with dedicated work and rest zones.'
    },
    {
      name: 'Standard Room',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Pool1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room4_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Comfort and convenience combined.'
    },
    {
      name: 'Deluxe Room',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/loungerooms1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room2_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Extra space and premium features.'
    },
    {
      name: 'Family Suite',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Pool1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room4_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'Perfect for families with kids.'
    },
    {
      name: 'Penthouse',
      images: [
        'https://charchoma.com/wp-content/uploads/2025/02/loungerooms1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room2_1600x900.jpg',
        'https://charchoma.com/wp-content/uploads/2025/02/Room1_1600x900.jpg'
      ],
      selectedImageIndex: 0,
      description: 'The ultimate luxury experience.'
    }
  ];

  selectImage(roomIndex: number, imageIndex: number) {
    this.rooms[roomIndex].selectedImageIndex = imageIndex;
  }
}
