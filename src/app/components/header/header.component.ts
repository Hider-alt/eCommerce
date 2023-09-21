import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CartService } from 'src/app/services/cart.service';
import { Router } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchString: string = '';
  category: string = 'Categoria';
  categories = this.getCategories();

  constructor(private productService: ProductService, public cartService: CartService, private router: Router) { }

  search(): void {
    if (this.category == 'Categoria' || this.category == 'Tutte')
      this.router.navigate(['/shop', this.searchString]);
    else if (this.searchString != '')
      this.router.navigate(['/shop/categories', this.category, this.searchString]);
    else
      this.router.navigate(['/shop/categories', this.category]);
  }

  getCategories(): Category[] {
    return this.productService.getCategories();
  }
}
