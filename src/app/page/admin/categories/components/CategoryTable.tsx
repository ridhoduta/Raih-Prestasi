import { Trophy, Edit, Trash2, Loader2 } from "lucide-react";
import { Category } from "@/app/service/categoriesAPI";

interface CategoryTableProps {
    categories: Category[];
    isLoading: boolean;
    onEdit: (category: Category) => void;
    onDelete: (id: string, name: string) => void;
}

export function CategoryTable({ categories, isLoading, onEdit, onDelete }: CategoryTableProps) {
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
                                <th className="px-6 py-4">Kategori</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                                            <Trophy size={16} />
                                        </div>
                                        {category.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${category.isActive
                                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                                : "bg-gray-50 text-gray-600 border-gray-100"
                                            }`}>
                                            {category.isActive ? "Aktif" : "Nonaktif"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(category)}
                                            className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                            title="Edit"
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(category.id, category.name)}
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

            {!isLoading && categories.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                    Belum ada kategori.
                </div>
            )}
        </div>
    );
}
