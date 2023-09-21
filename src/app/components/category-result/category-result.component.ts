import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/product";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-result',
  templateUrl: './category-result.component.html',
  styleUrls: ['./category-result.component.css']
})
export class CategoryResultComponent {
  products: Product[] = [];
  category: Category = Category.All;
  page: number;
  maxPage: number = 1;

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    this.routeService.params.subscribe(params => {
      this.category = params['category'] as Category;
      this.products = this.productService.getProductsByCategory(this.category);
      this.maxPage = this.productService.categoryPageCount(this.category);
    });

    this.page = 1;
  }

  changePage(page: number) {
    if (!this.category) return;

    this.page = page;
    this.products = this.productService.getProductsByCategory(this.category, this.page);
  }
}
