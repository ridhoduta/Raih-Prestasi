import { prisma } from './src/lib/prisma';

async function main() {
  try {
    console.log('Testing Prisma connection with Accelerate...');
    const userCount = await prisma.user.count();
    console.log(`Success! Connection established. Total users: ${userCount}`);
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
