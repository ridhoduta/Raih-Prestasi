"use client";

import React from "react";
import { 
    CheckCircle, 
    XCircle, 
    Clock, 
    User,
    Eye
} from "lucide-react";
import { RegistrationDetail } from "@/app/service/guruCompetitionsAPI";

interface RegistrationTableProps {
    registrations: RegistrationDetail[];
    onActionClick: (id: string, studentName: string, targetStatus: "DITERIMA" | "DITOLAK") => void;
    onViewDetail: (id: string) => void;
    isUpdating: boolean;
}

export function RegistrationTable({ registrations, onActionClick, onViewDetail, isUpdating }: RegistrationTableProps) {
    const getStatusBadge = (status: string) => {
        switch (status.toUpperCase()) {
            case "APPROVED":
            case "ACCEPTED":
            case "DITERIMA":
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <CheckCircle size={12} />
                        Diterima
                    </span>
                );
            case "REJECTED":
            case "DITOLAK":
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                        <XCircle size={12} />
                        Ditolak
                    </span>
                );
            case "DIBATALKAN":
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-500/10 text-gray-500 border border-gray-500/20 shadow-[0_0_15px_rgba(107,114,128,0.1)]">
                        <XCircle size={12} />
                        Dibatalkan
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                        <Clock size={12} />
                        Menunggu
                    </span>
                );
        }
    };

    return (
        <div className="w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Siswa</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">NISN / Kelas</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">Status</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {registrations.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500 italic">
                                    Belum ada pendaftaran ditemukan.
                                </td>
                            </tr>
                        ) : (
                            registrations.map((reg) => (
                                <tr 
                                    key={reg.id}
                                    className="group hover:bg-white/5 transition-all"
                                >
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                                <User size={18} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors uppercase tracking-tight">
                                                    {reg.student.name}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Daftar: {new Date(reg.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium text-gray-700">{reg.student.nisn}</div>
                                        <div className="text-xs text-gray-500 uppercase">Kelas {reg.student.kelas}</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        {getStatusBadge(reg.status)}
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            {reg.status === "MENUNGGU" && (
                                                <>
                                                    <button 
                                                        disabled={isUpdating}
                                                        onClick={() => onActionClick(reg.id, reg.student.name, "DITERIMA")}
                                                        className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-50 text-xs font-bold uppercase tracking-tight"
                                                        title="Terima"
                                                    >
                                                        Terima
                                                    </button>
                                                    <button 
                                                        disabled={isUpdating}
                                                        onClick={() => onActionClick(reg.id, reg.student.name, "DITOLAK")}
                                                        className="px-3 py-1.5 rounded-lg bg-rose-500 text-white hover:bg-rose-500 hover:text-white transition-all disabled:opacity-50 text-xs font-bold uppercase tracking-tight"
                                                        title="Tolak"
                                                    >
                                                        Tolak
                                                    </button>
                                                </>
                                            )}
                                            <button 
                                                onClick={() => onViewDetail(reg.id)}
                                                className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 px-4 group"
                                                title="Lihat Detail"
                                            >
                                                <Eye size={18} />
                                                Jawaban
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
