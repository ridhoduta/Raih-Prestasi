import Image from "next/image";
import Link from "next/link";

async function getNews() {
  try {
    const res = await fetch("https://raih-prestasi-web.vercel.app/api/admin/news?limit=4", {
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
  const warna = "#7db03d";
  const textWarnaPrimary = "text-[#7db03d]";
  const textWarnaWhite = "text-[#fff]";

  return (
    <div className="font-sans">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: warna }}>
              <span className="material-symbols-outlined text-white text-[18px]">emoji_events</span>
            </div>
            <span className={`text-[15px] font-black uppercase tracking-tight ${textWarnaPrimary}`}>Raih Prestasi</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Tentang</a>
            <a href="#how-to" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Alur</a>
            <a href="#features" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Fitur</a>
            <a href="#news" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Berita</a>
          </nav>

          <Link href="/page/login" className={`text-[13px] font-bold uppercase tracking-wider py-2.5 px-6 rounded-lg no-underline hover:opacity-90 transition-opacity shadow-sm ${textWarnaWhite}`} style={{ backgroundColor: warna }}>
            Login
          </Link>
        </div>
      </header>

      <main>
        {/* ─── HERO SECTION ─── */}
        <section id="about" className="text-center pt-[100px] px-6 pb-[80px]" style={{ background: "linear-gradient(135deg, #0f172a 0%, #437504ff 100%)" }}>
          <div className="max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 border border-emerald-500/30 rounded-full py-1.5 px-4 mb-8 bg-emerald-500/10">
              <span className="w-2 h-2 rounded-full inline-block shadow-sm" style={{ backgroundColor: warna }}></span>
              <span className="text-[11px] font-bold uppercase tracking-widest drop-shadow-sm" style={{ color: warna }}>Sistem Informasi </span>
            </div>

            <h1 className={`text-[clamp(40px,8vw,80px)] font-black leading-[0.9] tracking-tight m-0 mb-6 uppercase ${textWarnaWhite}`}>
              Raih<br />
              <span className={`${textWarnaPrimary} drop-shadow-sm`}>Prestasi</span>
            </h1>

            <p className={`text-[18px] max-w-[600px] mx-auto mb-10 leading-relaxed ${textWarnaWhite}`}>
              Platform manajemen terpusat untuk memfasilitasi pendataan, verifikasi, dan publikasi prestasi siswa secara transparan antara Admin, Guru, dan Siswa.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/page/login" className={`inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider py-3.5 px-8 rounded-xl no-underline hover:opacity-90 transition-all shadow-md hover:shadow-lg ${textWarnaWhite}`} style={{ backgroundColor: warna }}>
                Masuk Sekarang
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a href="#how-to" className={`inline-flex items-center gap-2 border border-white/20 font-bold text-[13px] uppercase tracking-wider py-3.5 px-8 rounded-xl no-underline hover:bg-white/10 transition-colors ${textWarnaWhite}`}>
                Pelajari Sistem
              </a>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section id="how-to" className="bg-slate-50 py-[96px] px-6 border-y border-slate-100">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: warna }}>Alur Sistem</span>
              <h2 className={`text-[clamp(28px,4vw,44px)] font-black uppercase tracking-tight mt-2 ${textWarnaPrimary}`}>Bagaimana Sistem Bekerja</h2>
              <p className="text-slate-500 mt-3 max-w-[500px] mx-auto">Tiga peran utama yang saling terhubung dalam satu ekosistem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "Step 1", icon: "admin_panel_settings", title: "Inisiasi & Tata Kelola", role: "Admin", desc: "Konfigurasi identitas pengguna, kategori kompetisi, dan standarisasi tingkat lomba." },
                { step: "Step 2", icon: "school", title: "Manajemen & Fasilitasi", role: "Guru", desc: "Publikasi program lomba, verifikasi pendaftaran, serta penerbitan rekomendasi resmi." },
                { step: "Step 3", icon: "person", title: "Partisipasi & Pelaporan", role: "Siswa", desc: "Akses pendaftaran mandiri, monitoring status verifikasi, dan pengarsipan portofolio prestasi." },
              ].map((card) => (
                <div key={card.step} className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`absolute -top-3.5 left-6 ${textWarnaWhite} text-[10px] font-black uppercase tracking-widest py-1 px-3.5 rounded-full shadow-sm`} style={{ backgroundColor: warna }}>
                    {card.step}
                  </div>
                  <div className="w-[52px] h-[52px] rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-[28px]" style={{ color: warna }}>{card.icon}</span>
                  </div>
                  <h3 className="text-[18px] font-black text-slate-900 uppercase tracking-tight mb-1">{card.title}</h3>
                  <p className={`text-[13px] font-bold uppercase tracking-widest mb-2.5 ${textWarnaPrimary}`}>{card.role}</p>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section id="features" className="py-[96px] px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: warna }}>Fitur Unggulan</span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-black drop-shadow-sm text-white uppercase tracking-tight mt-2">Kapabilitas Tiap Peran</h2>
              <p className="text-white mt-3 max-w-[500px] mx-auto">Setiap pengguna memiliki fitur khusus sesuai kebutuhannya.</p>
            </div>

            {[
              {
                role: "Admin", icon: "shield_person", features: [
                  { icon: "manage_accounts", title: "Manajemen Identitas", desc: "Kelola data guru dan siswa dalam satu tempat." },
                  { icon: "rule", title: "Standarisasi Kompetisi", desc: "Kategori dan tingkatan lomba yang seragam." },
                  { icon: "edit_document", title: "Redaksi Informasi", desc: "Publikasi berita dan pengumuman resmi." },
                ]
              },
              {
                role: "Guru", icon: "school", features: [
                  { icon: "inventory", title: "Kurasi Lomba", desc: "Kelola dan publikasikan informasi kompetisi." },
                  { icon: "verified", title: "Verifikasi & Validasi", desc: "Periksa dan setujui pendaftaran siswa." },
                  { icon: "support_agent", title: "Pusat Pengumuman", desc: "Sampaikan informasi penting ke siswa." },
                ]
              },
              {
                role: "Siswa", icon: "person", features: [
                  { icon: "explore", title: "Eksplorasi Peluang", desc: "Temukan dan daftar kompetisi yang tersedia." },
                  { icon: "visibility", title: "Pengajuan Transparan", desc: "Pantau status verifikasi secara real-time." },
                  { icon: "account_box", title: "Portofolio Digital", desc: "Arsipkan seluruh prestasi dalam satu profil." },
                ]
              },
            ].map((group) => (
              <div key={group.role} className="mb-12">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: warna }}>
                    <span className={`material-symbols-outlined text-[16px] ${textWarnaWhite}`}>{group.icon}</span>
                  </div>
                  <span className={`text-[13px] ${textWarnaPrimary} font-black uppercase tracking-widest`}>{group.role}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {group.features.map((f) => (
                    <div key={f.title} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <span className="material-symbols-outlined text-[24px] mb-2.5 block" style={{ color: warna }}>{f.icon}</span>
                      <h4 className="text-[15px] text-slate-900 font-bold mb-1">{f.title}</h4>
                      <p className="text-[13px] text-slate-500">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── NEWS ─── */}
        <section id="news" className="py-[96px] px-6" style={{ background: "linear-gradient(180deg, #0A0A0A 20%, #437504ff 120%)" }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: warna }}>Berita Terbaru</span>
              <h2 className={`text-[clamp(28px,4vw,44px)] font-black uppercase tracking-tight mt-2 ${textWarnaWhite}`}>Warta &amp; Pembaruan</h2>
            </div>

            {newsItems.length === 0 ? (
              <div className="text-center text-slate-500 p-12 border border-dashed border-slate-800 rounded-2xl">
                <span className="material-symbols-outlined text-[36px] block mb-2 text-slate-600">newspaper</span>
                Belum ada berita saat ini.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Main News */}
                  {mainNews && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex-1 lg:basis-[60%] flex flex-col gap-5">
                      {mainNews.thumbnail && (
                        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                          <Image alt={mainNews.title} src={mainNews.thumbnail} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute top-4 left-4">
                            <span className={`py-1 px-3 text-[10px] font-black text-slate-900 uppercase tracking-widest rounded-md shadow-sm`} style={{ backgroundColor: warna }}>Terbaru</span>
                          </div>
                        </div>
                      )}
                      <div>
                        <span className="font-mono text-[12px] uppercase mb-2 block" style={{ color: warna }}>
                          {new Date(mainNews.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <h3 className={`text-[24px] font-black uppercase tracking-tight leading-tight mb-3 transition-colors cursor-pointer hover:opacity-80 ${textWarnaWhite}`}>{mainNews.title}</h3>
                        <p className="text-[14px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                          {mainNews.content.replace(/<[^>]+>/g, '')}
                        </p>
                        <Link href={`/page/news?id=${mainNews.id}`} className="inline-flex items-center gap-1.5 font-bold text-[12px] uppercase tracking-widest no-underline hover:opacity-80 transition-opacity" style={{ color: warna }}>
                          Baca Selengkapnya
                          <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Side News */}
                  {listNews.length > 0 && (
                    <div className="flex-1 lg:basis-[40%] flex flex-col gap-3">
                      {listNews.map((item: any) => (
                        <div key={item.id} className="bg-white/5 border border-white/10 rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-colors">
                          {/* buatkan thumbnail */}
                          {item.thumbnail && (
                            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                              <Image alt={item.title} src={item.thumbnail} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                          )}

                          <span className="font-mono text-[10px] uppercase block mb-1.5" style={{ color: warna }}>
                            {new Date(item.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </span>
                          <h4 className={`text-[15px] font-bold leading-snug group-hover:opacity-80 transition-opacity ${textWarnaWhite}`}>{item.title}</h4>
                          <p className="text-[12px] text-slate-400 leading-relaxed mb-4 line-clamp-2">
                            {item.content.replace(/<[^>]+>/g, '')}
                          </p>
                          <Link href={`/page/news?id=${item.id}`} className="inline-flex items-center gap-1.5 font-bold text-[12px] uppercase tracking-widest no-underline hover:opacity-80 transition-opacity" style={{ color: warna }}>
                            Baca Selengkapnya
                            <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="pt-16 px-6 pb-8 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: warna }}>
                  <span className={`material-symbols-outlined text-[14px] ${textWarnaWhite}`}>emoji_events</span>
                </div>
                <span className={`text-[13px] font-black uppercase tracking-wider ${textWarnaWhite}`}>Raih Prestasi</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-relaxed">
                Ekosistem Prestasi &amp; Manajemen Kompetisi Terintegrasi untuk SMKN 1 Boyolangu.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: warna }}>Tentang</h5>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Visi &amp; Misi</a>
                <a href="#how-to" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Panduan</a>
                <a href="#features" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Fitur</a>
              </div>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: warna }}>Sumber Daya</h5>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Dokumentasi</a>
                <a href="#" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Integrasi API</a>
                <a href="#" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Standardisasi</a>
              </div>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: warna }}>Bantuan</h5>
              <p className="text-[12px] text-slate-400">Email: support@prestasi-hub.id</p>
              <p className="text-[12px] text-slate-400 mt-1">Senin - Jumat: 08.00 - 17.00 WIB</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-2">
            <p className="text-[11px] text-slate-500">© 2024 Raih Prestasi — All rights reserved.</p>
            <p className="text-[11px] text-slate-500">SMKN 1 Boyolangu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
