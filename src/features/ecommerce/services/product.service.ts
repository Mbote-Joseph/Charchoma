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
    { id: 1, name: 'Boneless Meat', price: 1200, image: 'assets/meat/BONELESS.jpg', category: 'Meal', description: 'Premium quality boneless meat cut.' },
    { id: 2, name: 'Beef Brisket', price: 1400, image: 'assets/meat/BRISKET.jpeg', category: 'Meal', description: 'Slow-cooking beef brisket, rich and flavorful.' },
    { id: 3, name: 'Chicken Breast', price: 750, image: 'assets/meat/CHICKEN BREAST.jpg', category: 'Meal', description: 'Lean and tender chicken breast.' },
    { id: 4, name: 'Chicken Wings', price: 650, image: 'assets/meat/CHICKEN WINGS.jpg', category: 'Meal', description: 'Juicy chicken wings perfect for grilling.' },
    { id: 5, name: 'Chicken Drumsticks', price: 700, image: 'assets/meat/DRUM STICKS.jpg', category: 'Meal', description: 'Succulent chicken drumsticks.' },
    { id: 6, name: 'Fish Fillet', price: 900, image: 'assets/meat/FILLET.jpeg', category: 'Meal', description: 'Fresh fish fillet, clean and tender.' },
    { id: 7, name: 'Fish Fillets', price: 950, image: 'assets/meat/FILLETS.jpeg', category: 'Meal', description: 'Multiple premium fish fillets.' },
    { id: 8, name: 'Flank Steak', price: 1350, image: 'assets/meat/FLANK.jpeg', category: 'Meal', description: 'Lean flank steak with bold beef flavor.' },
    { id: 9, name: 'Hump Steak', price: 1450, image: 'assets/meat/HUMP STEAK.jpeg', category: 'Meal', description: 'Rich and juicy hump steak cut.' },
    { id: 10, name: 'Jumbo Prawns', price: 1600, image: 'assets/meat/JUMBO.jpeg', category: 'Meal', description: 'Large juicy jumbo prawns.' },
    { id: 11, name: 'King Prawns', price: 1800, image: 'assets/meat/KING PRAWNS.jpeg', category: 'Meal', description: 'Premium king prawns, ocean fresh.' },
    { id: 12, name: 'Kingfish', price: 1500, image: 'assets/meat/KINGFISH.jpeg', category: 'Meal', description: 'Fresh kingfish, firm and flavorful.' },
    { id: 13, name: 'Lobsters', price: 3200, image: 'assets/meat/LOBSTERS.jpeg', category: 'Meal', description: 'Whole premium lobsters.' },
    { id: 14, name: 'Picanha Steak', price: 1700, image: 'assets/meat/PICANHA.jpeg', category: 'Meal', description: 'Brazilian-style picanha steak.' },
    { id: 15, name: 'Pork Chump Chops', price: 1200, image: 'assets/meat/PORK CHUMP CHOPS.jpeg', category: 'Meal', description: 'Tender pork chump chops.' },
    { id: 16, name: 'Pork Fillet', price: 1300, image: 'assets/meat/PORK FILLET.jpeg', category: 'Meal', description: 'Lean and tender pork fillet.' },
    { id: 17, name: 'Pork Leg Chops', price: 1250, image: 'assets/meat/PORK LEG CHOPS.jpeg', category: 'Meal', description: 'Juicy pork leg chops.' },
    { id: 18, name: 'Pork Loin Boneless', price: 1500, image: 'assets/meat/PORK LOIN BONELESS.jpeg', category: 'Meal', description: 'Boneless pork loin cut.' },
    { id: 19, name: 'Pork Loin Chops', price: 1450, image: 'assets/meat/PORK LOIN CHOPS.jpeg', category: 'Meal', description: 'Classic pork loin chops.' },
    { id: 20, name: 'Pork Loin Skewers', price: 1350, image: 'assets/meat/PORK LOIN SKEWERS.jpeg', category: 'Meal', description: 'Marinated pork loin skewers.' },
    { id: 21, name: 'Pork Shoulder', price: 1400, image: 'assets/meat/PORK SHOULDER.jpeg', category: 'Meal', description: 'Perfect cut for slow roasting.' },
    { id: 22, name: 'Pork Spare Ribs', price: 1550, image: 'assets/meat/PORK SPARE RIBS.jpeg', category: 'Meal', description: 'Meaty and flavorful pork ribs.' },
    { id: 23, name: 'Red Snapper', price: 1600, image: 'assets/meat/RED SNAPPER.jpeg', category: 'Meal', description: 'Fresh red snapper fish.' },
    { id: 24, name: 'Ribeye Steak', price: 1900, image: 'assets/meat/RIBEYE.jpeg', category: 'Meal', description: 'Well-marbled ribeye steak.' },
    { id: 25, name: 'Rump Steak', price: 1700, image: 'assets/meat/RUMP STEAK.jpeg', category: 'Meal', description: 'Classic rump steak cut.' },
    { id: 26, name: 'Short Ribs', price: 1650, image: 'assets/meat/SHORT-RIBS.jpeg', category: 'Meal', description: 'Tender beef short ribs.' },
    { id: 27, name: 'Skewers', price: 1100, image: 'assets/meat/SKEWERS.jpeg', category: 'Meal', description: 'Mixed meat skewers.' },
    { id: 28, name: 'Sole Fish', price: 1450, image: 'assets/meat/SOLE FISH.jpeg', category: 'Meal', description: 'Delicate sole fish fillet.' },
    { id: 29, name: 'T-Bone Steak', price: 2000, image: 'assets/meat/T-BONE.jpeg', category: 'Meal', description: 'Classic T-bone steak.' },
    { id: 30, name: 'Tilapia', price: 1000, image: 'assets/meat/TILAPIA.jpeg', category: 'Meal', description: 'Fresh whole tilapia.' },
    { id: 31, name: 'Tomahawk Steak', price: 2500, image: 'assets/meat/TOMAHAWK .jpeg', category: 'Meal', description: 'Large premium tomahawk steak.' },
    { id: 32, name: 'Tuna', price: 1700, image: 'assets/meat/TUNA.jpeg', category: 'Meal', description: 'Fresh tuna steak.' },
    { id: 33, name: 'White Snapper', price: 1550, image: 'assets/meat/WHITE SNAPPER.jpeg', category: 'Meal', description: 'Mild and flaky white snapper.' },
    { id: 34, name: 'Chicken Wings', price: 650, image: 'assets/meat/WINGS.jpg', category: 'Meal', description: 'Classic chicken wings.' }
  ];

  getProducts() {
    return this.products;
  }


  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
