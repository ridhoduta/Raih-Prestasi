"use client";

import { useEffect, useState } from "react";
import { Trophy, Award, Calendar, Loader2, Newspaper, Send } from "lucide-react";

export default function GuruDashboard() {
  const [stats, setStats] = useState({
    totalPrestasiSiswa: 0,
    activeCompetitions: 0,
    pendingSubmissions: 0,
    announcements: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching stats
    const timer = setTimeout(() => {
      setStats({
        totalPrestasiSiswa: 12,
        activeCompetitions: 5,
        pendingSubmissions: 3,
        announcements: 8,
      });
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    { label: "Prestasi Siswa", value: stats.totalPrestasiSiswa, icon: Award, color: "bg-emerald-500", trend: "Bulan ini" },
    { label: "Kompetisi Aktif", value: stats.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Berlangsung" },
    { label: "Pengajuan Mandiri", value: stats.pendingSubmissions, icon: Send, color: "bg-blue-500", trend: "Menunggu" },
    { label: "Pengumuman", value: stats.announcements, icon: Newspaper, color: "bg-emerald-400", trend: "Terbaru" },
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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Guru</h1>
        <p className="text-gray-500 mt-1">Selamat datang di Panel Guru, mari pantau prestasi siswa!</p>
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
          <h3 className="font-bold text-gray-900 mb-4">Aktivitas Prestasi Terbaru</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">John Doe mendapatkan Juara 1 Lomba Matematika</p>
                <p className="text-xs text-gray-500">2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                AS
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Alice Smith mengajukan prestasi mandiri baru</p>
                <p className="text-xs text-gray-500">5 jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Pengumuman Terkini</h3>
          <div className="space-y-3">
             <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Calendar size={18} className="text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Persiapan Lomba O2SN 2026</p>
                  <p className="text-xs text-gray-500">Diterbitkan 1 hari yang lalu</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Calendar size={18} className="text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Jadwal Verifikasi Sertifikat</p>
                  <p className="text-xs text-gray-500">Diterbitkan 3 hari yang lalu</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
