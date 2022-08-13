import { prisma } from '.';
import { distanceDialingCostSeed } from './seeds/distanceDialingCostSeed';
import { keepTalkingDiscountSeed } from './seeds/keepTalkingDiscountSeed';

const seed = async () => {
  await distanceDialingCostSeed();
  await keepTalkingDiscountSeed();
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
