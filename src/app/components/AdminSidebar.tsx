"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Newspaper, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/page/admin", icon: LayoutDashboard },
    { name: "Data Guru", href: "/page/admin/teachers", icon: Users },
    { name: "Kategori", href: "/page/admin/categories", icon: Trophy },
    { name: "Tingkat", href: "/page/admin/levels", icon: Settings },
    { name: "Berita Sekolah", href: "/page/admin/news", icon: Newspaper },
    // { name: "Pengaturan", href: "/page/admin/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {isMobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-40 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-emerald-600">
            Raih Prestasi
          </h1>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
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
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
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
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors"
            onClick={() => console.log('Logout')}
          >
            <LogOut size={20} />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </>
  );
}
