// usecase/product/create/create.product.usecase.spec.ts
import { CreateProductUseCase } from "./create.product.usecase";
import { ProductRepositoryInterface } from "../../../domain/repository/product-repository.interface";

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create product use case", () => {
  it("should create a product", async () => {
    const productRepository = MockRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);

    const input = {
      id: "123",
      name: "Product 1",
      price: 100,
    };

    const output = await createProductUseCase.execute(input);

    expect(output).toEqual({
      id: input.id,
      name: input.name,
      price: input.price,
    });
    expect(productRepository.create).toHaveBeenCalled();
  });
});
