import { CheckCircle, Loader2, XCircle } from "lucide-react";

interface ActionState {
    isOpen: boolean;
    id: string;
    studentName: string;
    targetStatus: "DITERIMA" | "DITOLAK" | "";
    note: string;
}

interface RegistrationActionModalProps {
    actionState: ActionState;
    isLoading: boolean;
    onClose: () => void;
    onNoteChange: (note: string) => void;
    onConfirm: () => void;
}

export function RegistrationActionModal({ actionState, isLoading, onClose, onNoteChange, onConfirm }: RegistrationActionModalProps) {
    if (!actionState.isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-6 space-y-4">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${actionState.targetStatus === "DITERIMA" ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                        {actionState.targetStatus === "DITERIMA" ? <CheckCircle size={24} /> : <XCircle size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                        {actionState.targetStatus === "DITERIMA" ? "Terima Pendaftaran" : "Tolak Pendaftaran"}
                    </h3>
                </div>

                <p className="text-gray-600">
                    Apakah Anda yakin ingin {actionState.targetStatus === "DITERIMA" ? "menerima" : "menolak"} pendaftaran dari <strong>{actionState.studentName}</strong>?
                </p>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Catatan (Opsional)</label>
                    <textarea
                        id="reg-action-note"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm h-24 resize-none text-gray-600"
                        placeholder="Berikan alasan atau instruksi tambahan..."
                        value={actionState.note}
                        onChange={(e) => onNoteChange(e.target.value)}
                    />
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Batal
                    </button>
                    <button
                        id="reg-confirm-btn"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-white transition-all ${actionState.targetStatus === "DITERIMA" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-red-500 hover:bg-red-600"
                            } disabled:opacity-50`}
                    >
                        {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Konfirmasi"}
                    </button>
                </div>
            </div>
        </div>
    );
}
