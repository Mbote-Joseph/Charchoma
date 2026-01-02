import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent {
  room: any;
  roomIndex: number = 0;
  selectedImageIndex: number = 0;

  form = {
    startDate: '',
    endDate: '',
    adults: 1,
    kids: 0,
    mealPlan: 'Breakfast'
  };

  totalCost: number = 0;
  errorMessage: string = '';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.roomIndex = Number(this.route.snapshot.paramMap.get('id'));
    this.room = this.rooms[this.roomIndex];
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  getNights(): number {
    const start = new Date(this.form.startDate);
    const end = new Date(this.form.endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(diff, 0);
  }

  validateForm(): boolean {
    if (this.form.adults > 2) {
      this.errorMessage = 'A maximum of 2 adults are allowed per room.';
      return false;
    }

    if (this.form.kids > 2) {
      this.errorMessage = 'A maximum of 2 kids under 10 years are allowed.';
      return false;
    }

    if (!this.form.startDate || !this.form.endDate) {
      this.errorMessage = 'Please select both start and end dates.';
      return false;
    }

    const nights = this.getNights();
    if (nights <= 0) {
      this.errorMessage = 'End date must be after start date.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  calculateCost() {
    const nights = this.getNights();

    if (this.form.adults === 1) {
      this.totalCost = nights * 10856;
    } else if (this.form.adults === 2) {
      this.totalCost = nights * 13452;
    }

    if (this.form.kids >= 2) {
      this.totalCost += 1500; // one-time extra kids charge
    }
  }

  submitBooking() {
    if (this.validateForm()) {
      this.calculateCost();
      alert(`Booking confirmed. Total cost: Ksh ${this.totalCost.toLocaleString()}`);
    }
  }
}
