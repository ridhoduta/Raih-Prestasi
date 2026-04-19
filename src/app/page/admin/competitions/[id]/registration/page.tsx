"use client";

import { use, Suspense } from "react";
import { ArrowLeft, Search, RefreshCw, Trophy, Filter } from "lucide-react";
import Link from "next/link";
import AlertModal from "@/app/components/AlertModal";

import { useRegistrations } from "../../hooks/userRegistration";
import { RegistrationTable } from "../../components/RegistrationTable";
import { RegistrationActionModal } from "../../components/RegistrationActionModal";
import { RegistrationDetailModal } from "../../components/RegistrationDetailModal";

function RegistrationContent({ id }: { id: string }) {
    const { 
        registrations, 
        competition, 
        loading, 
        searchTerm, 
        setSearchTerm, 
        filterStatus,
        setFilterStatus,
        
        // Action states
        actionState,
        setActionState,
        alertState,
        setAlertState,
        handleStatusUpdate,
        isStatusUpdating,

        // Detail states
        detailModal,
        setDetailModal,
        fetchRegistrationDetail,

        refetch 
    } = useRegistrations(id);

    const handleActionClick = (id: string, studentName: string, targetStatus: "DITERIMA" | "DITOLAK") => {
        setActionState({
            isOpen: true,
            id,
            studentName,
            targetStatus,
            note: "",
        });
    };

    if (loading && !competition) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                <RefreshCw className="animate-spin text-emerald-500" size={40} />
                <p className="text-gray-500 font-medium animate-pulse">Memuat data pendaftaran...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl shadow-emerald-500/5">
                <div className="space-y-4">
                    <Link 
                        href="/page/admin/competitions" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100"
                    >
                        <ArrowLeft size={16} />
                        Kembali
                    </Link>
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
                            <Trophy className="text-emerald-500" size={32} />
                            {competition?.title}
                        </h1>
                        <p className="text-gray-500 font-medium mt-1">
                            Kelola pendaftaran siswa untuk kompetisi ini
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                    <div className="text-right hidden md:block">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Pendaftar</span>
                        <div className="text-2xl font-black text-emerald-600">{registrations.length} Siswa</div>
                    </div>
                    <button 
                        onClick={() => refetch()}
                        className="p-3 bg-white hover:bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100 transition-all shadow-sm active:scale-95"
                        title="Refresh Data"
                    >
                        <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Cari nama siswa atau NISN..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-lg shadow-gray-200/20"
                        />
                    </div>
                    <div className="relative md:w-64">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={18} />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="w-full pl-12 pr-10 py-4 appearance-none rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all shadow-lg shadow-gray-200/20 text-gray-700 font-medium cursor-pointer"
                        >
                            <option value="all">Semua Status</option>
                            <option value="MENUNGGU">Menunggu</option>
                            <option value="DITERIMA">Diterima</option>
                            <option value="DITOLAK">Ditolak</option>
                        </select>
                    </div>
                </div>

                <RegistrationTable 
                    registrations={registrations} 
                    onActionClick={handleActionClick}
                    onViewDetail={fetchRegistrationDetail}
                    isUpdating={isStatusUpdating}
                />
            </div>

            {/* Modals */}
            <RegistrationActionModal
                actionState={actionState}
                isLoading={isStatusUpdating}
                onClose={() => setActionState(prev => ({ ...prev, isOpen: false }))}
                onNoteChange={(note) => setActionState(prev => ({ ...prev, note }))}
                onConfirm={handleStatusUpdate}
            />

            <RegistrationDetailModal
                isOpen={detailModal.isOpen}
                data={detailModal.data}
                loading={detailModal.loading}
                onClose={() => setDetailModal(prev => ({ ...prev, isOpen: false }))}
                onActionClick={handleActionClick}
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

export default function RegistrationPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    
    return (
        <div className="min-h-screen bg-[#f8fafc] sm:px-6 lg:px-8 py-10">
            <div className="max-w-7xl mx-auto">
                <Suspense fallback={
                    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                        <RefreshCw className="animate-spin text-emerald-500" size={40} />
                        <p className="text-gray-500 font-medium">Memuat halaman...</p>
                    </div>
                }>
                    <RegistrationContent id={resolvedParams.id} />
                </Suspense>
            </div>
        </div>
    );
}