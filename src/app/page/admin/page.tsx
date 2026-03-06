import { Users, Trophy, Award, UserCheck, Star } from "lucide-react";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

// Data Service
import { prisma } from "@/lib/prisma";

// Components
import { StatCard } from "./components/StatCard";
import { RecentActivity } from "./components/RecentActivity";
import { ExpiringCompetitions } from "./components/ExpiringCompetitions";

export default async function AdminDashboard() {
  const session = await getSession();

  if (!session || session.role !== "ADMIN") {
    redirect("/page/login");
  }

  // Fetch real stats from database
  const [totalGuru, totalSiswa, activeCompetitions, totalPrestasi] = await Promise.all([
    prisma.user.count({ where: { role: "GURU" } }),
    prisma.student.count(),
    prisma.competition.count({ where: { isActive: true } }),
    prisma.achievement.count({ where: { status: "TERVERIFIKASI" } }),
  ]);

  const stats = {
    totalGuru,
    totalSiswa,
    activeCompetitions,
    totalPrestasi,
  };

  const statCards = [
    { label: "Total Guru", value: stats.totalGuru, icon: Users, color: "bg-emerald-500", trend: "Data Terbaru" },
    { label: "Total Siswa", value: stats.totalSiswa, icon: UserCheck, color: "bg-emerald-400", trend: "Data Terbaru" },
    { label: "Kompetisi Aktif", value: stats.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Sedang berjalan" },
    { label: "Total Prestasi", value: stats.totalPrestasi, icon: Star, color: "bg-emerald-500", trend: "Terverifikasi" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Selamat datang kembali, {session.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <ExpiringCompetitions />
      </div>
    </div>
  );
}
