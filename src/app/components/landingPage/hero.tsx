export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-8 max-w-[1280px] mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-display-hero text-display-hero text-on-background">
            <span className="text-primary-container">RAIH PRESTASI</span><br/>
            Wujudkan Ambisi Akademik Anda
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Satu platform terintegrasi untuk mengelola kompetisi, beasiswa, dan pencapaian akademik. Mulailah perjalanan sukses Anda hari ini.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-primary-container text-white font-headline-md rounded-xl hover:shadow-xl hover:shadow-primary-container/40 transition-all active:scale-95">
              <span className="material-symbols-outlined" data-icon="download">download</span>
              Download
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border-2 border-outline-variant text-on-surface font-headline-md rounded-xl hover:bg-surface-container transition-all active:scale-95">
              Pelajari Fitur
            </button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-on-surface-variant">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-container"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-container"></div>
            </div>
            <span className="text-label-sm">Bergabung dengan 10k+ Siswa Berprestasi</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 ambient-shadow rounded-3xl overflow-hidden aspect-square">
            <img className="w-full h-full object-cover" data-alt="University students working together in a bright, modern learning hub." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkY5maibFCMb-YQbDO-XSMVtTZ0JQ4bjy4SXoBDKMY3xyfd2Z0whomEhpjgO9xmAx2N22hjqHaNreHpbWqtZH0NEzL341htfsrrdHfBPOjpWMxbbl8jHmYdE5qFAohjXDUXJ76BuygzNyQ-5C6L9dgwBK83ZG7hT80EudBLU7aTZIX41SjplzGM5HDIAuZ-ivtt5ydxeAIOU8Zsla0t_VZluxtFaoECjBVA_51-ZP-6rPjVwjR6UhpSEgkPvX_mYM1fxRit4GVzWs"/>
          </div>
          <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
            </div>
            <div>
              <div className="text-label-bold text-on-surface">Peningkatan 85%</div>
              <div className="text-label-sm text-on-surface-variant">Rata-rata Kelulusan Beasiswa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
