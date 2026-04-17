import { useState, useEffect } from "react";
import { X, Save, Trophy, Loader2, Check } from "lucide-react";

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: any;
  academicYears?: any[];
  onSave: (payload: {
    studentId: string;
    achievementId: string;
    subject: string;
    score: number;
    yearId: string;
    semester: any;
  }) => void;
  defaultYear?: string;
  defaultSemester?: any;
}

export const AcademicModal = ({ 
  isOpen, 
  onClose, 
  student, 
  academicYears = [],
  onSave, 
  defaultYear = "", 
  defaultSemester = "GANJIL" 
}: AcademicModalProps) => {
  // Track local inputs for each achievement
  const [inputs, setInputs] = useState<Record<string, { 
    subject: string; 
    score: string;
    yearId: string;
    semester: string;
  }>>({});

  useEffect(() => {
    if (isOpen && student) {
      const initialInputs: Record<string, { subject: string; score: string; yearId: string; semester: string }> = {};
      student.achievements?.forEach((ach: any) => {
        initialInputs[ach.id] = {
          subject: ach.academicScore?.subject || "",
          score: ach.academicScore?.score?.toString() || "",
          yearId: ach.academicScore?.yearId || defaultYear || (academicYears.length > 0 ? academicYears[0].id : ""),
          semester: ach.academicScore?.semester || defaultSemester
        };
      });
      setInputs(initialInputs);
    }
  }, [isOpen, student, defaultYear, defaultSemester, academicYears]);

  if (!isOpen) return null;

  const handleInputChange = (achievementId: string, field: string, value: string) => {
    if (field === "score") {
      if (value !== "" && (parseFloat(value) < 0 || parseFloat(value) > 100)) return;
    }
    setInputs(prev => ({
      ...prev,
      [achievementId]: {
        ...prev[achievementId],
        [field]: value
      }
    }));
  };

  const handleSaveAchievementScore = (achievementId: string) => {
    if (!student?.id) return;
    const input = inputs[achievementId];
    if (!input.subject || !input.score || !input.yearId) return;
    
    onSave({
      studentId: student.id,
      achievementId,
      subject: input.subject,
      score: parseFloat(input.score),
      yearId: input.yearId,
      semester: input.semester
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">Reward Nilai Akademik</h3>
            <p className="text-sm text-gray-500 font-medium italic">Siswa: {student?.name}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* List of Achievements */}
          <div className="space-y-6">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Tentukan Reward per Prestasi</div>
            
            {student.achievements?.length > 0 ? (
              student.achievements.map((ach: any) => {
                const currentInput = inputs[ach.id] || { subject: "", score: "", yearId: "", semester: "GANJIL" };
                const isSaved = ach.academicScore != null;

                return (
                  <div key={ach.id} className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl space-y-5 hover:border-emerald-100 transition-all">
                    {/* Achievement Info */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                        <Trophy size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{ach.competitionName}</div>
                        <div className="text-xs text-gray-500">{ach.result} • {ach.points} Poin</div>
                      </div>
                    </div>

                    <div className="h-px bg-gray-100 w-full opacity-50"></div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Academic Year */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Tahun Ajaran</label>
                        <select 
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-700 font-semibold"
                          value={currentInput.yearId}
                          onChange={(e) => handleInputChange(ach.id, "yearId", e.target.value)}
                        >
                          <option value="" disabled>Pilih Tahun</option>
                          {academicYears.map((ay: any) => (
                            <option key={ay.id} value={ay.id}>
                              {ay.year}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Semester Toggle */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Semester</label>
                        <div className="flex p-1 bg-white rounded-xl border border-gray-200">
                          <button
                            type="button"
                            onClick={() => handleInputChange(ach.id, "semester", "GANJIL")}
                            className={`flex-1 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                              currentInput.semester === "GANJIL" ? "bg-emerald-50 text-emerald-600 shadow-sm" : "text-gray-400 font-medium"
                            }`}
                          >
                            Ganjil
                          </button>
                          <button
                            type="button"
                            onClick={() => handleInputChange(ach.id, "semester", "GENAP")}
                            className={`flex-1 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                              currentInput.semester === "GENAP" ? "bg-emerald-50 text-emerald-600 shadow-sm" : "text-gray-400 font-medium"
                            }`}
                          >
                            Genap
                          </button>
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Mata Pelajaran Reward</label>
                        <input
                          type="text"
                          placeholder="Misal: Fisika / Matematika"
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-900 font-medium"
                          value={currentInput.subject}
                          onChange={(e) => handleInputChange(ach.id, "subject", e.target.value)}
                        />
                      </div>

                      {/* Score & Button */}
                      <div className="flex gap-3 items-end">
                        <div className="flex-1 space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Nilai</label>
                          <input
                            type="number"
                            placeholder="0-100"
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-900 font-bold text-center"
                            value={currentInput.score}
                            onChange={(e) => handleInputChange(ach.id, "score", e.target.value)}
                          />
                        </div>
                        <button
                          onClick={() => handleSaveAchievementScore(ach.id)}
                          disabled={!currentInput.subject || !currentInput.score || !currentInput.yearId}
                          className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-sm whitespace-nowrap ${
                            isSaved 
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100"
                              : "bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                          }`}
                        >
                          {isSaved ? <Check size={14} /> : <Save size={14} />}
                          {isSaved ? "Update" : "Simpan"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-400 italic text-sm">
                Siswa belum memiliki prestasi terverifikasi.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="w-32 py-2.5 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 font-bold transition-all shadow-sm"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};