import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // img = 'https://picsum.photos/640/640?r='+Math.random()

  // @Input({ required: true }) img: string = '';
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) title: string = '';
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addCartHandler() {
    this.addToCart.emit(this.product);
  }
}
