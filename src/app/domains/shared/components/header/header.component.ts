import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // @Input({ required: true }) cart!: Product[];
  // subTotal = signal(0);

  hideSideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  subTotal = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }


  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart'];

  //   if (cart && cart.previousValue !== cart.currentValue) {
  //     this.subTotal.set(this.calcTotal)
  //   }
  // }

  // private get calcTotal() {
  //   return this.cart.reduce((total, product) => total + product.price , 0);
  // }

}
