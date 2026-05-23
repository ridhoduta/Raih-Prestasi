"use client";

import { useState, useEffect, useMemo } from "react";
import { Plus, Search, Award, Users } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import AlertModal from "@/app/components/AlertModal";
import ConfirmModal from "@/app/components/ConfirmModal";

import { useGrade } from "./hooks/useGrade";
import { GradeTable } from "./components/tableGrade";
import ModalGrade from "./components/modalGrade";
import { TableAchievement } from "./components/tableAchievement";
import ModalAssignGrade from "./components/modalAssignGrade";
import { getGrades, Grade } from "@/app/service/gradeService";
import { getAchievements, assignGradeToAchievement, Achievement } from "@/app/service/guruAchievementsAPI";
import { GradeCompetitionTable } from "./components/tableGradeCompetition";
import { useGradeCompetition } from "./hooks/useGradeCompetition";
import ModalGradeCompetition from "./components/modalGradeCompetition";

export default function GradePage() {
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState<"grades" | "gradeCompetition" | "achievements">("grades");
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);

    // Grade hook for managing grades
    const gradeHook = useGrade();
    const gradeCompetitionHook = useGradeCompetition();

    // Query for fetching achievements
    const { data: achievementsData, isLoading: isLoadingAchievements } = useQuery({
        queryKey: ["achievements"],
        queryFn: async () => {
            const response = await getAchievements({ limit: 100 });
            return response;
        },
    });

    // Query for grades (for assign modal)
    const { data: gradesData } = useQuery({
        queryKey: ["grades"],
        queryFn: async () => {
            const response = await getGrades();
            return response;
        },
    });

    const grades = gradesData?.data || [];
    const gradesCompetition = gradeCompetitionHook.grades;

    // Filter achievements by search
    const achievements = useMemo(() => {
        if (!achievementsData?.data) return [];
        if (!debouncedSearch) return achievementsData.data;

        const searchLower = debouncedSearch.toLowerCase();
        return achievementsData.data.filter((a: Achievement) =>
            a.student?.name?.toLowerCase().includes(searchLower) ||
            a.student?.nisn?.toLowerCase().includes(searchLower) ||
            a.competitionName?.toLowerCase().includes(searchLower)
        );
    }, [achievementsData, debouncedSearch]);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Mutation for assigning grade to achievement
    const assignGradeMutation = useMutation({
        mutationFn: ({ achievementId, gradeId, gradeCompetitionId }: { achievementId: string; gradeId: string | null; gradeCompetitionId: string | null }) =>
            assignGradeToAchievement(achievementId, gradeId, gradeCompetitionId),
        onSuccess: (response) => {
            if (response.success) {
                queryClient.invalidateQueries({ queryKey: ["achievements"] });
                setIsAssignModalOpen(false);
                setSelectedAchievement(null);
                showAlert("Berhasil", "Grade berhasil di-assign ke achievement.", "success");
            } else {
                showAlert("Gagal", response.message || "Gagal meng-assign grade.", "error");
            }
        },
        onError: () => {
            showAlert("Error", "Terjadi kesalahan saat meng-assign grade.", "error");
        }
    });

    // Alert State
    const [alertState, setAlertState] = useState<{ isOpen: boolean; title: string; message: string; type: "success" | "error" | "info" }>({
        isOpen: false,
        title: "",
        message: "",
        type: "info"
    });

    const showAlert = (title: string, message: string, type: "success" | "error" | "info" = "info") => {
        setAlertState({ isOpen: true, title, message, type });
    };

    const closeAlert = () => {
        setAlertState({ ...alertState, isOpen: false });
    };

    const handleAssignGrade = (achievement: Achievement) => {
        setSelectedAchievement(achievement);
        setIsAssignModalOpen(true);
    };

    const handleSubmitAssignGrade = async (gradeId: string | null, gradeCompetitionId: string | null) => {
        if (!selectedAchievement) return;
        assignGradeMutation.mutate({ achievementId: selectedAchievement.id, gradeId, gradeCompetitionId });
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Award className="text-emerald-600" size={28} />
                        Grade & Prestasi
                    </h1>
                    <p className="text-gray-500 mt-1">Kelola master grade dan assign ke achievement</p>
                </div>

                {activeTab === "grades" && (
                    <button
                        onClick={gradeHook.openCreateModal}
                        className="flex items-center gap-2 bg-primary-container hover:bg-on-primary hover:text-primary text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
                    >
                        <Plus size={18} />
                        Tambah Grade
                    </button>
                )}
                {activeTab === "gradeCompetition" && (
                    <button
                        onClick={gradeCompetitionHook.openCreateModal}
                        className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
                    >
                        <Plus size={18} />
                        Tambah Grade Kompetisi
                    </button>
                )}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
                <button
                    onClick={() => setActiveTab("grades")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "grades"
                        ? "text-emerald-600 border-emerald-600"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                        }`}
                >
                    <Award size={16} />
                    Master Grade
                </button>
                <button
                    onClick={() => setActiveTab("gradeCompetition")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "gradeCompetition"
                        ? "text-emerald-600 border-emerald-600"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                        }`}
                >
                    <Award size={16} />
                    gradeCompetition
                </button>
                <button
                    onClick={() => setActiveTab("achievements")}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "achievements"
                        ? "text-emerald-600 border-emerald-600"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                        }`}
                >
                    <Users size={16} />
                    Achievement ({achievements.length})
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder={activeTab === "grades" ? "Cari grade..." : "Cari nama siswa, NISN, atau kompetisi..."}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans text-gray-900"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Total:</span>
                        <span className="font-semibold text-gray-700">
                            {activeTab === "grades" ? gradeHook.grades.length : achievements.length} data
                        </span>
                    </div>
                </div>

                {activeTab === "grades" ? (
                    <GradeTable
                        grades={gradeHook.grades}
                        isLoading={gradeHook.isLoading}
                        onEdit={gradeHook.openEditModal}
                        onDelete={gradeHook.initiateDelete}
                    />
                ) : activeTab === "gradeCompetition" ? (
                    <GradeCompetitionTable
                        grades={gradeCompetitionHook.grades}
                        isLoading={gradeCompetitionHook.isLoading}
                        onEdit={gradeCompetitionHook.openEditModal}
                        onDelete={gradeCompetitionHook.initiateDelete}
                    />
                ) : (
                    <TableAchievement
                        achievements={achievements}
                        isLoading={isLoadingAchievements}
                        onAssignGrade={handleAssignGrade}
                    />
                )}
            </div>

            <AlertModal
                isOpen={alertState.isOpen}
                onClose={closeAlert}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
            />

            <ConfirmModal
                isOpen={gradeHook.confirmState.isOpen}
                onClose={() => gradeHook.setConfirmState({ ...gradeHook.confirmState, isOpen: false })}
                onConfirm={gradeHook.handleConfirmDelete}
                title={gradeHook.confirmState.title}
                message={gradeHook.confirmState.message}
                isLoading={gradeHook.isDeleting}
            />

            <ConfirmModal
                isOpen={gradeCompetitionHook.confirmState.isOpen}
                onClose={() => gradeCompetitionHook.setConfirmState({ ...gradeCompetitionHook.confirmState, isOpen: false })}
                onConfirm={gradeCompetitionHook.handleConfirmDelete}
                title={gradeCompetitionHook.confirmState.title}
                message={gradeCompetitionHook.confirmState.message}
                isLoading={gradeCompetitionHook.isDeleting}
            />

            <ModalGrade
                isOpen={gradeHook.isModalOpen}
                onClose={gradeHook.closeModal}
                onSubmit={gradeHook.handleSubmit}
                editingGrade={gradeHook.editingGrade}
                isLoading={gradeHook.isSubmitting}
            />

            <ModalGradeCompetition
                isOpen={gradeCompetitionHook.isModalOpen}
                onClose={gradeCompetitionHook.closeModal}
                onSubmit={gradeCompetitionHook.handleSubmit}
                editingGrade={gradeCompetitionHook.editingGrade}
                isLoading={gradeCompetitionHook.isSubmitting}
            />

            <ModalAssignGrade
                isOpen={isAssignModalOpen}
                onClose={() => {
                    setIsAssignModalOpen(false);
                    setSelectedAchievement(null);
                }}
                onSubmit={handleSubmitAssignGrade}
                achievement={selectedAchievement}
                grades={grades}
                gradesCompetition={gradesCompetition}
                isLoading={assignGradeMutation.isPending}
            />
        </div>
    );
}
