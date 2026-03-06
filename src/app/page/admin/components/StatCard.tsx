import { LucideIcon } from "lucide-react";

interface StatCardProps {
    label: string;
    value: number;
    icon: LucideIcon;
    color: string;
    trend: string;
}

export function StatCard({ label, value, icon: Icon, color, trend }: StatCardProps) {
    // Extract base color name (e.g., "emerald" from "bg-emerald-500")
    const colorBase = color.replace("bg-", "").replace("-400", "").replace("-500", "").replace("-600", "");

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-${colorBase}-600`}>
                    <Icon size={24} className={`text-${colorBase}-600`} />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm">
                <span className={`text-${colorBase}-600 font-medium bg-${colorBase}-50 px-2 py-0.5 rounded-full text-xs`}>
                    {trend}
                </span>
            </div>
        </div>
    );
}
