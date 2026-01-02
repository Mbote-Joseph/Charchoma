import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  filters = {
    type: '',
    minPrice: 0,
    maxPrice: 10000
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product =>
      (this.filters.type === '' || product.category === this.filters.type) &&
      product.price >= this.filters.minPrice &&
      product.price <= this.filters.maxPrice
    );
  }
}
