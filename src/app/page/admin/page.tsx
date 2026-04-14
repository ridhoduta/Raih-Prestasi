"use client";

import { 
  Users, 
  Trophy, 
  Award, 
  UserCheck, 
  Star, 
  Bell, 
  PlusCircle, 
  LayoutDashboard, 
  Search, 
  Settings,
  ClipboardList,
  FileText,
  Newspaper,
  Layers
} from "lucide-react";
import { useAdminDashboard } from "./hooks/useAdminDashboard";
import Link from "next/link";

// Components
import { StatCard } from "./components/StatCard";
import { RecentActivity } from "./components/RecentActivity";
import { ExpiringCompetitions } from "./components/ExpiringCompetitions";
import { ChartSection } from "./components/ChartSection";

export default function AdminDashboard() {
  const { session, stats, loading } = useAdminDashboard();

  const statCards = [
    { 
      label: "Total Guru", 
      value: stats?.totalGuru, 
      icon: Users, 
      color: "bg-emerald-500", 
      trend: "Management Role",
      description: "Data guru aktif di sistem"
    },
    { 
      label: "Total Siswa", 
      value: stats?.totalSiswa, 
      icon: UserCheck, 
      color: "bg-emerald-400", 
      trend: `${stats?.activeStudents} Aktif`, 
      description: `${stats?.inactiveStudents} siswa nonaktif`
    },
    { 
      label: "Kompetisi", 
      value: stats?.totalCompetitions, 
      icon: Trophy, 
      color: "bg-emerald-600", 
      trend: `${stats?.activeCompetitions} Berjalan`,
      description: `${stats?.inactiveCompetitions} kompetisi selesai`
    },
    { 
      label: "Total Prestasi", 
      value: stats?.totalPrestasi, 
      icon: Star, 
      color: "bg-emerald-500", 
      trend: "Terverifikasi",
      description: "Prestasi siswa tercatat"
    },
    { 
      label: "Total Pengumuman", 
      value: stats?.totalAnnouncements, 
      icon: Bell, 
      color: "bg-blue-500", 
      trend: "Published",
      description: "Informasi sistem aktif"
    },
  ];

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse p-4 md:p-8">
        <div className="space-y-2">
            <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
            <div className="h-4 w-64 bg-gray-100 rounded-lg mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-32"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-64"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 p-4 md:p-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Admin</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Selamat datang kembali, <span className="font-semibold text-emerald-600">{session?.name}</span>
          </p>
        </div>
        <div className="flex gap-3">
            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
                <Search size={20} />
            </button>
            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors">
                <Settings size={20} />
            </button>
        </div>
      </div>

      {/* 1.1 - 1.2 Ringkasan Data Utas (Master Data) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value ?? 0}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
            description={stat.description}
          />
        ))}
      </div>

      {/* 1.4 Statistik & Tren Sistem */}
      <ChartSection data={stats?.chartData} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {/* 1.5 Quick Understanding Actions */}
            <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                    {/* <h2 className="text-2xl font-bold mb-2">Pahami Peran Anda</h2> */}
                    <p className="text-emerald-100 mb-6 max-w-md">Kelola seluruh data utama sistem Raih Prestasi mulai dari siswa hingga pengumuman global.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { label: "Kelola Data Siswa", color: "bg-emerald-800/50 hover:bg-emerald-800", href: "/page/admin/students" },
                            { label: "Kelola Data Guru", color: "bg-emerald-800/50 hover:bg-emerald-800", href: "/page/admin/teachers" },
                            { label: "Kelola Berita", color: "bg-emerald-800/50 hover:bg-emerald-800", href: "/page/admin/news" },
                            { label: "Kelola Pengumuman", color: "bg-emerald-800/50 hover:bg-emerald-800", href: "/page/admin/announcements" }
                        ].map((btn) => (
                            <Link key={btn.label} href={btn.href} className={`px-4 py-3 rounded-xl ${btn.color} border border-white/10 transition-all flex items-center justify-between text-sm font-medium`}>
                                {btn.label}
                                <PlusCircle size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
            </div>

            {/* 1.3 Aktivitas Sistem */}
            <RecentActivity activities={stats?.recentActivities} />
        </div>

        <div className="space-y-8">
            {/* 1.6 Quick Action (System Control) */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <LayoutDashboard size={20} className="text-emerald-600" />
                    Aksi Cepat
                </h3>
                <div className="space-y-2">
                    {[
                        { label: "Atur Kompetisi", icon: Trophy, color: "text-purple-600 bg-purple-50", href: "/page/admin/competitions" },
                        { label: "Verifikasi Pendaftaran", icon: ClipboardList, color: "text-orange-600 bg-orange-50", href: "/page/admin/registrations" },
                        { label: "Review Pengajuan", icon: FileText, color: "text-rose-600 bg-rose-50", href: "/page/admin/independent-submissions" },
                        { label: "Verifikasi Prestasi", icon: Award, color: "text-indigo-600 bg-indigo-50", href: "/page/admin/achievements" },
                        { label: "Tambah Siswa", icon: Users, color: "text-blue-600 bg-blue-50", href: "/page/admin/students" },
                        { label: "Tambah Guru", icon: UserCheck, color: "text-emerald-600 bg-emerald-50", href: "/page/admin/teachers" },
                        { label: "Kelola Berita", icon: Newspaper, color: "text-cyan-600 bg-cyan-50", href: "/page/admin/news" },
                        { label: "Buat Pengumuman", icon: Bell, color: "text-teal-600 bg-teal-50", href: "/page/admin/announcements" },
                    ].map((item) => (
                        <Link 
                            key={item.label} 
                            href={item.href}
                            className="flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all group"
                        >
                            <div className={`p-2 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={18} />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <ExpiringCompetitions expiringCompetitions={stats?.expiringCompetitions || []} />
        </div>
      </div>
    </div>
  );
}

