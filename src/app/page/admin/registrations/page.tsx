"use client";

import { ClipboardList, Filter, Search } from "lucide-react";
import AlertModal from "@/app/components/AlertModal";

import { useRegistrations } from "./hooks/useRegistrations";
import { RegistrationTable } from "./components/RegistrationTable";
import { RegistrationDetailModal } from "./components/RegistrationDetailModal";
import { RegistrationActionModal } from "./components/RegistrationActionModal";

export default function AdminRegistrations() {
    const {
        filterStatus,
        setFilterStatus,
        filterCompetition,
        setFilterCompetition,
        searchTerm,
        setSearchTerm,
        detailModal,
        setDetailModal,
        actionState,
        setActionState,
        alertState,
        setAlertState,
        handleStatusUpdate,
        fetchRegistrationDetail,
        uniqueCompetitions,
        filteredRegistrations,
        loading,
        isLoadingMore,
        nextCursor,
        loadMore,
        isStatusUpdating,
    } = useRegistrations();

    const handleActionClick = (id: string, studentName: string, targetStatus: "DITERIMA" | "DITOLAK") => {
        setActionState({
            isOpen: true,
            id,
            studentName,
            targetStatus,
            note: "",
        });
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Pendaftaran</h1>
                <p className="text-gray-500 mt-1">
                    Kelola pendaftaran siswa pada kompetisi Anda.
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama atau NISN..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm cursor-pointer  text-gray-900"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            id="reg-filter-status"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none cursor-pointer  text-gray-900"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="all">Semua Status</option>
                            <option value="MENUNGGU">Menunggu</option>
                            <option value="DITERIMA">Diterima</option>
                            <option value="DITOLAK">Ditolak</option>
                        </select>
                    </div>

                    <div className="relative">
                        <ClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select
                            id="reg-filter-comp"
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm appearance-none cursor-pointer  text-gray-900"
                            value={filterCompetition}
                            onChange={(e) => setFilterCompetition(e.target.value)}
                        >
                            <option value="all">Semua Kompetisi</option>
                            {uniqueCompetitions.map((comp: any) => (
                                <option key={comp.id} value={comp.id}>
                                    {comp.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <RegistrationTable
                    registrations={filteredRegistrations}
                    loading={loading}
                    onViewDetail={fetchRegistrationDetail}
                    onActionClick={handleActionClick}
                />

                {nextCursor && !loading && (
                    <div className="p-4 border-t border-gray-100 flex justify-center">
                        <button
                            onClick={() => loadMore()}
                            disabled={isLoadingMore}
                            className="px-6 py-2.5 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 text-gray-600 disabled:text-gray-400 rounded-xl font-medium transition-colors border border-gray-200"
                        >
                            {isLoadingMore ? "Memuat..." : "Muat Lebih Banyak"}
                        </button>
                    </div>
                )}
            </div>

            <RegistrationDetailModal
                isOpen={detailModal.isOpen}
                data={detailModal.data}
                loading={detailModal.loading}
                onClose={() => setDetailModal(prev => ({ ...prev, isOpen: false }))}
            />

            <RegistrationActionModal
                actionState={actionState}
                isLoading={isStatusUpdating}
                onClose={() => setActionState(prev => ({ ...prev, isOpen: false }))}
                onNoteChange={(note) => setActionState(prev => ({ ...prev, note }))}
                onConfirm={handleStatusUpdate}
            />

            <AlertModal
                isOpen={alertState.isOpen}
                title={alertState.title}
                message={alertState.message}
                type={alertState.type}
                onClose={() => setAlertState(prev => ({ ...prev, isOpen: false }))}
            />
        </div>
    );
}
