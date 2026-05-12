"use client"

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft, Download, Loader2, RefreshCw } from "lucide-react";
import { RekomData, RekomPDF } from "@/app/service/generatePdf";

// Dynamically import PDFViewer to avoid SSR issues
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

function RekomViewerContent() {
    const router = useRouter();
    const [data, setData] = useState<RekomData | null>(null);

    useEffect(() => {
        // Read from localStorage
        const storedData = localStorage.getItem("rekom_pdf_data");
        if (storedData) {
            try {
                setData(JSON.parse(storedData));
            } catch (e) {
                console.error("Failed to parse stored PDF data", e);
                router.push("/page/pdf/rekom/form");
            }
        } else {
            // Fallback to form if no data
            router.push("/page/pdf/rekom/form");
        }
    }, [router]);

    if (!data) return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <Loader2 size={40} className="animate-spin text-emerald-500 mb-4" />
            <p>Menyiapkan Preview...</p>
        </div>
    );

    return (
        <div className="flex flex-col h-screen bg-gray-900 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-white font-bold">Preview Surat Rekomendasi</h1>
                        <p className="text-xs text-gray-400">Preview mode - {data.namaSiswa}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => router.push("/page/pdf/rekom/form")}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                    >
                        <RefreshCw size={16} />
                        Edit Data
                    </button>
                    <PDFDownloadLink
                        document={<RekomPDF data={data} />}
                        fileName={`Surat_Rekomendasi_${data.namaSiswa.replace(/\s+/g, '_')}.pdf`}
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                    >
                        {({ loading }) => (
                            <>
                                {loading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                                {loading ? "Menyiapkan..." : "Download PDF"}
                            </>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>

            <div className="flex-1 w-full bg-gray-900 p-4">
                <PDFViewer style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}>
                    <RekomPDF data={data} />
                </PDFViewer>
            </div>
        </div>
    );
}

export default function RekomViewer() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <Loader2 size={40} className="animate-spin text-emerald-500 mb-4" />
                <p>Memuat PDF Viewer...</p>
            </div>
        }>
            <RekomViewerContent />
        </Suspense>
    );
}