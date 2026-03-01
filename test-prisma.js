const { PrismaClient } = require('./src/generated/prisma');
const { withAccelerate } = require('@prisma/extension-accelerate');

const prisma = new PrismaClient().$extends(withAccelerate());

async function main() {
  try {
    console.log('Testing Prisma connection with Accelerate...');
    const userCount = await prisma.user.count();
    console.log(`Success! Connection established. Total users: ${userCount}`);
  } catch (error) {
    console.error('Connection failed:', error);
  } finally {
     // No disconnect for extended client in simple script if it causes issues
  }
}

main();
