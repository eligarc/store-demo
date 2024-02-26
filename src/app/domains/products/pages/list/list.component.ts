import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 1000,
        image: 'https://picsum.photos/640/640?r=24',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 10000,
        image: 'https://picsum.photos/640/640?r=25',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 100000,
        image: 'https://picsum.photos/640/640?r=26',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 1000000,
        image: 'https://picsum.photos/640/640?r=27',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 1000000,
        image: 'https://picsum.photos/640/640?r=28',
        createAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
