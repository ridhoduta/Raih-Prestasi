"use client";

import { Users, Trophy, Award, UserCheck, Star } from "lucide-react";
import { useAdminDashboard } from "./hooks/useAdminDashboard";

// Components
import { StatCard } from "./components/StatCard";
import { RecentActivity } from "./components/RecentActivity";
import { ExpiringCompetitions } from "./components/ExpiringCompetitions";

export default function AdminDashboard() {
  const { session, stats, loading } = useAdminDashboard();

  const statCards = [
    { label: "Total Guru", value: stats?.totalGuru, icon: Users, color: "bg-emerald-500", trend: "Data Terbaru" },
    { label: "Total Siswa", value: stats?.totalSiswa, icon: UserCheck, color: "bg-emerald-400", trend: "Data Terbaru" },
    { label: "Kompetisi Aktif", value: stats?.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Sedang berjalan" },
    { label: "Total Prestasi", value: stats?.totalPrestasi, icon: Star, color: "bg-emerald-500", trend: "Terverifikasi" },
  ];

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
          <div className="h-4 w-64 bg-gray-100 rounded-lg mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-100 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="p-3 rounded-xl bg-gray-100 h-12 w-12"></div>
              </div>
              <div className="mt-4 h-4 w-16 bg-gray-50 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-48">
              <div className="h-6 w-32 bg-gray-100 rounded mb-4"></div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-50 rounded-xl"></div>
                <div className="h-12 bg-gray-50 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Selamat datang kembali, {session?.name}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value ?? 0}
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
