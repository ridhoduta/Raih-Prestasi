import { Award, Loader2, User, GraduationCap, CheckCircle2, XCircle, Clock, FileDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Achievement } from "@/app/service/guruAchievementsAPI";
import { ExportAchievementPdf } from "./exportAchievementPdf";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

interface TableAchievementProps {
    achievements: Achievement[];
    isLoading: boolean;
    onAssignGrade: (achievement: Achievement) => void;
}

export function TableAchievement({ achievements, isLoading, onAssignGrade }: TableAchievementProps) {
    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" size={32} />
            </div>
        );
    }

    if (achievements.length === 0) {
        return (
            <div className="p-12 text-center text-gray-500">
                Belum ada data achievement.
            </div>
        );
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "TERVERIFIKASI":
                return (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        <CheckCircle2 size={12} />
                        Terverifikasi
                    </span>
                );
            case "DITOLAK":
                return (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
                        <XCircle size={12} />
                        Ditolak
                    </span>
                );
            case "DIBATALKAN":
                return (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        <XCircle size={12} />
                        Dibatalkan
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        <Clock size={12} />
                        Menunggu
                    </span>
                );
        }
    };

    const getGradeColor = (gradeName: string) => {
        if (!gradeName) return 'bg-gray-100 text-gray-700 border-gray-200';
        const name = gradeName.toUpperCase();
        
        // Single characters
        if (name === 'A') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        if (name === 'B') return 'bg-blue-100 text-blue-700 border-blue-200';
        if (name === 'C') return 'bg-amber-100 text-amber-700 border-amber-200';
        if (name === 'D') return 'bg-orange-100 text-orange-700 border-orange-200';
        if (name === 'E') return 'bg-red-100 text-red-700 border-red-200';

        // Words / Keywords matching
        if (name.includes('INTERNASIONAL') || name.includes('WORLD') || name.includes('GLOBAL')) {
            return 'bg-purple-100 text-purple-700 border-purple-200';
        }
        if (name.includes('NASIONAL') || name.includes('EMAS') || name.includes('GOLD') || name.includes('1')) {
            return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        }
        if (name.includes('PROVINSI') || name.includes('PERAK') || name.includes('SILVER') || name.includes('2')) {
            return 'bg-blue-100 text-blue-700 border-blue-200';
        }
        if (name.includes('KABUPATEN') || name.includes('KOTA') || name.includes('PERUNGGU') || name.includes('BRONZE') || name.includes('3')) {
            return 'bg-amber-100 text-amber-700 border-amber-200';
        }
        if (name.includes('KECAMATAN')) {
            return 'bg-orange-100 text-orange-700 border-orange-200';
        }
        if (name.includes('SEKOLAH') || name.includes('INTERNAL')) {
            return 'bg-gray-100 text-gray-700 border-gray-200';
        }

        // Generic fallback with nice aesthetic colors based on string length/hash so they look consistent but distinct!
        const colors = [
            'bg-emerald-100 text-emerald-700 border-emerald-200',
            'bg-blue-100 text-blue-700 border-blue-200',
            'bg-amber-100 text-amber-700 border-amber-200',
            'bg-purple-100 text-purple-700 border-purple-200',
            'bg-pink-100 text-pink-700 border-pink-200',
            'bg-indigo-100 text-indigo-700 border-indigo-200',
            'bg-cyan-100 text-cyan-700 border-cyan-200'
        ];
        
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end px-4">
                <PDFDownloadLink
                    document={<ExportAchievementPdf achievements={achievements} />}
                    fileName="Data_Prestasi.pdf"
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                    <FileDown size={16} />
                    <span>Export PDF</span>
                </PDFDownloadLink>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50/50 border-b border-gray-100 font-medium text-gray-500 uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Siswa</th>
                        <th className="px-6 py-4">Kompetisi</th>
                        <th className="px-6 py-4">Hasil</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-center">Grade Competition</th>
                        <th className="px-6 py-4 text-center">Grade</th>
                        <th className="px-6 py-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                    {achievements.map((achievement) => (
                        <tr key={achievement.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                                        <User size={14} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{achievement.student?.name || "-"}</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <span>{achievement.student?.nisn}</span>
                                            <span className="text-gray-300">•</span>
                                            <span className="flex items-center gap-1">
                                                <GraduationCap size={10} />
                                                {achievement.student?.kelas}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <Award size={14} className="text-amber-500" />
                                    <span className="text-gray-800">{achievement.competitionName}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${achievement.result === "Juara 1" ? "bg-amber-100 text-amber-700" :
                                        achievement.result === "Juara 2" ? "bg-gray-200 text-gray-700" :
                                            achievement.result === "Juara 3" ? "bg-orange-100 text-orange-700" :
                                                "bg-blue-100 text-blue-700"
                                    }`}>
                                    {achievement.result}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                {getStatusBadge(achievement.status)}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {achievement.gradeCompetition ? (
                                    <div className="flex flex-col items-center gap-1">
                                        <span className={`inline-flex items-center justify-center px-3 py-1 min-w-[2.5rem] h-8 rounded-lg font-bold text-xs border whitespace-nowrap ${getGradeColor(achievement.gradeCompetition.gradeCompetitionName)}`}>
                                            {achievement.gradeCompetition.gradeCompetitionName}
                                        </span>
                                        <span className="text-xs text-gray-500">{achievement.gradeCompetition.points} pts</span>
                                    </div>
                                ) : (
                                    <span className="text-gray-400 text-sm">-</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {achievement.grade ? (
                                    <div className="flex flex-col items-center gap-1">
                                        <span className={`inline-flex items-center justify-center px-3 py-1 min-w-[2.5rem] h-8 rounded-lg font-bold text-xs border whitespace-nowrap ${getGradeColor(achievement.grade.gradeName)}`}>
                                            {achievement.grade.gradeName}
                                        </span>
                                        <span className="text-xs text-gray-500">{achievement.grade.points} pts</span>
                                    </div>
                                ) : (
                                    <span className="text-gray-400 text-sm">-</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button
                                    onClick={() => onAssignGrade(achievement)}
                                    className="px-3 py-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                                >
                                    {achievement.grade ? "Ubah Grade" : "Assign Grade"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}
