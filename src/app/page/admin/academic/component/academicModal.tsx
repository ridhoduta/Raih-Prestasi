import { useState, useEffect } from "react";
import { Plus, X, Save } from "lucide-react";

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: any;
  academicYears?: any[];
  onSave: (studentId: string, scores: any[], yearId: string, semester: any) => void;
  defaultYear?: string;
  defaultSemester?: any;
}

export const AcademicModal = ({ 
  isOpen, 
  onClose, 
  student, 
  academicYears = [],
  onSave, 
  defaultYear = "2023/2024", 
  defaultSemester = "GANJIL" 
}: AcademicModalProps) => {
  const [tempScores, setTempScores] = useState<{ subject: string; score: string }[]>([]);
  const [yearId, setYearId] = useState(defaultYear);
  const [semester, setSemester] = useState(defaultSemester);

  useEffect(() => {
    if (isOpen && student) {
      setYearId(defaultYear);
      setSemester(defaultSemester);
      
      if (student.academicScores && student.academicScores.length > 0) {
        const existingScores = student.academicScores.filter((s: any) => 
          s.yearId === defaultYear && s.semester === defaultSemester
        );

        if (existingScores.length > 0) {
          setTempScores(existingScores.map((s: any) => ({ 
            subject: s.subject, 
            score: s.score?.toString() || "" 
          })));
        } else {
          setTempScores([{ subject: "", score: "" }]);
        }
      } else {
        setTempScores([{ subject: "", score: "" }]);
      }
    }
  }, [isOpen, student, defaultYear, defaultSemester]);

  if (!isOpen) return null;



  const handleScoreChange = (index: number, field: "subject" | "score", value: string) => {
    if (field === "score") {
      // Tolak nilai negatif atau lebih dari 100
      if (value !== "" && (parseFloat(value) < 0 || parseFloat(value) > 100)) return;
    }
    const newScores = [...tempScores];
    newScores[index][field] = value;
    setTempScores(newScores);
  };

  const handleSubmit = () => {
    if (!student?.id) return;
    const validScores = tempScores
      .filter(s => s.subject && s.score)
      .filter(s => parseFloat(s.score) >= 0 && parseFloat(s.score) <= 100)
      .map(s => ({ subject: s.subject, score: parseFloat(s.score) }));
    if (validScores.length === 0) return;
    onSave(student.id, validScores, yearId, semester);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">Input Nilai Akademik</h3>
            <p className="text-sm text-gray-500 font-medium">Siswa: {student?.name}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Periode Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Tahun Ajaran</label>
              <select 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-700 font-semibold"
                value={yearId}
                onChange={(e) => setYearId(e.target.value)}
                disabled={academicYears.length === 0}
              >
                {academicYears.map((ay: any) => (
                  <option key={ay.id} value={ay.id}>
                    {ay.year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Semester</label>
              <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => setSemester("GANJIL")}
                  className={`flex-1 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                    semester === "GANJIL" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-400 font-medium"
                  }`}
                >
                  Ganjil
                </button>
                <button
                  type="button"
                  onClick={() => setSemester("GENAP")}
                  className={`flex-1 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                    semester === "GENAP" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-400 font-medium"
                  }`}
                >
                  Genap
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-50 w-full"></div>

          <div className="space-y-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Daftar Mata Pelajaran & Nilai</div>
            
            {tempScores.map((item, index) => (
              <div key={index} className="flex gap-3 items-center group">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Mata Pelajaran"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-900 font-medium"
                    value={item.subject}
                    onChange={(e) => handleScoreChange(index, "subject", e.target.value)}
                  />
                </div>
                <div className="w-24">
                  <input
                    type="number"
                    placeholder="Nilai"
                    min={0}
                    max={100}
                    step={0.1}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-sm text-gray-900 font-bold text-center"
                    value={item.score}
                    onChange={(e) => handleScoreChange(index, "score", e.target.value)}
                    onKeyDown={(e) => {
                      // Blokir karakter minus dan tanda plus di keyboard
                      if (e.key === "-" || e.key === "+") e.preventDefault();
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-2xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 font-bold transition-all shadow-sm"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="flex-[2] py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Save size={18} />
            Simpan Nilai
          </button>
        </div>
      </div>
    </div>
  );
};