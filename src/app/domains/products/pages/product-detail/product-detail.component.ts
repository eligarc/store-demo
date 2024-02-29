import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() id?: string;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);

  cover = signal('');

  ngOnInit() {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (prod) => {
          this.product.set(prod);
          if (prod.images.length > 0) {
            this.cover.set(prod.images[0]);
          }
        },
        error: () => {},
      });
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage);
  }

  addToCart() {
    const product = this.product();

    if(product) {
      this.cartService.addToCart(product);
    }
  }
}
