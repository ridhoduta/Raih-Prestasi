export default function Tentang() {
  return (
    <section className="py-section-padding bg-surface" id="about">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-container/10 text-primary-container border border-primary-container/20">
            Tentang Pembuat
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            Di Balik <span className="text-primary-container">Raih Prestasi</span>
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto rounded-full opacity-60"></div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">

          {/* Left — Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm sticky top-24">
            {/* Photo */}
            <div className="h-72 bg-surface-container-low relative overflow-hidden">
              <img
                src="https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/public/dokument-pengajuan/profile.jpeg"
                alt="Foto profil Ridho Duta Yuwana"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Info */}
            <div className="px-6 pb-6 -mt-2 text-center space-y-1">
              <h3 className="font-headline-md text-headline-md text-on-surface">Ridho Duta Yuwana</h3>
              <p className="text-sm font-semibold text-primary-container uppercase tracking-widest">
                Frontend Developer
              </p>
              <p className="text-sm text-on-surface-variant pt-1"> POLINEMA- D3 Manajemen Informatika</p>
            </div>

            <div className="border-t border-slate-100 mx-6"></div>

            {/* Contact links */}
            <div className="px-6 py-5 space-y-3">
              <a
                href="https://github.com/ridhoduta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary-container transition-colors group"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors" style={{ fontSize: "18px" }}>code</span>
                github.com/ridhoduta
              </a>
              <a
                href="mailto:ridhodutay@gmail.com"
                className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary-container transition-colors group"
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors" style={{ fontSize: "18px" }}>mail</span>
                ridhodutay@gmail.com
              </a>
            </div>
          </div>

          {/* Right — Story */}
          <div className="space-y-8">

            {/* Intro quote */}
            <div className="relative pl-6 border-l-2 border-primary-container">
              <p className="text-xl font-semibold text-on-surface leading-relaxed italic">
                "Sistem ini lahir dari keresahan nyata — data prestasi siswa yang tersebar, proses verifikasi yang lambat, dan tidak adanya platform terpadu untuk mengelola semua itu."
              </p>
            </div>

            {/* Narrative */}
            <div className="space-y-5 text-body-md text-on-surface-variant leading-relaxed">
              <p>
                Saya membuat <span className="font-semibold text-on-surface">Raih Prestasi</span> sebagai proyek pengembangan sistem informasi yang bertujuan menjawab permasalahan nyata di sekolah — bagaimana mengelola kompetisi, prestasi siswa, dan konversi nilai secara efisien dalam satu platform yang terintegrasi.
              </p>
              <p>
                Selama ini, proses pendaftaran kompetisi dilakukan secara manual melalui pesan atau formulir fisik, verifikasi guru tidak terdokumentasi dengan baik, dan tidak ada cara mudah bagi siswa untuk memantau status mereka. Raih Prestasi hadir untuk mengubah itu semua.
              </p>
              <p>
                Sistem ini dibangun dengan <span className="font-semibold text-on-surface">Next.js, Supabase, dan Flutter</span> — menggabungkan web admin untuk guru & admin sekolah, serta aplikasi mobile untuk siswa agar dapat mengakses semua fitur kapan saja dan di mana saja.
              </p>
            </div>

            {/* Key motivation points */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: "lightbulb", label: "Latar Belakang", value: "Masalah nyata di sekolah yang belum terdigitalisasi" },
                { icon: "build", label: "Solusi", value: "Platform terintegrasi web & mobile untuk semua pihak" },
                { icon: "flag", label: "Tujuan", value: "Mempermudah pengelolaan prestasi dan kompetisi siswa" },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white rounded-xl border border-slate-100 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container" style={{ fontSize: "18px" }}>{item.icon}</span>
                    <span className="text-xs font-bold text-primary-container uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-snug">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm font-semibold text-on-surface-variant mr-1">Tech Stack:</span>
              {["Next.js", "TypeScript", "Supabase", "Prisma", "Flutter", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm rounded-full bg-surface-container border border-slate-200 text-on-surface font-medium">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
