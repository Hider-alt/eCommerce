import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input()
  product?: Product;

  @Output() updateEvent = new EventEmitter();

  constructor(private cartService: CartService) { }

  remove() {
    this.cartService.remove(this.product!.id);
    this.updateEvent.emit();
  }

  updateQuantity(quantity: number) {
    this.cartService.changeQuantity(this.product!.id, quantity);
    this.updateEvent.emit();
  }

  getQuantity() {
    return this.cartService.getQuantity(this.product!.id);
  }
}
