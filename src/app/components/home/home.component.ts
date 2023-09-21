import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private offerId : number = 2;
  offerProduct? : Product;

  featuredCategories: Category[] = [];
  featuredProducts : Product[][] = [];
  nFeaturedProducts : number = 3;
  nRowCategories : number = 4

  constructor(private productService: ProductService)
  {
    this.featuredCategories = this.productService.getRandomCategories(this.nRowCategories);

    for(let c of this.featuredCategories)
      this.featuredProducts.push(this.productService.getProductsByCategory(c, 1, this.nFeaturedProducts));

    this.offerProduct = this.productService.getById(this.offerId);
  }
}
