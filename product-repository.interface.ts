// domain/repository/product-repository.interface.ts
import { Product } from "../entity/product";

export interface ProductRepositoryInterface {
  create(product: Product): Promise<void>;
  find(id: string): Promise<Product>;
  findAll(): Promise<Product[]>;
  update(product: Product): Promise<void>;
}
