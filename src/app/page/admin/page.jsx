"use client";

import { useEffect, useState } from "react";
import { Users, Trophy, Award, Calendar, Loader2 } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalGuru: 0,
    totalSiswa: 0,
    activeCompetitions: 0,
    totalPrestasi: 0,
    recentActivities: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/dashboard");
        const data = await res.json();
        if (data.success) {
          setStats(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Guru", value: stats.totalGuru, icon: Users, color: "bg-emerald-500", trend: "Data Terbaru" },
    { label: "Total Siswa", value: stats.totalSiswa, icon: Award, color: "bg-emerald-400", trend: "Data Terbaru" },
    { label: "Kompetisi Aktif", value: stats.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Sedang berjalan" },
    { label: "Total Prestasi", value: stats.totalPrestasi, icon: Award, color: "bg-emerald-500", trend: "Terverifikasi" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 size={40} className="animate-spin text-emerald-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Selamat datang kembali, Admin!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 text-${stat.color.replace('bg-', '')}`}>
                  <Icon size={24} className={stat.color.replace('bg-', 'text-')} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm">
                <span className="text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full text-xs">
                  {stat.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Aktivitas Terbaru</h3>
          <div className="space-y-4">
            {stats.recentActivities.length > 0 ? (
              stats.recentActivities.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs">
                    GU
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                    <p className="text-xs text-gray-500">{new Date(activity.time).toLocaleString()}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Belum ada aktivitas.</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Kompetisi Segera Berakhir</h3>
          <div className="space-y-3">
             {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Calendar size={18} className="text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Olimpiade Matematika Nasional</p>
                  <p className="text-xs text-gray-500">Berakhir dalam 2 hari</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
