"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, Edit, Trash2, Mail, Loader2 } from "lucide-react";

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchTeachers();
  }, []);

  async function fetchTeachers() {
    try {
      const res = await fetch("/api/admin/guru");
      const data = await res.json();
      if (data.success) {
        setTeachers(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch teachers", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Apakah Anda yakin ingin menghapus data guru ini?")) return;

    try {
      const res = await fetch(`/api/admin/guru/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setTeachers(teachers.filter((t) => t.id !== id));
      } else {
        alert("Gagal menghapus guru: " + data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus data.");
    }
  }

  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Data Guru</h1>
          <p className="text-gray-500 mt-1">Kelola akun guru dan akses sistem</p>
        </div>
        
        <Link 
          href="/page/admin/teachers/new"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
        >
          <Plus size={18} />
          Tambah Guru
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Cari nama atau email guru..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {isLoading ? (
          <div className="p-12 text-center text-gray-500 flex justify-center">
            <Loader2 className="animate-spin text-emerald-600" />
          </div>
        ) : (
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Nama Guru</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      {teacher.name.substring(0, 2).toUpperCase()}
                    </div>
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-gray-400" />
                      {teacher.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      teacher.isActive 
                        ? "bg-green-50 text-green-700 border-green-100" 
                        : "bg-gray-50 text-gray-600 border-gray-100"
                    }`}>
                      {teacher.isActive ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <Link 
                      href={`/page/admin/teachers/${teacher.id}/edit`}
                      className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" 
                      title="Edit"
                    >
                      <Edit size={16} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(teacher.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" 
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!isLoading && filteredTeachers.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            Belum ada data guru.
          </div>
        )}
      </div>
    </div>
  );
}
