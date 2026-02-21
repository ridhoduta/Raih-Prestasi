"use client";

import { getAchievements, Achievement, deleteAchievement } from "@/app/service/guruAchievementsAPI";
import { Award, Eye, File, Loader2, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function GuruAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | "MENUNGGU" | "TERVERIFIKASI" | "DITOLAK">("all");
  const router = useRouter();
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    id: "",
    title: "",
    message: ""
  });
  const [isDeleting, setIsDeleting] = useState(false);

  // mekanisme alert
  const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info"
  });
  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };
  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };
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

  // format tanggal 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  function handleEdit(achievement: Achievement) {
    router.push(`/page/guru/achievements/${achievement.id}`);
  }

  // mekanisme delete
  const initiateDelete = (id: string, name: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Pengajuan",
      message: `Apakah Anda yakin ingin menolak pengajuan prestasi "${name}"?`
    });
  };
  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDeleting(true);
    try {
      await deleteAchievement(confirmState.id, {
        status: "DITOLAK",
        verifiedBy: "14d8aa2c-ff9e-4696-9898-cf03584c4967",
      });
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Success", "Pengajuan berhasil dihapus.", "success");
      fetchAchievements();
    } catch (error) {
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
    } finally {
      setIsDeleting(false);
    }
  };
  useEffect(() => {
    fetchAchievements();
  }, [filterStatus]);
  const filteredAchievements = achievements.filter((achievement) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "MENUNGGU") return achievement.status === "MENUNGGU";
    if (filterStatus === "TERVERIFIKASI") return achievement.status === "TERVERIFIKASI";
    if (filterStatus === "DITOLAK") return achievement.status === "DITOLAK";
    return false;
  });


  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Prestasi Siswa</h1>
            <p className="text-gray-500 mt-1">Daftar semua prestasi siswa yang Anda bimbing.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setFilterStatus("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "text-gray-600 hover:bg-gray-50 border border-transparent"
                    }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setFilterStatus("MENUNGGU")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "MENUNGGU"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "text-gray-600 hover:bg-gray-50 border border-transparent"
                    }`}
                >
                  Menunggu
                </button>
                <button
                  onClick={() => setFilterStatus("TERVERIFIKASI")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "TERVERIFIKASI"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "text-gray-600 hover:bg-gray-50 border border-transparent"
                    }`}
                >
                  Terverifikasi
                </button>
                <button
                  onClick={() => setFilterStatus("DITOLAK")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "DITOLAK"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "text-gray-600 hover:bg-gray-50 border border-transparent"
                    }`}
                >
                  Ditolak
                </button>
              </div>
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">Judul</th>
                    <th className="px-6 py-4">Nama</th>
                    <th className="px-6 py-4">Nama Kompetisi</th>
                    <th className="px-6 py-4">Hasil</th>
                    <th className="px-6 py-4">Sertifikat</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Tanggal</th>
                    <th className="px-6 py-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredAchievements.map((achievement) => (
                    <tr key={achievement.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <Award size={16} />
                          </div>
                          {achievement.title}
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          {achievement.student.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          {achievement.competitionName}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          {achievement.result}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                            <File size={16} />
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${achievement.status === "TERVERIFIKASI"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-gray-50 text-gray-600 border-gray-100"
                          }`}>
                          {achievement.status === "MENUNGGU" ? "MENUNGGU" : achievement.status === "TERVERIFIKASI" ? "TERVERIFIKASI" : "DITOLAK"}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          {formatDate(achievement.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(achievement)}
                          className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                          title="Lihat"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => initiateDelete(achievement.id, achievement.student.name)}
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
            </div>
          )}
        </div>
        <AlertModal
          isOpen={alertState.isOpen}
          title={alertState.title}
          message={alertState.message}
          type={alertState.type}
          onClose={closeAlert}
        />
        <ConfirmModal
          isOpen={confirmState.isOpen}
          onClose={() => setConfirmState({ ...confirmState, isOpen: false })}
          onConfirm={handleConfirmDelete}
          title={confirmState.title}
          message={confirmState.message}
          isLoading={isDeleting}
        />
      </div>
    </>
  );
}
