"use client";

import { Trophy, Award, Calendar, Bell, FilePlus, Loader2 } from "lucide-react";
import { useGuruDashboard } from "./hooks/useGuruDashboard";

export default function GuruDashboard() {
  const { session, stats, loading } = useGuruDashboard();

  const statCards = [
    { label: "Prestasi Siswa", value: stats?.totalPrestasiSiswa, icon: Award, color: "bg-emerald-500", trend: "Bulan ini" },
    { label: "Kompetisi Aktif", value: stats?.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Berlangsung" },
    { label: "Pengajuan Mandiri", value: stats?.pendingSubmissions, icon: FilePlus, color: "bg-blue-500", trend: "Menunggu" },
    { label: "Pengumuman", value: stats?.announcements, icon: Bell, color: "bg-emerald-400", trend: "Terbaru" },
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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Guru</h1>
        <p className="text-gray-500 mt-1">Selamat datang {session?.name}, mari pantau prestasi siswa!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          const colorClass = stat.color.replace('bg-', 'text-');
          const borderClass = stat.color.replace('bg-', 'border-');

          return (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl border-2 ${borderClass} ${colorClass} bg-transparent`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm">
                <span className={`font-medium px-2 py-0.5 rounded-full text-xs ${colorClass} ${stat.color.replace('bg-', 'bg-').replace('500', '50').replace('600', '50').replace('400', '50')}`}>
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
