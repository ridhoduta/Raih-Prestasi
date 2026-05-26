"use client";

import { useState, useEffect } from "react";
import { X, Loader2, Trophy, Hash } from "lucide-react";
import type { GradeCompetition, GradeCompetitionPayload } from "@/app/service/gradeCompetitionService";

interface ModalGradeCompetitionProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (payload: GradeCompetitionPayload) => Promise<void>;
    editingGrade: GradeCompetition | null;
    isLoading: boolean;
}

export default function ModalGradeCompetition({
    isOpen,
    onClose,
    onSubmit,
    editingGrade,
    isLoading,
}: ModalGradeCompetitionProps) {
    const [formData, setFormData] = useState<GradeCompetitionPayload>({
        gradeCompetitionName: "",
        points: 0,
    });

    useEffect(() => {
        if (editingGrade) {
            setFormData({
                gradeCompetitionName: editingGrade.gradeCompetitionName,
                points: editingGrade.points,
            });
        } else {
            setFormData({
                gradeCompetitionName: "",
                points: 0,
            });
        }
    }, [editingGrade, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                            <Trophy size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {editingGrade ? "Edit Grade Kompetisi" : "Tambah Grade Kompetisi"}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {editingGrade ? "Perbarui data grade kompetisi" : "Tambahkan grade kompetisi baru"}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={isLoading}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Trophy size={16} className="text-amber-500" />
                            Nama Grade Kompetisi
                        </label>
                        <input
                            type="text"
                            value={formData.gradeCompetitionName}
                            onChange={(e) => setFormData(prev => ({ ...prev, gradeCompetitionName: e.target.value.toUpperCase() }))}
                            placeholder="Contoh: A, EMAS, NASIONAL"
                            maxLength={30}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-black uppercase font-semibold text-base text-center"
                            required
                        />
                        <p className="text-xs text-gray-500">Nama grade kompetisi berupa huruf atau kata (A, B, EMAS, NASIONAL, dll)</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Hash size={16} className="text-amber-500" />
                            Points
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            value={formData.points}
                            onChange={(e) => setFormData(prev => ({ ...prev, points: parseFloat(e.target.value) || 0 }))}
                            placeholder="Masukkan nilai points"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-black"
                            required
                        />
                        <p className="text-xs text-gray-500">Nilai skor untuk grade kompetisi ini</p>
                    </div>
                </form>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={isLoading}
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-amber-500 border border-transparent rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Menyimpan...
                            </>
                        ) : (
                            <>Simpan</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
