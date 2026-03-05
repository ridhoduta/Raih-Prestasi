"use client";

import { useState, useRef } from "react";
import * as xlsx from "xlsx";
import { X, Upload, Download, FileSpreadsheet, Loader2, AlertCircle } from "lucide-react";

interface ImportExcelModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: "siswa" | "guru";
    onSubmit: (data: any[]) => Promise<void>;
    isLoading?: boolean;
}

export default function ImportExcelModal({
    isOpen,
    onClose,
    type,
    onSubmit,
    isLoading = false,
}: ImportExcelModalProps) {
    const [dataPreview, setDataPreview] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const expectedHeaders = type === "siswa"
        ? ["NISN", "Nama", "Kelas", "Angkatan"]
        : ["Nama", "Email"];

    const handleDownloadTemplate = () => {
        const ws = xlsx.utils.aoa_to_sheet([expectedHeaders]);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, "Template");
        xlsx.writeFile(wb, `Template_Import_${type === "siswa" ? "Siswa" : "Guru"}.xlsx`);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError(null);
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const bstr = event.target?.result;
                const wb = xlsx.read(bstr, { type: "binary" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = xlsx.utils.sheet_to_json(ws, { header: 1 });

                if (data.length < 2) {
                    setError("File kosong atau tidak memiliki data.");
                    return;
                }

                const headers: any = data[0];
                // Validasi struktur header sederhana
                const isValid = expectedHeaders.every((h, i) => headers[i]?.toString().trim().toLowerCase() === h.toLowerCase());

                if (!isValid) {
                    setError(`Format header tidak sesuai. Harap gunakan template yang disediakan. Header yang diharapkan: ${expectedHeaders.join(", ")}`);
                    return;
                }

                const json: any[] = xlsx.utils.sheet_to_json(ws);

                // Hapus data kosong
                const cleanData = json.filter(row => Object.keys(row).length > 0);

                if (cleanData.length === 0) {
                    setError("Tidak ada data valid yang ditemukan.");
                    return;
                }

                setDataPreview(cleanData);
            } catch (err) {
                setError("Gagal membaca file Excel. Pastikan formatnya benar.");
            }
        };

        reader.readAsBinaryString(file);
    };

    const handleSubmit = async () => {
        if (dataPreview.length === 0) return;
        try {
            await onSubmit(dataPreview);
        } catch (err) {
            // Error handled by parent passing the handler
        }
    };

    const resetState = () => {
        setDataPreview([]);
        setError(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleClose = () => {
        resetState();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                            <FileSpreadsheet size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Import Data {type === "siswa" ? "Siswa" : "Guru"}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Upload file Excel (.xlsx) untuk menambahkan data sekaligus
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={isLoading}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 overflow-y-auto space-y-6">

                    {/* Step 1: Download Template */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">1</span>
                            Download Template
                        </h3>
                        <div className="pl-8">
                            <p className="text-sm text-gray-600 mb-3">
                                Gunakan template Excel ini agar format data sesuai dengan sistem.
                            </p>
                            <button
                                onClick={handleDownloadTemplate}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
                            >
                                <Download size={16} />
                                Download Template .xlsx
                            </button>
                        </div>
                    </div>

                    {/* Step 2: Upload File */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 flex items-center gap-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">2</span>
                            Upload File & Preview
                        </h3>
                        <div className="pl-8 space-y-4">

                            <div className="relative">
                                <input
                                    type="file"
                                    accept=".xlsx, .xls"
                                    onChange={handleFileUpload}
                                    ref={fileInputRef}
                                    className="hidden"
                                    id="excel-upload"
                                />
                                <label
                                    htmlFor="excel-upload"
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <Upload className="w-8 h-8 mb-3 text-gray-400" />
                                        <p className="mb-2 text-sm text-gray-500">
                                            <span className="font-semibold text-emerald-600">Klik untuk upload</span> atau drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500">MAX. 5MB (.xlsx)</p>
                                    </div>
                                </label>
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-lg text-sm flex items-start gap-2">
                                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                                    <p>{error}</p>
                                </div>
                            )}

                            {/* Preview Table */}
                            {dataPreview.length > 0 && !error && (
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 flex justify-between">
                                        <span>Preview Data ({dataPreview.length} baris)</span>
                                        <button onClick={resetState} className="text-red-500 hover:underline">Reset</button>
                                    </div>
                                    <div className="max-h-60 overflow-y-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-gray-50 sticky top-0 shadow-sm">
                                                <tr>
                                                    {expectedHeaders.map((h, i) => (
                                                        <th key={i} className="px-4 py-2 font-medium text-gray-600">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {dataPreview.slice(0, 50).map((row, rowIndex) => (
                                                    <tr key={rowIndex} className="hover:bg-gray-50">
                                                        {expectedHeaders.map((h, colIndex) => (
                                                            <td key={colIndex} className="px-4 py-2 text-gray-800">
                                                                {String(row[h] || "-")}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {dataPreview.length > 50 && (
                                            <div className="p-2 text-center text-xs text-gray-500 bg-gray-50">
                                                Menampilkan 50 data pertama...
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
                    <button
                        onClick={handleClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={isLoading}
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading || dataPreview.length === 0 || !!error}
                        className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Menyimpan...
                            </>
                        ) : (
                            <>Simpan Data</>
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
}
