import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { cities } from '../backend/src/constants/cities.constants';
const prisma = new PrismaClient();
async function main(arr: string[]) {
  for (const elem of arr) {
    const section = await prisma.selfCheckout.findFirst({
      where: { city: elem },
    });

    if (section) {
      await prisma.selfCheckoutSection.updateMany({
        where: { selfCheckoutId: section.id },
        data: {
          sectionNumber: faker.number.int({
            min: 1,
            max: 100,
          }),
          sectionAddress: faker.location.streetAddress(),
        },
      });
    } else {
      await prisma.selfCheckout.create({
        data: {
          city: elem,
          selfCheckoutSections: {
            create: {
              sectionNumber: faker.number.int({
                min: 1,
                max: 100,
              }),
              sectionAddress: faker.location.streetAddress(),
            },
          },
        },
      });
    }
  }
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
