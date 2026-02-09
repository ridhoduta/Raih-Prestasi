"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

import { getTeacherDetail, updateTeacher } from "@/app/service/teachersAPI";

export default function EditTeacherPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "", // Optional: only if changing
    isActive: true,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchTeacher();
  }, [id]);

  async function fetchTeacher() {
    try {
      const response = await getTeacherDetail(id);
      if (response.success && response.data) {
        setFormData({
            name: response.data.name,
            email: response.data.email,
            password: "",
            isActive: response.data.isActive
        });
      } else {
        alert("Guru tidak ditemukan");
        router.push("/page/admin/teachers");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data guru");
    } finally {
      setIsLoading(false);
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const payload: any = {
        name: formData.name,
        email: formData.email,
        isActive: formData.isActive
      };

      if (formData.password) {
        payload.password = formData.password;
      }

      const response = await updateTeacher(id, payload);
      
      if (response.success) {
        router.push("/page/admin/teachers");
      } else {
        alert("Gagal memperbarui guru: " + response.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSaving(false);
    }
  };


  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="animate-spin text-emerald-600" size={32} />
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-gray-900">Edit Data Guru</h1>
          <p className="text-gray-500 mt-1">Perbarui informasi dan akses guru</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password (Opsional)</label>
          <input 
            type="password" 
            placeholder="Biarkan kosong jika tidak ingin mengubah password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-gray-900"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
           <p className="text-xs text-gray-500 mt-1">Isi hanya jika ingin mereset password guru ini.</p>
        </div>

        <div className="flex items-center gap-2 pt-2">
            <input 
              type="checkbox" 
              id="isActive"
              className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500 border-gray-300"
              checked={formData.isActive}
              onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
            />
            <label htmlFor="isActive" className="text-sm text-gray-700">Akun Aktif</label>
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
            disabled={isSaving}
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}
