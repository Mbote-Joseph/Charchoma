import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Grilled Chicken Skewers', price: 750, image: 'https://charchoma.com/wp-content/uploads/2025/02/chef1600x900-845x684.jpg', category: 'Meal', description: 'Tender grilled skewers with a smoky flavor.' },
    { id: 2, name: 'Beef Ribs', price: 1200, image: 'https://charchoma.com/wp-content/uploads/2025/02/dessert1600x900-845x684.jpg', category: 'Meal', description: 'Juicy and perfectly slow-cooked beef ribs.' },
    { id: 3, name: 'Passion Mojito', price: 350, image: 'https://charchoma.com/wp-content/uploads/2025/02/Breakfast1600x900-845x684.jpg', category: 'Drink', description: 'Refreshing passion fruit mojito with a tropical twist.' }
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
