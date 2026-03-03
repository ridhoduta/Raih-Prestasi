import { PrismaClient } from "./src/generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcrypt";
import "dotenv/config";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL
}).$extends(withAccelerate());

async function main() {
  const password = await bcrypt.hash("12345678", 10);

  // Setup Admin (Matching auth.spec.ts)
  const adminPassword = await bcrypt.hash("admin123", 10);
  await prisma.user.upsert({
    where: { email: "admin@raihprestasi.id" },
    update: { password: adminPassword, isActive: true, role: "ADMIN" },
    create: {
      name: "Test Admin",
      email: "admin@raihprestasi.id",
      password: adminPassword,
      role: "ADMIN",
      isActive: true,
    },
  });

  // Setup Guru (Matching auth.spec.ts)
  const guruPassword = await bcrypt.hash("12345678", 10);
  await prisma.user.upsert({
    where: { email: "wicak@gmail.com" },
    update: { password: guruPassword, isActive: true, role: "GURU" },
    create: {
      name: "Test Guru Wicak",
      email: "wicak@gmail.com",
      password: guruPassword,
      role: "GURU",
      isActive: true,
    },
  });

  // Setup legacy Guru for failure test (TC-G02)
  await prisma.user.upsert({
    where: { email: "wicak@gmail.com" },
    update: { password, isActive: true, role: "GURU" },
    create: {
      name: "Legacy Guru",
      email: "wicak@gmail.com",
      password,
      role: "GURU",
      isActive: true,
    },
  });

  // Setup Student
  await prisma.student.upsert({
    where: { nisn: "1234567890" },
    update: { password, isActive: true },
    create: {
      name: "Test Student",
      nisn: "1234567890",
      password,
      kelas: "12-A",
      angkatan: 2024,
      isActive: true,
    },
  });

  console.log("Test users created successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
