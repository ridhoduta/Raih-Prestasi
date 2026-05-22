import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Eye,
  Loader2,
  XCircle,
  Calendar,
  ChevronDown,
  ChevronUp,
  Trophy,
  User,
  GraduationCap,
  Sparkles
} from "lucide-react";
import { StudentWithRegistrations } from "@/app/service/guruCompetitionsAPI";

interface RegistrationByStudentListProps {
  students: StudentWithRegistrations[];
  loading: boolean;
  onViewDetail: (id: string) => void;
  onActionClick: (id: string, studentName: string, targetStatus: "DITERIMA" | "DITOLAK") => void;
}

export function RegistrationByStudentList({
  students,
  loading,
  onViewDetail,
  onActionClick,
}: RegistrationByStudentListProps) {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "DITERIMA":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
            <CheckCircle size={12} />
            Diterima
          </span>
        );
      case "DITOLAK":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
            <XCircle size={12} />
            Ditolak
          </span>
        );
      case "DIBATALKAN":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-500 border border-gray-100">
            <XCircle size={12} />
            Batal
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
            <Clock size={12} />
            Menunggu
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
          <Calendar size={13} className="text-gray-400" />
          {date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
          {date.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })} WIB
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="animate-spin text-emerald-600" size={32} />
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center text-gray-500">
        Tidak ada data pendaftaran ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {students.map((student) => {
        const isExpanded = !!expandedIds[student.id];
        const initial = student.name ? student.name.charAt(0).toUpperCase() : "?";

        return (
          <div
            key={student.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Student Card Header */}
            <div
              onClick={() => toggleExpand(student.id)}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors select-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg border border-emerald-100 shadow-sm">
                  {initial}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-base">{student.name}</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
                      <GraduationCap size={10} />
                      Angkatan {student.angkatan}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">
                    NISN: <span className="font-semibold text-gray-700">{student.nisn}</span> • Kelas:{" "}
                    <span className="font-semibold text-gray-700">{student.kelas}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Sparkles size={12} className="text-emerald-600" />
                  {student.registrations.length} Kompetisi
                </span>
                <button
                  type="button"
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
            </div>

            {/* Collapsible Registrations List */}
            {isExpanded && (
              <div className="border-t border-gray-100 bg-gray-50/30 p-5 space-y-3 animate-in slide-in-from-top-2 duration-200">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Daftar Kompetisi Diikuti
                </h4>
                <div className="divide-y divide-gray-100 border border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm">
                  {student.registrations.map((reg) => (
                    <div
                      key={reg.id}
                      className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl mt-0.5">
                          <Trophy size={16} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 text-sm">
                            {reg.competition.title}
                          </h5>
                          <div className="mt-1">{formatDate(reg.createdAt)}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <div>{getStatusBadge(reg.status)}</div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onViewDetail(reg.id);
                            }}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            title="Lihat Detail"
                          >
                            <Eye size={18} />
                          </button>

                          {reg.status === "MENUNGGU" ? (
                            <div className="flex gap-1.5">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onActionClick(reg.id, student.name, "DITERIMA");
                                }}
                                className="px-3 py-1.5 bg-[#224F1F] text-white rounded-lg text-xs font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
                              >
                                Terima
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onActionClick(reg.id, student.name, "DITOLAK");
                                }}
                                className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition-colors shadow-sm"
                              >
                                Tolak
                              </button>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-xs italic font-medium px-2 py-1">
                              Selesai
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
