"use client";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { deleteIndependentSubmissions, getIndependentSubmissions } from "@/app/service/guruIndependentSubmissionsAPI";
import { IndependentSubmission } from "@/app/service/guruIndependentSubmissionsAPI";
import { ArrowLeft, Edit, Eye, File, Loader2, Send, Trash2, Calendar, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuruIndependentSubmissions() {
  const [submissions, setSubmissions] = useState<IndependentSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info"
  });
  const [confirmState, setConfirmState] = useState<{ isOpen: boolean; id: string | null; title: string; message: string }>({
    isOpen: false,
    id: null,
    title: "",
    message: ""
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"all" | "menunggu" | "diterima" | "ditolak">("all");
  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };
  const router = useRouter();

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };
  const initiateDelete = (id: string, name: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Pengajuan",
      message: `Apakah Anda yakin ingin menolak pengajuan "${name}"?`
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDeleting(true);
    try {
      const response = await deleteIndependentSubmissions(confirmState.id);
      if (response.success) {
        setSubmissions(submissions.filter((s) => s.id !== confirmState.id));
        setConfirmState({ ...confirmState, isOpen: false });
        showAlert("Dihapus", "Pengajuan berhasil dihapus.", "success");
      } else {
        setConfirmState({ ...confirmState, isOpen: false });
        showAlert("Gagal", "Gagal menghapus: " + response.message, "error");
      }
    } catch (error) {
      setConfirmState({ ...confirmState, isOpen: false });
      showAlert("Error", "Terjadi kesalahan saat menghapus.", "error");
    } finally {
      setIsDeleting(false);
    }
  };


  async function fetchSubmissions() {
    try {
      setLoading(true);
      const response = await getIndependentSubmissions();
      setSubmissions(response.data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  }

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

  function handleEdit(submission: IndependentSubmission) {
    router.push(`/page/guru/independent-submissions/${submission.id}`);
    // setSelectedSubmission(submission);
    console.log(submission);
  }



  useEffect(() => {
    fetchSubmissions();
  }, [filterStatus]);
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesStatus = filterStatus === "all" || (sub.status || "").toLowerCase() === filterStatus;
    const searchString = searchTerm.toLowerCase();
    const titleMatch = (sub.title || "").toLowerCase().includes(searchString);
    const studentMatch = (sub.student?.name || "").toLowerCase().includes(searchString);
    return matchesStatus && (titleMatch || studentMatch);
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengajuan Kompetisi Mandiri</h1>
          <p className="text-gray-500 mt-1">Kelola pengajuan prestasi mandiri oleh siswa.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari judul atau nama siswa..."
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
              onClick={() => setFilterStatus("menunggu")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "menunggu"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Menunggu
            </button>
            <button
              onClick={() => setFilterStatus("diterima")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "diterima"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "text-gray-600 hover:bg-gray-50 border border-transparent text-center flex justify-center items-center truncate"
                }`}
            >
              Diterima
            </button>
            <button
              onClick={() => setFilterStatus("ditolak")}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterStatus === "ditolak"
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
                  <th className="px-6 py-4">Deskripsi</th>
                  <th className="px-6 py-4">File</th>
                  <th className="px-6 py-4">Siswa</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Tanggal</th>
                  <th className="px-6 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <Send size={16} />
                          </div>
                          {submission.title}
                        </div>
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-900 truncate max-w-xs">
                        {submission.description}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        <a href={submission.documentUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all inline-block">
                          <File size={16} />
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {submission.student.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${submission.status === "DITERIMA"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : submission.status === "DITOLAK"
                            ? "bg-red-50 text-red-700 border-red-100"
                            : "bg-amber-50 text-amber-700 border-amber-100"
                          }`}>
                          {submission.status ? (submission.status.charAt(0).toUpperCase() + submission.status.slice(1).toLowerCase()) : "-"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(submission.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(submission)}
                          className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                          title="Lihat"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => initiateDelete(submission.id, submission.student.name)}
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
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      Tidak ada pengajuan ditemukan.
                    </td>
                  </tr>
                )}
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
  );
}
