import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const categoriesData: Prisma.CategoryCreateInput[] = [
  {
    description: 'Burguer',
  },
  {
    description: 'Acompanhamento',
  },
  {
    description: 'Bebida',
  },
  {
    description: 'Sobremesa',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  categoriesData.forEach(async c => {
    const category = await prisma.category.create({
      data: c,
    });
    console.log(`Created category with id: ${category.id}`);
  });
}

console.log(`Seeding finished.`);

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
