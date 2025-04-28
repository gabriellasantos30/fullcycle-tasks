// usecase/product/create/create.product.usecase.ts
import { ProductRepositoryInterface } from "../../../domain/repository/product-repository.interface";
import { Product } from "../../../domain/entity/product";

interface InputCreateProductDto {
  id: string;
  name: string;
  price: number;
}

interface OutputCreateProductDto {
  id: string;
  name: string;
  price: number;
}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
    const product = new Product(input.id, input.name, input.price);
    await this.productRepository.create(product);
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
