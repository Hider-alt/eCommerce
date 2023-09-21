import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Input()
  quantity: number = 1;

  @Output() quantityEvent = new EventEmitter();

  add() {
    if (this.quantity < 99) {
      this.quantity += 1;
    }
    this.quantityEvent.emit(this.quantity);
  }

  remove() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
    this.quantityEvent.emit(this.quantity);
  }

  changeQuantityKey(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      (event.target as HTMLInputElement).blur();
    }
  }

  changeQuantity(event: Event) {
    this.quantity = (+(event.target as HTMLInputElement).value == 0) ? 1 : +(event.target as HTMLInputElement).value;
    this.quantityEvent.emit(this.quantity);
  }
}
