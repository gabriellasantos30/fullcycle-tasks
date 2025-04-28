// usecase/product/list/list.product.usecase.ts
import { ProductRepositoryInterface } from "../../../domain/repository/product-repository.interface";

interface OutputListProductDto {
  products: {
    id: string;
    name: string;
    price: number;
  }[];
}

export class ListProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(): Promise<OutputListProductDto> {
    const products = await this.productRepository.findAll();
    return {
      products: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
      })),
    };
  }
}
