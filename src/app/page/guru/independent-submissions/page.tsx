"use client";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";
import { getIndependentSubmissions, ReviewSubmissionPayload, reviewIndependentSubmission } from "@/app/service/guruIndependentSubmissionsAPI";
import { IndependentSubmission } from "@/app/service/guruIndependentSubmissionsAPI";
import { Edit, File, Loader2, Send, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function GuruIndependentSubmissions() {
  const [submissions, setSubmissions] = useState<IndependentSubmission[]>([]);
  const [loading, setLoading] = useState(false);
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
  const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
    setAlertState({ isOpen: true, title, message, type });
  };

  const closeAlert = () => {
    setAlertState({ ...alertState, isOpen: false });
  };
  const initiateDelete = (id: string, name: string) => {
    setConfirmState({
      isOpen: true,
      id,
      title: "Hapus Pengajuan",
      message: `Apakah Anda yakin ingin menghapus pengajuan "${name}"?`
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmState.id) return;
    setIsDeleting(true);
    try {
      // Using reviewIndependentSubmission with DITOLAK status to simulate "deletion/rejection" 
      // since the original deleteIndependentSubmissions was actually a PUT.
      const payload: ReviewSubmissionPayload = { status: "DITOLAK", reviewedBy: "Guru", rejectionNote: "Pengajuan dihapus oleh guru" };
      const response = await reviewIndependentSubmission(confirmState.id, payload);
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

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  function handleEdit(submission: IndependentSubmission) {
    // setSelectedSubmission(submission);
    console.log(submission);
  }

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pengajuan Mandiri</h1>
          <p className="text-gray-500 mt-1">Kelola pengajuan prestasi mandiri oleh siswa.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
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
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                          <Send size={16} />
                        </div>
                        {submission.title}
                      </div>
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        {submission.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        <a href={submission.documentUrl} target="_blank" rel="noopener noreferrer">
                          <File size={16} />
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        {submission.student.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${submission.status === "DITERIMA"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-gray-50 text-gray-600 border-gray-100"
                        }`}>
                        {submission.status === "DITERIMA" ? "Diterima" : "Ditolak"}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        {formatDate(submission.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(submission)}
                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit size={16} />
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
                ))}
              </tbody>
            </table>
          </div>

        )}
      </div>
    </div>
  );
}
