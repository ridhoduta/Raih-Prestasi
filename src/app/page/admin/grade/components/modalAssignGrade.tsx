"use client";

import { useState, useEffect } from "react";
import { X, Loader2, Award, Trophy, CheckCircle } from "lucide-react";
import type { Grade } from "@/app/service/gradeService";
import type { GradeCompetition } from "@/app/service/gradeCompetitionService";
import type { Achievement } from "@/app/service/guruAchievementsAPI";

interface ModalAssignGradeProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (gradeId: string | null, gradeCompetitionId: string | null) => Promise<void>;
    achievement: Achievement | null;
    grades: Grade[];
    gradesCompetition: GradeCompetition[];
    isLoading: boolean;
}

export default function ModalAssignGrade({
    isOpen,
    onClose,
    onSubmit,
    achievement,
    grades,
    gradesCompetition,
    isLoading,
}: ModalAssignGradeProps) {
    const [selectedGradeId, setSelectedGradeId] = useState<string | null>(null);
    const [selectedGradeCompetitionId, setSelectedGradeCompetitionId] = useState<string | null>(null);

    useEffect(() => {
        if (achievement) {
            setSelectedGradeId(achievement.grade?.id ?? null);
            setSelectedGradeCompetitionId(achievement.gradeCompetition?.id ?? null);
        } else {
            setSelectedGradeId(null);
            setSelectedGradeCompetitionId(null);
        }
    }, [achievement, isOpen]);

    const handleSubmit = async () => {
        await onSubmit(selectedGradeId, selectedGradeCompetitionId);
    };

    if (!isOpen || !achievement) return null;

    const getGradeStyle = (name: string, selected: boolean, type: "grade" | "competition") => {
        const colorMap: Record<string, { idle: string; active: string }> = {
            A: { idle: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200", active: "bg-emerald-500 text-white border-emerald-600" },
            B: { idle: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200", active: "bg-blue-500 text-white border-blue-600" },
            C: { idle: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200", active: "bg-yellow-500 text-white border-yellow-600" },
            D: { idle: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200", active: "bg-orange-500 text-white border-orange-600" },
            E: { idle: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200", active: "bg-red-500 text-white border-red-600" },
        };
        const key = name.toUpperCase();
        const colors = colorMap[key] ?? {
            idle: "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200",
            active: "bg-gray-500 text-white border-gray-600",
        };
        return selected ? colors.active : colors.idle;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <Award size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Assign Grade</h2>
                            <p className="text-sm text-gray-500">Pilih grade untuk achievement ini</p>
                        </div>
                    </div>
                    <button onClick={onClose} disabled={isLoading}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5 overflow-y-auto">
                    {/* Achievement Info */}
                    <div className="bg-gray-50 rounded-xl p-4 space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Siswa</p>
                        <p className="font-semibold text-gray-900">{achievement.student.name}</p>
                        <p className="text-sm text-gray-500">{achievement.student.nisn} • {achievement.student.kelas}</p>
                        <div className="pt-2 mt-1 border-t border-gray-200">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Kompetisi</p>
                            <p className="font-medium text-gray-800">{achievement.competitionName}</p>
                            <p className="text-sm text-gray-600">Hasil: <span className="font-medium">{achievement.result}</span></p>
                        </div>
                    </div>

                    {/* Grade Section */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Award size={16} className="text-emerald-600" />
                            <span className="text-sm font-semibold text-gray-700">Grade Akademik</span>
                            {selectedGradeId && (
                                <button type="button" onClick={() => setSelectedGradeId(null)}
                                    className="ml-auto text-xs text-red-500 hover:text-red-600">
                                    Hapus
                                </button>
                            )}
                        </div>
                        {grades.length === 0 ? (
                            <p className="text-sm text-gray-400 text-center py-3 bg-gray-50 rounded-xl">
                                Belum ada grade tersedia
                            </p>
                        ) : (
                            <div className="grid grid-cols-5 gap-2">
                                {grades.map((grade) => (
                                    <button key={grade.id} type="button"
                                        onClick={() => setSelectedGradeId(prev => prev === grade.id ? null : grade.id)}
                                        className={`relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${getGradeStyle(grade.gradeName, selectedGradeId === grade.id, "grade")}`}>
                                        {selectedGradeId === grade.id && (
                                            <CheckCircle size={14} className="absolute top-1 right-1" />
                                        )}
                                        <span className="text-xl font-bold">{grade.gradeName}</span>
                                        <span className="text-xs mt-0.5">{grade.points} pts</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Grade Competition Section */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Trophy size={16} className="text-amber-500" />
                            <span className="text-sm font-semibold text-gray-700">Grade Kompetisi</span>
                            {selectedGradeCompetitionId && (
                                <button type="button" onClick={() => setSelectedGradeCompetitionId(null)}
                                    className="ml-auto text-xs text-red-500 hover:text-red-600">
                                    Hapus
                                </button>
                            )}
                        </div>
                        {gradesCompetition.length === 0 ? (
                            <p className="text-sm text-gray-400 text-center py-3 bg-gray-50 rounded-xl">
                                Belum ada grade kompetisi tersedia
                            </p>
                        ) : (
                            <div className="grid grid-cols-5 gap-2">
                                {gradesCompetition.map((grade) => (
                                    <button key={grade.id} type="button"
                                        onClick={() => setSelectedGradeCompetitionId(prev => prev === grade.id ? null : grade.id)}
                                        className={`relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${getGradeStyle(grade.gradeCompetitionName, selectedGradeCompetitionId === grade.id, "competition")}`}>
                                        {selectedGradeCompetitionId === grade.id && (
                                            <CheckCircle size={14} className="absolute top-1 right-1" />
                                        )}
                                        <span className="text-xl font-bold">{grade.gradeCompetitionName}</span>
                                        <span className="text-xs mt-0.5">{grade.points} pts</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                    <button type="button" onClick={onClose} disabled={isLoading}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Batal
                    </button>
                    <button onClick={handleSubmit} disabled={isLoading}
                        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
                        {isLoading ? (
                            <><Loader2 size={16} className="animate-spin" />Menyimpan...</>
                        ) : (
                            <>Simpan</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
