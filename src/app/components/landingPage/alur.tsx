"use client"

import { useState } from "react";

const steps = [
  {
    number: 1,
    icon: "search",
    title: "Cari Kompetisi",
    description: "Temukan berbagai kompetisi yang tersedia sesuai minat, bidang, dan tingkatmu di halaman daftar kompetisi.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",
    alt: "Cari kompetisi",
  },
  {
    number: 2,
    icon: "edit_note",
    title: "Isi Formulir",
    description: "Lengkapi formulir pendaftaran yang disesuaikan oleh guru atau penyelenggara, lalu kirimkan pengajuanmu.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85",
    alt: "Isi formulir pendaftaran",
  },
  {
    number: 3,
    icon: "verified_user",
    title: "Verifikasi Guru",
    description: "Pendaftaran ditinjau dan diverifikasi oleh guru atau admin sekolah sebelum resmi diproses.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85",
    alt: "Verifikasi oleh guru",
  },
  {
    number: 4,
    icon: "track_changes",
    title: "Pantau Status",
    description: "Pantau status pendaftaran secara real-time dan terima notifikasi langsung ke aplikasi mobilemu.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    alt: "Pantau status pendaftaran",
  },
];

export default function Alur() {
  const [preview, setPreview] = useState<{ img: string; alt: string; title: string } | null>(null);

  return (
    <>
      <section className="py-section-padding bg-surface-container-low overflow-hidden" id="alur">
        <div className="max-w-[1280px] mx-auto px-8">

          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-container/10 text-primary-container border border-primary-container/20">
              Cara Kerja
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              Alur Pendaftaran <span className="text-primary-container">Kompetisi</span>
            </h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full opacity-60"></div>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
              Empat langkah mudah untuk mendaftar kompetisi dan memantau perkembanganmu.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/20"
              >
                {/* Image — click to preview */}
                <div
                  className="relative h-52 overflow-hidden cursor-zoom-in"
                  onClick={() => setPreview({ img: step.img, alt: step.alt, title: step.title })}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={step.img}
                    alt={step.alt}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  {/* Step number */}
                  <div className="absolute top-3 left-3 w-9 h-9 bg-primary-container text-white rounded-xl flex items-center justify-center font-bold text-base shadow-md">
                    {step.number}
                  </div>
                  {/* Preview hint */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 bg-black/60 text-white text-xs px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>zoom_in</span>
                      Preview
                    </div>
                  </div>
                  {/* Connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center shadow">
                      <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "13px" }}>chevron_right</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-container" style={{ fontSize: "20px" }}>{step.icon}</span>
                    <span className="text-xs font-semibold text-primary-container uppercase tracking-widest">Langkah {step.number}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-on-surface mb-2">{step.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{step.description}</p>
                </div>

                {/* Bottom accent */}
                <div className="h-0.5 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Preview */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              onClick={() => setPreview(null)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>close</span>
            </button>

            {/* Image */}
            <img
              src={preview.img}
              alt={preview.alt}
              className="w-full max-h-[70vh] object-cover"
            />

            {/* Caption */}
            <div className="px-6 py-4 flex items-center gap-3 border-t border-slate-100">
              <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: "16px" }}>image</span>
              </div>
              <span className="font-semibold text-on-surface">{preview.title}</span>
              <span className="ml-auto text-sm text-on-surface-variant">Klik di luar untuk menutup</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}