import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  id: number = 0;
  product? : Product;

  suggestedProducts? : Product[];
  nSuggestedProducts: number = 3;

  constructor(private productService: ProductService, private routeService: ActivatedRoute)
  {
    this.routeService.params.subscribe(params => {
      this.id = +params['id'] || -1;
      this.product = this.productService.getById(this.id);
      if (this.product)
        this.suggestedProducts = this.productService.getProductsByCategory(this.product.category,1, this.nSuggestedProducts);
    });
  }

}
