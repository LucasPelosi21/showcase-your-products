import { Product, PrismaClient } from '@prisma/client';

export default class ProductService {
  private prisma = new PrismaClient();

  public show = async (id: number): Promise<Product> => {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new Error('Produto não encontrado');
    return product;
  };

  public list = async (): Promise<Product[]> => this.prisma.product.findMany();

  public store = async (data: Product): Promise<Product> =>
    this.prisma.product.create({ data });

  public update = async (id: number, data: Product): Promise<Product> =>
    this.prisma.product.update({
      where: {
        id,
      },
      data,
    });

  public remove = async (id: number): Promise<Product> =>
    this.prisma.product.delete({
      where: {
        id,
      },
    });
}
