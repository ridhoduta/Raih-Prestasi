export default function Fitur() {
  return (
    <section className="py-section-padding bg-surface" id="features">
  <div className="max-w-[1280px] mx-auto px-8">
    <div className="text-center mb-16 space-y-4">
      <h2 className="font-headline-lg text-headline-lg text-on-background">FITUR RAIH PRESTASI</h2>
      <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
      <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
        Ekosistem lengkap untuk mengelola kompetisi, prestasi, dan perkembangan akademik siswa secara terintegrasi.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Feature 1 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Manajemen Role & Akses</h3>
        <p className="text-body-md text-on-surface-variant">
          Sistem dengan kontrol akses Admin, Guru, dan Siswa untuk memastikan pengelolaan data yang aman dan terstruktur.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">emoji_events</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Manajemen Kompetisi</h3>
        <p className="text-body-md text-on-surface-variant">
          Guru dapat membuat dan mengelola kompetisi lengkap dengan kategori, tingkat, serta formulir pendaftaran dinamis.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">assignment</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Pengajuan Mandiri</h3>
        <p className="text-body-md text-on-surface-variant">
          Siswa dapat mengajukan kompetisi eksternal dengan unggah dokumen, serta mendapatkan verifikasi dan rekomendasi dari guru.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">workspace_premium</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Manajemen Prestasi</h3>
        <p className="text-body-md text-on-surface-variant">
          Klaim, unggah sertifikat, dan verifikasi prestasi siswa dengan sistem poin untuk mendukung penilaian.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Integrasi Nilai Akademik</h3>
        <p className="text-body-md text-on-surface-variant">
          Prestasi yang terverifikasi dapat dikonversi menjadi nilai akademik berdasarkan tahun ajaran dan semester.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-primary-container/30 hover:bg-emerald-50/20 transition-all duration-300 group">
        <div className="w-14 h-14 bg-[#224F1F] rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
          <span className="material-symbols-outlined text-3xl">notifications</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Notifikasi Real-time</h3>
        <p className="text-body-md text-on-surface-variant">
          Sistem notifikasi terintegrasi dengan mobile app untuk update status pendaftaran, prestasi, dan pengumuman.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}
