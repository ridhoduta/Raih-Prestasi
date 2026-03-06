import { Edit, Trash2, Layers, Loader2 } from "lucide-react";
import { Level } from "@/app/service/levelsAPI";

interface LevelTableProps {
    levels: Level[];
    isLoading: boolean;
    onEdit: (level: Level) => void;
    onDelete: (id: string, name: string) => void;
}

export function LevelTable({ levels, isLoading, onEdit, onDelete }: LevelTableProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {isLoading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-emerald-600" size={32} />
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                            <tr>
                                <th className="px-6 py-4">Urutan</th>
                                <th className="px-6 py-4">Tingkat</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {levels.map((level) => (
                                <tr key={level.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                                            {level.order}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Layers size={16} />
                                        </div>
                                        {level.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${level.isActive
                                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                                : "bg-gray-50 text-gray-600 border-gray-100"
                                            }`}>
                                            {level.isActive ? "Aktif" : "Nonaktif"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(level)}
                                            className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                            title="Edit"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(level.id, level.name)}
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

            {!isLoading && levels.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                    Belum ada tingkat kompetisi.
                </div>
            )}
        </div>
    );
}
