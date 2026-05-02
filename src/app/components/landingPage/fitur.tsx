export default function Fitur() {
  return (
    <section className="py-section-padding bg-surface" id="features">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-background">FITUR RAIH PRESTASI</h2>
          <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Ekosistem lengkap dengan fitur sederhana dan fungsional untuk mendukung pertumbuhan akademik Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="dashboard">dashboard</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Monitoring Terpadu</h3>
            <p className="text-body-md text-on-surface-variant">Lacak semua progres pendaftaran beasiswa dan kompetisi dalam satu dashboard yang intuitif.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="school">school</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Mentoring Privat</h3>
            <p className="text-body-md text-on-surface-variant">Konsultasi langsung dengan mentor berpengalaman untuk bimbingan esai dan interview beasiswa.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="groups">groups</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Komunitas Aktif</h3>
            <p className="text-body-md text-on-surface-variant">Bergabung dengan ribuan pejuang prestasi lainnya untuk berbagi info, tips, dan motivasi harian.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="library_books">library_books</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Bank Soal &amp; Materi</h3>
            <p className="text-body-md text-on-surface-variant">Akses ribuan materi persiapan kompetisi sains, olahraga, dan seni yang selalu diperbarui.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="notifications_active">notifications_active</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Notifikasi Real-time</h3>
            <p className="text-body-md text-on-surface-variant">Dapatkan update langsung mengenai status aplikasi dan tenggat waktu pendaftaran penting.</p>
          </div>
          {/* Feature Card 6 */}
          <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#224F1F]rounded-xl flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="psychology">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Analisis AI</h3>
            <p className="text-body-md text-on-surface-variant">Rekomendasi peluang beasiswa dan kompetisi yang dipersonalisasi berdasarkan profil Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
