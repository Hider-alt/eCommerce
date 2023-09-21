import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product(1, 'PS5', 'Una tra le migliori console di sempre', Category.Console, 499.99, ['ps5_1.png', 'ps5_2.png', 'ps5_3.png']),
    new Product(2, 'iPhone 12', "L'iPhone 12 è un smartphone di alta gamma sviluppato da Apple. Con un design elegante e sofisticato, l'iPhone 12 offre un'esperienza utente eccezionale e prestazioni potenti.", Category.Smartphone, 599.99, ['iphone12_1.png', 'iphone12_2.png', 'iphone12_3.png'], 472.98),
    new Product(3, 'iPhone 13', 'Il nuovo iPhone 13', Category.Smartphone, 761.99, ['iphone13_2.png', 'iphone13_3.png']),
    new Product(4, 'iPhone 13 Pro', 'Il nuovo iPhone 13 Pro', Category.Smartphone, 810.89, ['iphone13Pro_1_.png', 'iphone13Pro_1.png','iphone13Pro_2.png','iphone13Pro_3.png',]),
    new Product(5, 'iPhone 14 Pro', 'Il nuovo iPhone 14 Pro', Category.Smartphone, 1109.99, ['iphone14Pro_1.png', 'iphone14Pro_2.png', 'iphone14pro_4.png']),
    new Product(6, 'Samsung Galaxy A14', 'Il nuovo Samsung Galaxy A14', Category.Smartphone, 175.18, ['sam14_1.png', 'sam14_2.png']),
    new Product(7, 'Samsung Galaxy s23 Ultra', 'Il nuovo Samsung Galaxy s23 Ultra', Category.Smartphone, 1898.99, ['sam23ult_1.png', 'sam23ult_2.png']),
    new Product(8, 'Xiaomi Redmi Note 12', 'Xiaomi Redmi Note 12', Category.Smartphone, 147.90, ['red12_1.png', 'red12_2.png']),
    new Product(9, 'Xbox Series X', 'La nuova console Xbox Series X', Category.Console, 494.95, ['xboxSX_1.png', 'xboxSX_2.png']),
    new Product(10, 'PS4', 'La nuova console PS4', Category.Console, 209.79, ['ps4_1.png', 'ps4_2.png', 'ps4_3.png']),
    new Product(11, 'Nintendo Switch', 'La nuova console Nintendo Switch', Category.Console, 260.69, ['ns_1.png']),
    new Product(12, 'Xbox One', 'La nuova console Xbox One', Category.Console, 129.98, ['xboxOne_3.png', 'xboxOne_2.png']),
    new Product(13, 'FHD SMART 32" T5372 TV 2020', 'FHD SMART 32" T5372 TV 2020', Category.Tv, 299.99, ['FHDSmart32.png']),
    new Product(14, 'Xiaomi TV Q1E 55', 'Xiaomi TV Q1E 55', Category.Tv, 799.90, ['txXiaomi.png']),
    new Product(15, 'Samsung Neo QLED 8k', 'Samsung Neo QLED 8k', Category.Tv, 1799.99, ['NeoTv.png']),
    new Product(16, 'Mi TV P1 43"', 'Mi TV P1 43"', Category.Tv, 449.89, ['MiTv.png']),
    new Product(17, 'TCL P615 4K Android TV With TCL AI IN', 'TCL P615 4K Android TV With TCL AI IN', Category.Tv, 299.49, ['TclTv.png']),
    new Product(18, 'Samsung Smart TV 65" 4K Full HD', 'Samsung Smart TV 65" 4K Full HD', Category.Tv, 1299.49, ['samSmartTv.png']),
    new Product(19, 'TCL TV P635 | 4K HDR Google TV', 'Buy TCL TV P635 | 4K HDR Google TV', Category.Tv, 292.77, ['TclTv_2.png']),
    new Product(20, 'AMD Ryzen 9 PC Gaming', 'PC GAMING AMD Ryzen 9 5900X 12 Core 3,7/4,8GHz 32GB DDR4 1TB SSD Radeon 6700XT 8GB D6 WI FI Windows 11 PRO', Category.Pc, 2430.00, ['pcGaming_1.png']),
    new Product(21, 'XTREME GAMER PC DIABLO V33', 'AMD Ryzen 7 7700X @ 5,6 GHz; Water Cooling 280 RGB; 32GB DDR 5 RAM with RGB; 1TB SSD M.2 + 1TB HDD; Bluetooth & WLAN; NVIDIA GeForce RTX 4070 TI OC', Category.Pc, 3108.11, ['pcGaming_2.png']),
    new Product(22, 'PC Gaming SUPER | Gorillab', 'Il nuovo iPhone 12', Category.Pc, 3375.14, ['pcGaming_3.png']),
    new Product(23, 'SCUF® H1 Cuffia', 'Gaming Headset | For Playstation, Xbox, PC | SCUF® H1', Category.Headphones, 149.99, ['cuffie_1.png']),
    new Product(24, 'G733 Cuffia', 'G733 Cuffia con microfono gaming wireless RGB LIGHTSPEED', Category.Headphones, 198.08, ['cuffie_2.png']),
    new Product(25, 'Astro A20 Cuffia', 'Cuffia senza fili ASTRO A20 per PS4 e PS5 | ASTRO Gaming', Category.Headphones, 139.09, ['cuffie_3.png']),
    new Product(26, 'Ezdirect Cuffia', 'cuffia per lavorare in ufficio e a casa - Ezdirect', Category.Headphones, 49.99, ['cuffie_4.png']),
    new Product(27, 'Logitech Cuffia', 'Cuffie con microfono - Wireless, USB, Bluetooth | Logitech', Category.Headphones, 39.99, ['cuffie_5.png']),
    new Product(28, 'Monitor Dell UltraSharp de 31,5" 4K Hub USB-C U3223QE', 'Monitor Dell UltraSharp de 31,5" 4K Hub USB-C U3223QE', Category.Monitor, 1102.88, ['mon_1.png']),
    new Product(29, 'Monitor HRM ViewFinity Serie S8 - S80PB da 27" UHD Flat', 'Monitor HRM ViewFinity Serie S8 - S80PB da 27" UHD Flat', Category.Monitor, 569.99, ['mon_2.png']),
    new Product(30, 'Monitor Dell 27 - C2723H', 'Monitor per videoconferenze Dell 27 - C2723H', Category.Monitor, 268.25, ['mon_3.png']),
    new Product(31, 'Xiaomi 4K Monitor 27"', 'Xiaomi 4K Monitor 27 pollici - Xiaomi Italia', Category.Monitor, 599.99, ['mon_4.png']),
    new Product(32, 'Lenovo Tab P12 Pro', 'Lenovo Tab P12 Pro', Category.Tablet, 698.99, ['tab_1.png']),
    new Product(33, 'APPLE IPAD WI-FI', 'APPLE MK2K3TY/A 10.2-INCH IPAD WI-FI 64GB - SPACE GREY 2021', Category.Tablet, 729.99, ['iPad_1.png', 'iPad_2.png']),
    new Product(34, 'APPLE iPad Pro 12.9', 'APPLE iPad Pro 12.9" Chip M2 (6ª Generazione) Wi-Fi 256GB Grigio Siderale', Category.Tablet, 1282.99, ['iPadPro_1.png']),
    new Product(35, 'TRUST Tastiera da Gaming', 'TRUST 22631 GXT865 ASTA TASTIERA GAMING MECCANICA RGB ITA', Category.Keyboard, 42.49, ['tast_1.png']),
    new Product(36, 'Corsair Tastiera', 'Corsair Tastiera Gaming K60 RGB PRO', Category.Keyboard, 139.99, ['tast_2.png']),
    new Product(37, 'x40 Tastiera', 'Tastiera gaming x40 - una mano, console/pc, meccanica, ls switch, rgb, macro e turbo, jack cuffie e mouse, 3d joystick, 3xusb', Category.Keyboard, 60.01, ['tast_3.png']),
    new Product(38, 'Netbook Laptop', 'Computer portatile da 11.6 pollici Netbook 2in1 Tablet PC molto facile da usare con adesivo computerizzato interno', Category.Laptop, 419.98, ['port_1.png']),
    new Product(39, 'Lenovo Laptop', 'Portatili Lenovo IdeaPad | Lenovo Italia', Category.Laptop, 512.99, ['port_2.png']),
    new Product(40, 'MacBook Air (13", M2, 2022)', 'MacBook Air (13", M2, 2022)', Category.Laptop, 1229.90, ['mac_1.png', 'mac_2.png']),
    new Product(9, 'NVIDIA RTX 3080', 'La nuova scheda video di NVIDIA', Category.PcComponents, 699.99, ['3080.jpg']),
  ];

  private filterCategory = (p: Product, category: Category): boolean => {
    return p.category == category;
  }

  private filterName = (p: Product, name: string): boolean => {
    return p.name.toLowerCase().includes(name.toLowerCase());
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id == id);
  }

  getCategories(): Category[] {
    return Object.values(Category);
  }

  getProductsByCategory(category: Category, page: number = 1, pageSize: number = 18): Product[] {
    return this.getProducts(p => p.category == category, page, pageSize);
  }

  getProductsInCategory(category: Category, search: string, page: number = 1, pageSize: number = 18): Product[] {
    return this.getProducts(p => p.category == category && p.name.toLowerCase().includes(search.toLowerCase()), page, pageSize);
  }

  getProductsByName(search: string, page: number = 1, pageSize: number = 18): Product[] {
    return this.getProducts(p => p.name.toLowerCase().includes(search.toLowerCase()), page, pageSize);
  }

  private getProducts(predicate: (p: Product) => boolean, page: number = 1, pageSize: number = 18): Product[] {
    return this.products
      .filter(predicate)
      .slice((page - 1) * pageSize, page * pageSize);
  }

  getRandomCategory(): Category {
    const randomIndex = Math.floor(Math.random() * this.getCategories().length);
    return this.getCategories()[randomIndex];
  }

  getRandomProduct(category: Category = this.getRandomCategory()): Product {
    const products = this.getProductsByCategory(category);  // Get random only from the first page
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }

  getRandomCategories(quantity: number) {
    // Returns unique random categories
    const categories = this.getCategories();
    const randomCategories: Category[] = [];

    if (quantity > categories.length)
      quantity = categories.length;

    while (randomCategories.length <= quantity) {
      const randomCategory = this.getRandomCategory();
      if (!randomCategories.includes(randomCategory))
        randomCategories.push(randomCategory);
    }

    return randomCategories;
  }

  productPageCount(search: string, pageSize: number = 18): number {
    return Math.ceil(this.products.filter(p => this.filterName(p, search)).length / pageSize);
  }

  categoryPageCount(category: Category, pageSize: number = 18): number {
    return Math.ceil(this.products.filter(p => this.filterCategory(p, category)).length / pageSize);
  }

  productsInCategoryPageCount(category: Category, searchString: string, pageSize: number = 18): number {
    return Math.ceil(this.products.filter(p => this.filterCategory(p, category) && this.filterName(p, searchString)).length / pageSize);
  }
}
