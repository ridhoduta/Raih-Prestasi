"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

  import { useRouter } from "next/navigation";

  export default function AddTeacherPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      
      try {
        const res = await fetch("/api/admin/guru", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        const data = await res.json();
        
        if (data.success) {
          router.push("/page/admin/teachers");
        } else {
          alert("Gagal menambahkan guru: " + data.message);
        }
      } catch (error) {
        alert("Terjadi kesalahan saat menyimpan data.");
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/page/admin/teachers"
          className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tambah Guru Baru</h1>
          <p className="text-gray-500 mt-1">Buat akun untuk guru agar bisa mengakses sistem</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              required
              placeholder="Contoh: Budi Santoso, S.Pd"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Sekolah</label>
            <input 
              type="email" 
              required
              placeholder="nama@sekolah.sch.id"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              placeholder="Minimal 8 karakter"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <p className="text-xs text-gray-400 mt-1">Password bisa diubah nanti oleh guru.</p>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-3">
          <Link
            href="/page/admin/teachers"
            className="flex-1 px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
          >
            Batal
          </Link>
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-blue-200"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Simpan Data
          </button>
        </div>
      </form>
    </div>
  );
}
