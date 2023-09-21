import { Category } from "./category";

export class Product
{
    constructor(public id: number, public name: string, public description: string, public category: Category, public price: number, public images: string[], public offertPrice? : number){}
}
