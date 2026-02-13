"use client";

import { Send } from "lucide-react";

export default function GuruIndependentSubmissions() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengajuan Kompetisi Mandiri</h1>
          <p className="text-gray-500 mt-1">Kelola pengajuan prestasi mandiri oleh siswa.</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={32} />
        </div>
        <h3 className="text-lg font-bold text-gray-900">Halaman Sedang Dikembangkan</h3>
        <p className="text-gray-500 mt-2 max-w-sm mx-auto">
          Fitur untuk memproses pengajuan mandiri sedang dalam tahap pengerjaan. Segera hadir!
        </p>
      </div>
    </div>
  );
}
