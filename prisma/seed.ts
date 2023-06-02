import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { cities } from '../backend/src/constants/cities.constants';
const prisma = new PrismaClient();
async function main(arr: string[]) {
  const queries = arr.map((item)=> {
    return prisma.selfCheckout.upsert({
      where: { city: item },
      create: {
        city: item,
        selfCheckoutSections: {
          create:  { sectionNumber: faker.number.int({
                min: 1,
                max: 100,
              }),
              sectionAddress: faker.location.streetAddress(),
            },
        },
      },
      update: {}
    });
  })

  await Promise.all(queries)
}
main(cities)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
