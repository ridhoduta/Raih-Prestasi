"use client";

import { getAchievements, Achievement } from "@/app/service/guruAchievementsAPI";
import { Award, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function GuruAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const response = await getAchievements();
        setAchievements(response.data ?? []);
      } catch (error) {
        setError("Gagal memuat data prestasi");
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Prestasi Siswa</h1>
            <p className="text-gray-500 mt-1">Daftar semua prestasi siswa yang Anda bimbing.</p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-12">
            <Loader2 className="animate-spin text-emerald-600 mb-2" size={40} />
            <p className="text-gray-500">Memuat data...</p>
          </div>
        ) : error ? (
          <div className="p-4 text-red-600 font-medium bg-red-50 rounded-md">{error}</div>
        ) : (
          <div className="bg-white shadow-lg border border-gray-100 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">

              {achievements.map((achievement) => (
                <div key={achievement.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-800">{achievement.competitionName}</h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${achievement.status === 'VERIFIED' ? 'bg-green-100 text-green-700' :
                        achievement.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                        {achievement.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Hasil / Prestasi</p>
                          <p className="text-gray-700 mt-1">{achievement.result}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Mahasiswa / Siswa</p>
                          <p className="text-gray-900 font-medium mt-1">{achievement.student.name}</p>
                          <p className="text-sm text-gray-600">NISN: {achievement.student.nisn}</p>
                          <p className="text-sm text-gray-600">Kelas: {achievement.student.kelas}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Waktu Pengajuan</p>
                          <p className="text-gray-700 mt-1">{new Date(achievement.createdAt).toLocaleString('id-ID', {
                            dateStyle: 'long',
                            timeStyle: 'short'
                          })}</p>
                        </div>
                        {achievement.guru && (
                          <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Diverifikasi Oleh</p>
                            <p className="text-gray-700 mt-1">{achievement.guru.name}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-50">
                      <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wider">Sertifikat / Bukti</p>
                      <div className="flex flex-wrap gap-3">
                        {achievement.certificate ? (
                          <a
                            href={achievement.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition flex items-center gap-2"
                          >
                            <Award size={16} />
                            Lihat Sertifikat
                          </a>
                        ) : (
                          <p className="text-gray-400 text-sm italic">Tidak ada sertifikat dilampirkan</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
