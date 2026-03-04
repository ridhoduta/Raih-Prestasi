"use client";

import { getAchievements, Achievement, deleteAchievement } from "@/app/service/guruAchievementsAPI";
import { Award, Eye, File, Loader2, Trash2, Calendar, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

export default function GuruAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
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
    return (
      <div className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
        <Calendar size={14} />
        {date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    );
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
      await deleteAchievement(confirmState.id);
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
    const matchesStatus = filterStatus === "all" || achievement.status === filterStatus;
    const searchString = searchTerm.toLowerCase();
    const titleMatch = (achievement.title || "").toLowerCase().includes(searchString);
    const studentMatch = (achievement.student?.name || "").toLowerCase().includes(searchString);
    const competitionMatch = (achievement.competitionName || "").toLowerCase().includes(searchString);
    return matchesStatus && (titleMatch || studentMatch || competitionMatch);
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

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Cari judul, nama siswa, atau kompetisi..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm cursor-pointer text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "all"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                  }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilterStatus("MENUNGGU")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "MENUNGGU"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                  }`}
              >
                Menunggu
              </button>
              <button
                onClick={() => setFilterStatus("TERVERIFIKASI")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "TERVERIFIKASI"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                  }`}
              >
                Terverifikasi
              </button>
              <button
                onClick={() => setFilterStatus("DITOLAK")}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "DITOLAK"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                  }`}
              >
                Ditolak
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
          ) : (
            <div className="overflow-x-auto">
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
                  {filteredAchievements.length > 0 ? (
                    filteredAchievements.map((achievement) => (
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
                          {achievement.student.name}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 max-w-[200px] truncate">
                          {achievement.competitionName}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {achievement.result}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          <a href={achievement.certificate} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all inline-block">
                            <File size={16} />
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${achievement.status === "TERVERIFIKASI"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : achievement.status === "DITOLAK"
                              ? "bg-red-50 text-red-700 border-red-100"
                              : "bg-amber-50 text-amber-700 border-amber-100"
                            }`}>
                            {achievement.status ? (achievement.status.charAt(0).toUpperCase() + achievement.status.slice(1).toLowerCase()) : "-"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {formatDate(achievement.createdAt)}
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                        Tidak ada prestasi ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
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
    </>
  );
}
