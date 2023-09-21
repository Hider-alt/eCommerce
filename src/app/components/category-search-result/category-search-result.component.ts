import { Component } from '@angular/core';
import {Product} from "../../models/product";
import {Category} from "../../models/category";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-search-result',
  templateUrl: './category-search-result.component.html',
  styleUrls: ['./category-search-result.component.css']
})
export class CategorySearchResultComponent {
  products: Product[] = [];
  category: Category = Category.All;
  searchString: string = '';

  page: number;
  maxPage: number = 1;

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    this.routeService.params.subscribe(params => {
      this.category = params['category'] as Category;
      this.searchString = params['search'];

      this.products = this.productService.getProductsInCategory(this.category, this.searchString);
      this.maxPage = this.productService.productsInCategoryPageCount(this.category, this.searchString);
    });

    this.page = 1;
  }

  changePage(page: number) {
    if (!this.category) return;

    this.page = page;
    this.products = this.productService.getProductsInCategory(this.category, this.searchString, this.page);
  }
}
