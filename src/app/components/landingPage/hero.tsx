"use client"

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-8 max-w-[1280px] mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-display-hero text-display-hero text-on-background">
            <span className="text-primary-container">RAIH PRESTASI</span><br />
            Kelola Kompetisi & Prestasi Siswa dalam Satu Sistem
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Platform terintegrasi untuk pendaftaran kompetisi, pengajuan mandiri,
            verifikasi prestasi, hingga konversi ke nilai akademik secara efisien dan terstruktur.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/apk/raih-prestasi.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-primary-container text-white font-headline-md rounded-xl hover:shadow-xl hover:shadow-primary-container/40 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">download</span>
              Download Aplikasi
            </a>

            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 px-8 py-4 border-2 border-outline-variant text-on-surface font-headline-md rounded-xl hover:bg-surface-container transition-all active:scale-95">
              Lihat Fitur
            </button>
          </div>

          {/* Optional highlight */}
          <div className="flex gap-6 pt-6 text-sm text-on-surface-variant">
            <span>✔ Manajemen Kompetisi</span>
            <span>✔ Verifikasi Prestasi</span>
            <span>✔ Integrasi Nilai</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 ambient-shadow rounded-3xl overflow-hidden">
            <img
              className="w-full h-auto"
              alt="Siswa berprestasi dan aktivitas kompetisi"
              src="https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/public/dokument-pengajuan/heroImg.png"
            />
          </div>

          {/* Stats Card */}
          <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">emoji_events</span>
            </div>
            <div>
              <div className="text-label-bold text-on-surface">100+ Prestasi</div>
              <div className="text-label-sm text-on-surface-variant">Terverifikasi Sistem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}