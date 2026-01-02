import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  drinkImages = [
    'assets/drinks/KSK_7812.jpg',
    'assets/drinks/coffee.jpg',
    'assets/drinks/cellars1.jpg',
    'assets/drinks/cellars2.jpg',
    'assets/drinks/cellars3.jpg'
  ];

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.drinkImages.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.drinkImages.length) % this.drinkImages.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }
}
