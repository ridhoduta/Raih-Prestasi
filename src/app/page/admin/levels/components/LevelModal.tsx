import { Plus, Save, Loader2 } from "lucide-react";

interface LevelModalProps {
    isOpen: boolean;
    onClose: () => void;
    formData: { id: string | null; name: string };
    setFormData: (data: { id: string | null; name: string }) => void;
    onSubmit: () => void;
    isSubmitting: boolean;
}

export function LevelModal({
    isOpen,
    onClose,
    formData,
    setFormData,
    onSubmit,
    isSubmitting,
}: LevelModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {formData.id ? "Edit Tingkat" : "Tambah Tingkat Baru"}
                </h2>
                <input
                    id="level-name"
                    name="name"
                    type="text"
                    placeholder="Nama Tingkat (misal: Regional)"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans mb-6 text-gray-900"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoFocus
                />
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-50 text-center transition-colors"
                        disabled={isSubmitting}
                    >
                        Batal
                    </button>
                    <button
                        id="save-level-btn"
                        onClick={onSubmit}
                        disabled={!formData.name || isSubmitting}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:text-gray-500 text-white px-4 py-2.5 rounded-xl font-medium transition-all flex justify-center gap-2 items-center"
                    >
                        {isSubmitting ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : formData.id ? (
                            <Save size={18} />
                        ) : (
                            <Plus size={18} />
                        )}
                        {formData.id ? "Simpan Perubahan" : "Simpan"}
                    </button>
                </div>
            </div>
        </div>
    );
}
