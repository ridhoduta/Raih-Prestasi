import { Calendar } from "lucide-react";


export function ExpiringCompetitions({ expiringCompetitions }: { expiringCompetitions: any[] }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Kompetisi Segera Berakhir</h3>
            <div className="space-y-3">
                {expiringCompetitions.map((expiringCompetition) => (
                    <div key={expiringCompetition.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                        <Calendar size={18} className="text-gray-400" />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{expiringCompetition.title}</p>
                            <p className="text-xs text-gray-500">{expiringCompetition.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
