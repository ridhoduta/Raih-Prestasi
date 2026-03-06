import { Calendar } from "lucide-react";

export function ExpiringCompetitions() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Kompetisi Segera Berakhir</h3>
            <div className="space-y-3">
                {/* Note: In a real app, you'd fetch real expiring competitions here */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Calendar size={18} className="text-gray-400" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Olimpiade Matematika Nasional</p>
                        <p className="text-xs text-gray-500">Berakhir dalam 2 hari</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
