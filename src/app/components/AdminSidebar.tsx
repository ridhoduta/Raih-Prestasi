"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Newspaper,
  LogOut,
  Menu,
  X,
  Bell,
  Award,
  ClipboardList,
  UserCheck,
  TrendingUp,
  Layers,
  FileText,
  Trophy
} from "lucide-react";
import { usePendingCounts } from "../page/guru/hooks/usePendingCounts";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { data: pendingCounts = { registrations: 0, submissions: 0, achievements: 0 } } = usePendingCounts();

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/page/login");
        router.refresh();
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const menuGroups = [
    {
      title: "Dasbor",
      items: [
        { name: "Dashboard", href: "/page/admin", icon: LayoutDashboard },
      ]
    },
    {
      title: "Manajemen Kompetisi",
      items: [
        { name: "Kompetisi", href: "/page/admin/competitions", icon: Trophy, count: pendingCounts.registrations },
        // { name: "Pendaftaran", href: "/page/admin/registrations", icon: ClipboardList, count: pendingCounts.registrations },
        { name: "Pengajuan Mandiri", href: "/page/admin/independent-submissions", icon: FileText, count: pendingCounts.submissions },
        { name: "Prestasi Siswa", href: "/page/admin/achievements", icon: Award, count: pendingCounts.achievements },
        { name: "Akademik", href: "/page/admin/academic", icon: TrendingUp },
      ]
    },
    {
      title: "Data Master",
      items: [
        { name: "Data Siswa", href: "/page/admin/students", icon: Users },
        { name: "Data Guru", href: "/page/admin/teachers", icon: UserCheck },
        { name: "Kategori", href: "/page/admin/categories", icon: Layers },
        { name: "Tingkat", href: "/page/admin/levels", icon: TrendingUp },
      ]
    },
    {
      title: "Pemberitaan",
      items: [
        { name: "Berita Sekolah", href: "/page/admin/news", icon: Newspaper },
        { name: "Pengumuman", href: "/page/admin/announcements", icon: Bell },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold text-lg text-emerald-600">Raih Prestasi</span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-emerald-600">
              Raih Prestasi
            </h1>
            <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {menuGroups.map((group) => (
            <div key={group.title} className="space-y-1">
              <h3 className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                {group.title}
              </h3>
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${isActive
                      ? "bg-emerald-50 text-emerald-600 font-bold shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <Icon size={18} className={isActive ? "text-emerald-600" : "text-gray-400 group-hover:text-gray-600"} />
                    <div className="flex-1 flex items-center justify-between overflow-hidden">
                      <span className="text-sm truncate">{item.name}</span>
                      {((item as any).count ?? 0) > 0 && (
                        <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[10px] font-bold text-white bg-red-500 rounded-full shadow-sm">
                          {(item as any).count}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">{isLoggingOut ? "Keluar..." : "Keluar"}</span>
          </button>
        </div>
      </div>
    </>
  );
}

