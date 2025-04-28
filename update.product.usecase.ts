// usecase/product/update/update.product.usecase.ts
import { ProductRepositoryInterface } from "../../../domain/repository/product-repository.interface";

interface InputUpdateProductDto {
  id: string;
  name: string;
  price: number;
}

interface OutputUpdateProductDto {
  id: string;
  name: string;
  price: number;
}

export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(input: InputUpdateProductDto): Promise<OutputUpdateProductDto> {
    const product = await this.productRepository.find(input.id);
    product.changeName(input.name);
    product.changePrice(input.price);
    await this.productRepository.update(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
