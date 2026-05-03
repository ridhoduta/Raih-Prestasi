"use client"

const features = [
  {
    role: "Admin",
    // Dark forest green — closest to #224F1F (primary-container)
    roleColor: "from-green-900 to-green-800",
    roleBg: "bg-green-50",
    roleBorder: "border-green-200",
    roleHover: "hover:border-green-400",
    roleTag: "bg-green-100 text-green-900",
    roleGlow: "group-hover:shadow-green-200/60",
    icon: "admin_panel_settings",
    iconBg: "from-green-900 to-green-700",
    title: "Kelola Seluruh Sistem",
    subtitle: "Kontrol penuh atas platform",
    description:
      "Admin mengelola akun pengguna, melihat seluruh data kompetisi & prestasi, serta memastikan sistem berjalan optimal untuk semua pihak.",
    points: ["Manajemen akun & role", "Monitoring seluruh data", "Konfigurasi sistem"],
  },
  {
    role: "Guru",
    // Medium green — closest to #3E7C59 (secondary) & #4CAF50 (primary)
    roleColor: "from-green-600 to-emerald-700",
    roleBg: "bg-emerald-50",
    roleBorder: "border-emerald-200",
    roleHover: "hover:border-emerald-500",
    roleTag: "bg-emerald-100 text-emerald-800",
    roleGlow: "group-hover:shadow-emerald-200/60",
    icon: "school",
    iconBg: "from-green-600 to-emerald-700",
    title: "Buat & Verifikasi Kompetisi",
    subtitle: "Wewenang penuh atas kompetisi",
    description:
      "Guru membuat kompetisi dengan formulir dinamis, memverifikasi pengajuan mandiri siswa, serta mengonversi prestasi menjadi nilai akademik.",
    points: ["Buat & kelola kompetisi", "Verifikasi pengajuan siswa", "Konversi prestasi ke nilai"],
  },
  {
    role: "Siswa",
    // Sage/teal green — closest to #6B8E73 (tertiary)
    roleColor: "from-teal-600 to-green-600",
    roleBg: "bg-teal-50",
    roleBorder: "border-teal-200",
    roleHover: "hover:border-teal-400",
    roleTag: "bg-teal-100 text-teal-800",
    roleGlow: "group-hover:shadow-teal-200/60",
    icon: "emoji_events",
    iconBg: "from-teal-600 to-green-600",
    title: "Daftar & Raih Prestasi",
    subtitle: "Semua aktivitas dalam satu app",
    description:
      "Siswa mendaftar kompetisi, mengajukan prestasi mandiri dengan unggah dokumen, memantau status secara real-time, dan menerima notifikasi langsung.",
    points: ["Daftar kompetisi sekolah", "Ajukan prestasi mandiri", "Pantau status real-time"],
  },
];

const globalFeatures = [
  { icon: "verified", label: "Verifikasi Berlapis" },
  { icon: "notifications_active", label: "Notifikasi Real-time" },
  { icon: "leaderboard", label: "Sistem Poin & Peringkat" },
  { icon: "mobile_friendly", label: "Terintegrasi Mobile App" },
];

export default function Fitur() {
  return (
    <section className="py-section-padding bg-surface overflow-hidden" id="features">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-container/10 text-primary-container border border-primary-container/20">
            Panduan Pengguna
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            Siapa Saja yang Menggunakan<br/>
            <span className="text-primary-container">Raih Prestasi?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-container to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
            Platform ini dirancang untuk tiga peran utama. Temukan fitur yang tepat sesuai peranmu.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <div
              key={f.role}
              className={`group relative p-7 bg-white rounded-3xl border ${f.roleBorder} ${f.roleHover} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${f.roleGlow} cursor-default overflow-hidden`}
            >
              {/* Background decoration */}
              <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-br ${f.iconBg} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Role badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${f.roleTag}`}>
                {f.role}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${f.iconBg} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="material-symbols-outlined text-[28px]">{f.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{f.title}</h3>
              <p className="text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wide">{f.subtitle}</p>
              <p className="text-body-md text-on-surface-variant mb-5 leading-relaxed">{f.description}</p>

              {/* Feature points */}
              <ul className="space-y-2">
                {f.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-on-surface">
                    <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${f.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-white" style={{ fontSize: "13px" }}>check</span>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bottom gradient line on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${f.roleColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Global Features Strip */}
        <div className="bg-gradient-to-r from-primary-container to-[#3E7C59] rounded-2xl p-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest w-full md:w-auto text-center">Fitur Pendukung Platform</p>
          {globalFeatures.map((gf) => (
            <div key={gf.label} className="flex items-center gap-2.5 text-white">
              <span className="material-symbols-outlined text-white/70" style={{ fontSize: "20px" }}>{gf.icon}</span>
              <span className="text-sm font-medium">{gf.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
