// usecase/product/find/find.product.usecase.ts
import { ProductRepositoryInterface } from "../../../domain/repository/product-repository.interface";

interface InputFindProductDto {
  id: string;
}

interface OutputFindProductDto {
  id: string;
  name: string;
  price: number;
}

export class FindProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(input: InputFindProductDto): Promise<OutputFindProductDto> {
    const product = await this.productRepository.find(input.id);
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
