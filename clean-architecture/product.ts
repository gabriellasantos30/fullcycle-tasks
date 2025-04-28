// domain/entity/product.ts
export class Product {
    constructor(
      public id: string,
      public name: string,
      public price: number
    ) {}

    changeName(name: string) {
      this.name = name;
    }

    changePrice(price: number) {
      this.price = price;
    }
  }
