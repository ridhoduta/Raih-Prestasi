"use client";

import { Trophy, Award, Calendar, Bell, FilePlus, Loader2, CheckCircle, ClipboardList, Users, ArrowRight, MessageSquare, Activity } from "lucide-react";
import { useGuruDashboard } from "./hooks/useGuruDashboard";
import Link from "next/link";
import { ExpiringCompetitions } from "../admin/components/ExpiringCompetitions";
import { RecentActivity } from "../admin/components/RecentActivity";

export default function GuruDashboard() {
  const { session, stats, loading } = useGuruDashboard();

  const statCards = [
    { label: "Prestasi Siswa", value: stats?.totalPrestasiSiswa, icon: Award, color: "bg-emerald-500", trend: "Terverifikasi", description: "Total prestasi yang diakui" },
    { label: "Kompetisi Aktif", value: stats?.activeCompetitions, icon: Trophy, color: "bg-emerald-600", trend: "Berlangsung", description: "Lomba yang sedang dibuka" },
    { label: "Pengumuman", value: stats?.announcements, icon: Bell, color: "bg-emerald-400", trend: "Sistem", description: "Informasi terbaru sekolah" },
  ];

  const taskCards = [
    { label: "Pengajuan Mandiri", value: stats?.pendingSubmissions, icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", href: "/page/guru/independent-submissions" },
    { label: "Verifikasi Prestasi", value: stats?.pendingAchievements, icon: Award, color: "text-amber-600", bg: "bg-amber-50", href: "/page/guru/achievement" },
    { label: "Review Registrasi", value: stats?.pendingRegistrations, icon: ClipboardList, color: "text-purple-600", bg: "bg-purple-50", href: "/page/guru/registrations" },
  ];

  if (loading) {
    return (
      <div className="space-y-8 animate-pulse p-4 md:p-8">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
          <div className="h-4 w-64 bg-gray-100 rounded-lg mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-32"></div>
          ))}
        </div>

        <div className="h-64 bg-white rounded-3xl border border-gray-100 shadow-sm"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Guru</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-2">
            Selamat datang <span className="font-semibold text-emerald-600">{session?.name}</span>, mari pantau prestasi siswa!
          </p>
        </div>
        <div className="flex gap-2">
            <Link href="/page/guru/competitions/new" className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all font-medium shadow-lg shadow-emerald-200">
                <FilePlus size={18} />
                Buat kompetisi
            </Link>
        </div>
      </div>

      {/* 2.2 Validasi & Review (Core Feature / Task Center) */}
      <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-emerald-800 rounded-lg">
                    <CheckCircle size={20} className="text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold">Pusat Validasi & Review</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {taskCards.map((task) => (
                    <Link key={task.label} href={task.href} className="bg-white rounded-2xl p-5 group hover:scale-[1.02] transition-all">
                        <div className="flex justify-between items-start mb-3">
                            <div className={`p-2.5 rounded-xl ${task.bg} ${task.color}`}>
                                <task.icon size={22} />
                            </div>
                            <span className="text-gray-400 group-hover:text-emerald-600 transition-colors">
                                <ArrowRight size={18} />
                            </span>
                        </div>
                        <p className={`text-3xl font-bold ${task.color}`}>{task.value ?? 0}</p>
                        <p className="text-sm font-semibold text-gray-500 mt-1">{task.label}</p>
                        <p className="text-xs text-emerald-600 font-bold mt-3">Butuh Review</p>
                    </Link>
                ))}
            </div>
        </div>
        {/* Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-emerald-50 text-emerald-600`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                    <span className="bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-full text-xs">
                        {stat.trend}
                    </span>
                </div>
                <p className="text-xs text-gray-400 font-medium">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* 2.3 Aktivitas Utama */}
          <RecentActivity activities={stats?.recentActivities || []} />
        </div>

        <div className="space-y-8">
          {/* 2.4 Aksi Cepat */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Activity size={20} className="text-emerald-600" />
                Aksi Cepat
            </h3>
            <div className="space-y-2">
                {[
                    { label: "Review Pengajuan", icon: ClipboardList, color: "text-blue-600 bg-blue-50", href: "/page/guru/independent-submissions" },
                    { label: "Verifikasi Prestasi", icon: Award, color: "text-emerald-600 bg-emerald-50", href: "/page/guru/achievement-verifications" },
                    { label: "Kelola Kompetisi", icon: Trophy, color: "text-purple-600 bg-purple-50", href: "/page/guru/competitions" },
                    // { label: "Pantau Siswa", icon: Users, color: "text-orange-600 bg-orange-50", href: "/page/guru/students" },
                    { label: "Buat Kompetisi", icon: FilePlus, color: "text-cyan-600 bg-cyan-50", href: "/page/guru/competitions/new" },
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
          
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Bell size={18} className="text-emerald-600" />
                Pengumuman
            </h3>
            <div className="space-y-3">
              {stats?.announcementsList && stats.announcementsList.length > 0 ? (
                stats.announcementsList.map((ann) => (
                  <div key={ann.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="p-2 bg-white rounded-lg border border-gray-100">
                      <Calendar size={14} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-1">{ann.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {new Date(ann.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 py-4 text-center">Belum ada pengumuman.</p>
              )}
              <Link href="/page/guru/announcements" className="block w-full py-2 text-center text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 rounded-xl mt-2">
                Lihat Semua
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

