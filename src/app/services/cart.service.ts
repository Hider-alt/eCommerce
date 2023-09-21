import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { ProductService } from "./product.service";

@Injectable()
export class CartService {
    private cart: [id: number, quantity: number][] = [];

    private _numberOfItems: number = 0;

    public get numberOfItems() {
        return this._numberOfItems;
    }

    public set numberOfItems(n: number) {
        this._numberOfItems = n;
    }

    constructor(private productService: ProductService) {
        this.updateNumberOfItems()
    }

    private updateNumberOfItems() {
        this.numberOfItems = this.cart.reduce((sum, current) => sum + current[1], 0);
    }

    private find(id: number): number {
        return this.cart.findIndex(product => product[0] == id);
    }

    add(id: number, quantity: number) {
        let index = this.find(id);
        if (index == -1) {
            this.cart.push([id, quantity])
        } else {
            this.changeQuantity(id, ((this.cart.at(index)![1] + quantity) > 99) ? 99 : this.cart.at(index)![1] + quantity);
        }
        this.updateNumberOfItems()
    }

    remove(id: number) {
        let index = this.find(id)
        if (index != -1) {
            this.cart.splice(index, 1)
        }
        this.updateNumberOfItems()
    }

    changeQuantity(id: number, quantity: number) {
        let index = this.find(id)
        if (index != -1) {
            let product = this.cart.at(index)

            if (product != undefined) {
                product[1] = quantity
            }
        }
        this.updateNumberOfItems()
    }

    clear() {
        this.cart = [];
        this.updateNumberOfItems()
    }

    getProducts(): (Product | undefined)[] {
        return this.cart.map(
            prod => this.productService.getById(prod[0])
        )
    }

    getQuantity(id: number): number {
        let index = this.find(id);
        return this.cart.at(index)![1];
    }

    getTotalCost(): number {
        return this.cart.reduce((sum, current) => sum + (((this.productService.getById(current[0])!.offertPrice == undefined) ? this.productService.getById(current[0])!.price : this.productService.getById(current[0])!.offertPrice!) * current[1]), 0);
    }
}
