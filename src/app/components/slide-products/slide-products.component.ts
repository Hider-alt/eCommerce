import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-slide-products',
  templateUrl: './slide-products.component.html',
  styleUrls: ['./slide-products.component.css']
})
export class SlideProductsComponent
{
  @Input()
  products? : Product[];

  @Input()
  category? : Category;

  private totalCols: number = 12;
  private productCol: number = 3;
  private maxCols: number = 3;

  getProductCol(): number {
    if (this.products == undefined)
      return 0;

    this.productCol = Math.floor(this.totalCols / this.products.length);
    return Math.min(this.productCol, this.maxCols);
  }
}
