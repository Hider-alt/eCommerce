import {Component} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  products: Product[] = [];
  searchString: string = "";
  page: number;
  maxPage: number = 1;

  constructor(private productService: ProductService, private routeService: ActivatedRoute) {
    this.routeService.params.subscribe(params => {
      this.searchString = params['search'] || "";
      this.products = this.productService.getProductsByName(this.searchString);
      this.maxPage = this.productService.productPageCount(this.searchString);
    });

    this.page = 1;
  }

  changePage(page: number) {
    this.page = page;
    this.products = this.productService.getProductsByName(this.searchString, this.page);
  }
}
