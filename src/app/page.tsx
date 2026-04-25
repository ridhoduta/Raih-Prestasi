import Image from "next/image";
import Link from "next/link";

async function getNews() {
  try {
    const res = await fetch("https://raih-prestasi.vercel.app/api/admin/news?limit=4", {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const newsItems = await getNews();
  const mainNews = newsItems.length > 0 ? newsItems[0] : null;
  const listNews = newsItems.length > 1 ? newsItems.slice(1) : [];
  const warna = "#0d631b"; 
  const textWarnaPrimary = "text-[#0d631b]";
  const textWarnaWhite = "text-[#fff]";

  return (
    <div className="font-sans selection:bg-primary selection:text-white">
      {/* ─── HEADER ─── */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-primary/5 transition-all">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/10" style={{ backgroundColor: warna }}>
              <span className="material-symbols-outlined text-white text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">Raih Prestasi</span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#how-to" className="text-sm font-semibold tracking-tight text-slate-600 hover:text-primary transition-colors">Alur</a>
            <a href="#features" className="text-sm font-semibold tracking-tight text-slate-600 hover:text-primary transition-colors">Fitur</a>
            <a href="#news" className="text-sm font-semibold tracking-tight text-slate-600 hover:text-primary transition-colors">Berita</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/page/login" className="px-6 py-2.5 text-[#0d631b] font-bold text-sm hover:bg-[#0d631b]/5 rounded-full transition-all">
              Masuk
            </Link>
            <Link href="/page/login" className="px-8 py-2.5 bg-[#0d631b] text-white rounded-full font-bold text-sm shadow-xl shadow-[#0d631b]/20 hover:scale-105 active:scale-95 transition-all">
              Daftar
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 overflow-x-hidden">
        {/* ─── HERO SECTION ─── */}
        <section id="about" className="relative px-8 py-24 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#abf4ac] text-[#0d631b] rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              Platform Kebanggaan Siswa
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
              Raih Prestasi <br />
              <span className="text-[#0d631b] italic">Akademik Terbaik</span> Anda
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-[540px] leading-relaxed">
              Platform manajemen terpusat untuk memfasilitasi pendataan, verifikasi, dan publikasi prestasi siswa secara transparan antara Admin, Guru, dan Siswa.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/page/login" className="inline-flex items-center px-10 py-5 bg-[#0d631b] text-white rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-2xl shadow-[#0d631b]/20 active:scale-95">
                Daftar Sekarang
              </Link>
              <a href="#how-to" className="inline-flex items-center px-10 py-5 border-2 border-slate-200 text-slate-700 rounded-full text-lg font-bold hover:bg-slate-50 transition-all active:scale-95">
                Lihat Alur
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">Bergabung dengan 50k+ Pelajar</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/50 blur-[100px] rounded-full"></div>
            <div className="bg-white p-4 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
              <div className="relative aspect-[4/3] rounded-[1.8rem] overflow-hidden">
                <Image 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt7SQEKVK2DJn0ooNNY9RgpNXCETImPUunXlpd_Igi71BltEiWHYAMtiELMt0Y8AgmtS3SPSMMhOiHZVYQMIWdhtUsfQCOOaSRf1OecACLyJcjob_nOXaloUUWlqhcsSTNnIjKJGx2nmS2lihzRZ6ESqvE2haEaMbEJNB61ALZ8WAID8yim-ZMhsSe1AT_38uA2b2-JLqVZghXyJ_ijaOhVUVKHdCRVFN2J3UMVDjVDUfYRhTM5hv2934fMieJv6uKA27zmKiVLE4"
                   alt="Dashboard Preview"
                   fill
                   className="object-cover"
                />
              </div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 max-w-[220px] transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Top 1%</p>
                  <p className="text-xl font-extrabold text-slate-900">Distinction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST SECTION ─── */}
        <section className="py-16 px-8 bg-background border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Dipercaya oleh Lembaga Pendidikan Terkemuka</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { name: "EduVanguard", icon: "school" },
                { name: "Global Academy", icon: "account_balance" },
                { name: "YouthLabs", icon: "diversity_3" },
                { name: "Prestasi Kita", icon: "menu_book" },
              ].map((logo) => (
                <div key={logo.name} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl text-slate-600">{logo.icon}</span>
                  <span className="text-xl font-bold text-slate-800 tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section id="how-to" className="bg-[#ebefe5] py-24 px-8 border-b border-slate-100">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-20 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Alur Sistem Terintegrasi</span>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight text-slate-900 leading-tight">Bagaimana Kami <span className="text-primary">Mempersatukan Prestasi</span></h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                { 
                  step: "01", 
                  title: "Inisiasi Strategis", 
                  role: "Admin", 
                  icon: "admin_panel_settings",
                  desc: "Admin mengonfigurasi standar kompetisi, mengelola data pengguna (TS-02-04), dan menetapkan kategori lomba yang seragam." 
                },
                { 
                  step: "02", 
                  title: "Kurasi & Verifikasi", 
                  role: "Guru", 
                  icon: "verified_user",
                  desc: "Guru mempublikasikan lomba dengan form dinamis (TS-12) dan memverifikasi pendaftaran siswa secara real-time (TS-13)." 
                },
                { 
                  step: "03", 
                  title: "Pencapaian & Rekognisi", 
                  role: "Siswa", 
                  icon: "military_tech",
                  desc: "Siswa mendaftar lomba (TS-22), memantau progres, dan mengarsipkan prestasi dalam portofolio digital permanen (TS-27)." 
                },
              ].map((card, idx) => (
                <div key={card.step} className="group relative bg-white border border-slate-200 rounded-[2rem] p-10 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-[120px] font-black text-slate-50/50 group-hover:text-emerald-50 transition-colors pointer-events-none leading-none">
                    {card.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px] text-primary">{card.icon}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">{card.role}</p>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES SECTION (Bento Grid) ─── */}
        <section id="features" className="py-32 px-8 max-w-[1280px] mx-auto">
          <div className="mb-20 space-y-6">
            <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-tight leading-tight">
              Fitur Cerdas untuk <br />
              <span className="text-primary">Eksplorasi Tanpa Batas</span>
            </h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Admin Feature - Large Card */}
            <div className="md:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-12 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="space-y-8 relative z-10">
                <div className="w-16 h-16 bg-[#0d631b] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#0d631b]/20">
                  <span className="material-symbols-outlined text-3xl">manage_accounts</span>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold mb-4 text-slate-900">Pusat Kendali Admin</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                    Kelola data siswa dan guru secara masif via import Excel (TS-02) serta publikasikan berita resmi (TS-07) untuk seluruh ekosistem sekolah.
                  </p>
                </div>
              </div>
              <div className="mt-12 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-100 group-hover:scale-[1.02] transition-transform duration-700">
                 <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgcXebnUiKrSDAX74Wgni6PaB7upimL7DeRZ-b795xy15azdKuOfqlgpYiLnomnGwCeW3NYWwojSuHU_0T4IUzgS5rdxozbP45K29v1mkOaz4yT5qXEaCui-RxbLxU0oTnftrXHTmaJE9PpJ4KizxQ_xJHVnc844TQ_mWfvIsUQnweJ1x7acsLAoFKWw-Hd7q5CrkMCh9-KsFs6m1wgQOupYB0tBQGvTpIGeO2-YRwmpQFHrkF5NufxcBe6zyj5DirR2Q-AeopOKA" alt="Admin Control" fill className="object-cover" />
              </div>
            </div>

            {/* Teacher Feature - Vertical Card */}
            <div className="md:col-span-4 bg-primary text-white rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl shadow-primary/20 relative overflow-hidden">
               <div className="space-y-8">
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">analytics</span>
                 </div>
                 <h3 className="text-3xl font-extrabold">Evaluasi & Verifikasi</h3>
                 <p className="text-primary-foreground text-lg leading-relaxed">
                   Verifikasi pendaftaran secara instan (TS-13) dan berikan input nilai akademik (TS-16) sebagai rekognisi prestasi siswa.
                 </p>
               </div>
               <div className="mt-auto pt-10 border-t border-white/10">
                 <span className="text-5xl font-black italic">+92%</span>
                 <p className="text-xs uppercase tracking-[0.2em] font-bold mt-2 opacity-80">Efisiensi Verifikasi</p>
               </div>
            </div>

            {/* Student Features - Small Square Cards */}
            <div className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">explore</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Eksplorasi Lomba</h3>
              <p className="text-slate-500 leading-relaxed">Cari dan temukan kompetisi impian (TS-21) dengan filter kategori yang akurat.</p>
            </div>

            <div className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">forum</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Notifikasi Real-time</h3>
              <p className="text-slate-500 leading-relaxed">Dapatkan pembaruan status pendaftaran dan pengumuman terbaru secara instan (TS-29).</p>
            </div>

            <div className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">insights</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Portofolio Digital</h3>
              <p className="text-slate-500 leading-relaxed">Arsipkan seluruh bukti prestasi dan pantau riwayat pengajuan Anda dalam satu profil (TS-25).</p>
            </div>
          </div>
        </section>

        {/* ─── NEWS SECTION ─── */}
        <section id="news" className="py-32 px-8 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(13,99,27,0.05),transparent_50%)]"></div>
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="text-center mb-20 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Update & Informasi</span>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-tight text-slate-900 leading-tight">Warta & <span className="text-primary italic">Pembaruan</span></h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
            </div>

            {newsItems.length === 0 ? (
              <div className="text-center text-slate-500 p-24 border border-dashed border-slate-800 rounded-[3rem]">
                <span className="material-symbols-outlined text-[48px] block mb-4 text-slate-700">newspaper</span>
                <p className="text-lg">Belum ada berita yang dipublikasikan saat ini.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Main News */}
                {mainNews && (
                  <div className="lg:col-span-7 group">
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                      {mainNews.thumbnail && (
                        <Image alt={mainNews.title} src={mainNews.thumbnail} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-10 text-slate-900 space-y-4">
                        <span className="px-4 py-1.5 bg-[#0d631b] text-white rounded-full text-[10px] font-black uppercase tracking-widest">Utama</span>
                        <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">{mainNews.title}</h3>
                        <p className="text-slate-600 max-w-lg line-clamp-2 text-sm leading-relaxed">
                          {mainNews.content.replace(/<[^>]+>/g, '')}
                        </p>
                        <Link href={`/page/news?id=${mainNews.id}`} className="inline-flex items-center gap-2 font-bold text-[#0d631b] hover:gap-4 transition-all group/link">
                          Baca Selengkapnya
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Side News */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {listNews.map((item: any) => (
                    <div key={item.id} className="flex gap-6 items-center bg-white p-6 rounded-[2rem] hover:shadow-xl transition-all border border-slate-100 group">
                      <div className="w-28 h-28 flex-shrink-0 rounded-2xl overflow-hidden relative shadow-lg">
                        {item.thumbnail ? (
                          <Image alt={item.title} src={item.thumbnail} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-slate-600">image</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase text-primary tracking-widest">
                          {new Date(item.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' })}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">{item.title}</h4>
                        <Link href={`/page/news?id=${item.id}`} className="inline-flex items-center gap-1 text-primary text-xs font-bold hover:gap-2 transition-all">
                          Baca <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        {/* ─── DOWNLOAD APP SECTION ─── */}
        <section className="py-24 px-8 bg-slate-50">
          <div className="max-w-[1280px] mx-auto bg-white/60 backdrop-blur-md border border-white rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            <div className="flex-1 space-y-10 relative z-10">
              <div className="space-y-6">
                <h2 className="text-[clamp(32px,5vw,56px)] font-black tracking-tighter leading-[0.9] text-slate-900">
                  Pantau Prestasi <br />
                  <span className="text-primary italic">Dalam Genggaman.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Akses pendaftaran lomba, terima notifikasi real-time, dan lihat bukti prestasi Anda kapan saja melalui aplikasi mobile Raih Prestasi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-slate-900/20" href="#">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">apple</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/50 leading-none mb-1">Download on the</p>
                    <p className="text-xl font-bold leading-none">App Store</p>
                  </div>
                </a>
                <a className="group flex items-center gap-4 bg-white text-slate-900 border-2 border-slate-900 px-8 py-5 rounded-3xl hover:scale-105 active:scale-95 transition-all" href="#">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-900">play_store</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Get it on</p>
                    <p className="text-xl font-bold leading-none">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex-1 relative z-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-colors"></div>
                <div className="relative z-10 w-full max-w-[380px] mx-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-transform duration-700 rounded-[3rem] overflow-hidden border-[8px] border-white bg-white">
                   <Image 
                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRobZIxNwb5kZaQyoo0Y0Dd2av8BO5XFG48i2CZpL99uqbz-pV18nYjMq0Eeu9JdF6nQ3uuzAE996SlBwStU3qyNbo6Q-ld3Qv1mbTUOQfGYxeV22vFSF3mYSyBWG1QIg7oNQTvi3J40840Q1S7g12q_A7oa__qNOx2-dJc7ouHHg1Qji_Tw2J8TtrJwkuoZv0MHYa4UAxjLxRXWGWXW751tbezeqoXF6H4y2zgXWM9anOXhD8ZUkMGUkID2V5G8NxrbuStVOBom0" 
                     alt="Mobile App Preview" 
                     width={380} 
                     height={760} 
                     className="w-full h-auto object-cover" 
                   />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#ebefe5] text-slate-900 pt-24 pb-12 px-8 overflow-hidden rounded-t-[4rem] border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                </div>
                <span className="text-xl font-black uppercase tracking-wider">Raih Prestasi</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                Ekosistem integrasi prestasi siswa terbaik di SMKN 1 Boyolangu. Mengelola, memverifikasi, dan merayakan pencapaian setiap individu.
              </p>
              <div className="flex gap-4">
                {['public', 'smart_display', 'chat'].map((icon) => (
                  <div key={icon} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:text-white">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-xs font-black uppercase tracking-widest text-primary">Navigasi</h5>
              <div className="flex flex-col gap-4">
                 {['Alur', 'Fitur', 'Berita'].map(item => (
                   <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-600 hover:text-primary transition-colors">{item}</a>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-xs font-black uppercase tracking-widest text-primary">Tautan Penting</h5>
              <div className="flex flex-col gap-4">
                 {['Dokumentasi', 'Kebijakan Privasi', 'Pusat Bantuan'].map(item => (
                   <a key={item} href="#" className="text-sm text-slate-600 hover:text-primary transition-colors">{item}</a>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <h5 className="text-xs font-black uppercase tracking-widest text-primary">Kontak Kami</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-600">
                   <span className="material-symbols-outlined text-sm">mail</span>
                   <span className="text-sm">support@raihprestasi.id</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                   <span className="material-symbols-outlined text-sm">schedule</span>
                   <span className="text-sm">Senin - Jumat | 08:00 - 16:00</span>
                </div>
                <div className="pt-4">
                   <p className="text-[10px] uppercase font-bold tracking-tighter text-secondary-container bg-primary px-3 py-1 rounded inline-block">SMKN 1 BOYOLANGU</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400">© 2024 Raih Prestasi. Built with precision for excellence.</p>
            <div className="flex gap-8">
               <span className="text-xs text-slate-400">Terms of Service</span>
               <span className="text-xs text-slate-400">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
