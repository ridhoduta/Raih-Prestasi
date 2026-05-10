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
                "Raih Prestasi dibangun untuk menjawab tantangan nyata dalam pengelolaan kompetisi siswa — mulai dari penyebaran informasi, proses pendaftaran, hingga validasi prestasi yang sebelumnya masih dilakukan secara manual."
              </p>
            </div>

            {/* Narrative */}
            <div className="space-y-5 text-body-md text-on-surface-variant leading-relaxed">
              <p>
                <span className="font-semibold text-on-surface">Raih Prestasi</span> merupakan sistem informasi berbasis website dan mobile yang dirancang untuk membantu sekolah dalam mengelola kompetisi dan prestasi siswa secara lebih terstruktur. Sistem ini dikembangkan sebagai solusi atas permasalahan penyebaran informasi kompetisi yang belum merata serta proses pencatatan data yang masih dilakukan secara manual.
              </p>

              <p>
                Melalui platform ini, siswa dapat melihat informasi kompetisi, melakukan pendaftaran, mengajukan kompetisi mandiri, hingga melaporkan prestasi secara langsung melalui aplikasi mobile. Admin dan guru juga dapat melakukan proses verifikasi, pengelolaan data, serta penyampaian pengumuman secara terpusat dalam satu sistem yang terintegrasi.
              </p>

              <p>
                Sistem dibangun menggunakan <span className="font-semibold text-on-surface">Next.js, PostgreSQL, Tailwind CSS, Prisma, dan Flutter</span> untuk menghadirkan pengalaman penggunaan yang modern, responsif, dan mudah diakses dari berbagai perangkat. Implementasi fitur seperti notifikasi, pembaruan data secara real-time, dan manajemen multi-role membantu meningkatkan efisiensi pengelolaan kompetisi di lingkungan sekolah.
              </p>
            </div>

            {/* Key motivation points */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {[
                {
                  icon: "school",
                  label: "Latar Belakang",
                  value: "Penyebaran informasi kompetisi belum merata dan proses pencatatan masih manual",
                },
                {
                  icon: "hub",
                  label: "Solusi",
                  value: "Sistem terintegrasi berbasis web dan mobile untuk pengelolaan kompetisi siswa",
                },
                {
                  icon: "emoji_events",
                  label: "Tujuan",
                  value: "Mempermudah pengelolaan prestasi dan aktivitas kompetisi secara digital",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-white rounded-xl border border-slate-100 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-primary-container"
                      style={{ fontSize: "18px" }}
                    >
                      {item.icon}
                    </span>

                    <span className="text-xs font-bold text-primary-container uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>

                  <p className="text-sm text-on-surface-variant leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Features highlight */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Manajemen kompetisi dan pendaftaran siswa",
                "Pengajuan kompetisi mandiri dan pelaporan prestasi",
                "Verifikasi data oleh admin dan guru",
                "Notifikasi dan pembaruan data secara real-time",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface-container border border-slate-200"
                >
                  <span className="material-symbols-outlined text-primary-container">
                    check_circle
                  </span>

                  <p className="text-sm text-on-surface leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-sm font-semibold text-on-surface-variant mr-1">
                Tech Stack:
              </span>

              {[
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Prisma",
                "Flutter",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-surface-container border border-slate-200 text-on-surface font-medium"
                >
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
