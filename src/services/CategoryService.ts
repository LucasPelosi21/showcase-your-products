import { Category, PrismaClient } from '@prisma/client';

export default class ProductService {
  private prisma = new PrismaClient();

  public show = async (id: number): Promise<Category> => {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (!category) throw new Error('Categoria não encontrada');
    return category;
  };

  public list = async (): Promise<Category[]> =>
    this.prisma.category.findMany();
}
