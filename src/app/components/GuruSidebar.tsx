"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Trophy,
  Newspaper,
  Settings,
  LogOut,
  Menu,
  X,
  Award,
  Send
} from "lucide-react";

export default function GuruSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

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

  const menuItems = [
    { name: "Dashboard", href: "/page/guru", icon: LayoutDashboard },
    { name: "Kompetisi", href: "/page/guru/competitions", icon: Trophy },
    { name: "Pengajuan Kompetisi Mandiri", href: "/page/guru/independent-submissions", icon: Send },
    { name: "Prestasi Siswa", href: "/page/guru/achievements", icon: Award },
    { name: "Pengumuman", href: "/page/guru/announcements", icon: Newspaper },
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
            <Menu size={24} className="text-emerald-700" />
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
            <p className="text-xs text-gray-500 mt-1">Guru Panel</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                  ? "bg-emerald-50 text-emerald-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
              >
                <Icon size={20} className={isActive ? "text-emerald-600" : "text-gray-400 group-hover:text-gray-600"} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut size={20} />
            <span>{isLoggingOut ? "Keluar..." : "Keluar"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
