import { useState } from "react";
import { Trophy, FileText, Star } from "lucide-react";
import { AcademicModal } from "./academicModal";

interface AcademicTableProps {
  students: any[];
  academicYears: any[];
  onSaveScores: (payload: any) => void;
  yearId: string;
  semester: any;
}

export const AcademicTable = ({ students, academicYears, onSaveScores, yearId, semester }: AcademicTableProps) => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);

  const handleOpenScoreModal = (student: any) => {
    setSelectedStudent(student);
    setIsScoreModalOpen(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Siswa Berprestasi</th>
            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Prestasi Terverifikasi</th>
            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Reward Nilai</th>
            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {students?.map((student) => {
            // Collect all scores from achievements
            const rewards = student.achievements
              ?.map((ach: any) => ach.academicScore)
              ?.filter(Boolean) || [];

            return (
              <tr key={student?.id || Math.random()} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                      {student.name?.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{student.name}</div>
                      <div className="text-xs text-gray-400">{student.nisn} • {student.kelas}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5 max-w-xs">
                    {student?.achievements?.map((ach: any) => (
                      <span key={ach.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                        <Trophy size={10} />
                        {ach.competitionName}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {rewards.length > 0 ? (
                      rewards.map((score: any) => (
                        <span key={score.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                          <Star size={10} className="fill-blue-700" />
                          {score.subject}: {score.score}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-400 italic">Belum ada reward</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleOpenScoreModal(student)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all text-xs font-bold border border-emerald-100 shadow-sm"
                  >
                    <FileText size={14} />
                    Atur Reward
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AcademicModal 
        isOpen={isScoreModalOpen}
        onClose={() => setIsScoreModalOpen(false)}
        student={selectedStudent}
        academicYears={academicYears}
        onSave={onSaveScores}
        defaultYear={yearId}
        defaultSemester={semester}
      />
    </div>
  );
};