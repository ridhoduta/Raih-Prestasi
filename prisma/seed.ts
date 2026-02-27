
import { UserRole } from "@prisma/client";
import { prisma } from "../src/lib/prisma";
import bcrypt from "bcrypt";

async function main(): Promise<void> {
  console.log("🔥 SEED SCRIPT STARTED");
  const emailAdmin =
    process.env.SUPER_ADMIN_EMAIL || "admin@raihprestasi.id";
    

  const passwordAdmin =
    process.env.SUPER_ADMIN_PASSWORD || "admin123";

  // cek apakah super admin sudah ada
  const existingAdmin = await prisma.user.findUnique({
    where: { email: emailAdmin },
  });

  if (existingAdmin) {
    console.log("✅ Super Admin sudah ada");
    return;
  }

  const hashedPassword = await bcrypt.hash(passwordAdmin, 10);
  console.log("📧 Email admin:", emailAdmin);
  await prisma.user.create({
    data: {
      name: "Super Admin",
      email: emailAdmin,
      password: hashedPassword,
      role: UserRole.ADMIN,
      isActive: true,
    },
  });
  console.log("✅ ADMIN CREATED");
  console.log("🚀 Super Admin berhasil dibuat");
}

main()
  .catch((error: unknown) => {
    console.error("❌ Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
