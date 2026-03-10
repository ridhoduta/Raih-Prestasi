import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Optional: fetch news detail specifically based on the `id` from URL Parameters.
async function getNewsDetail(id?: string) {
    const baseURLVercel = "https://raih-prestasi.vercel.app/api/admin/news";
    const baseURL = "http://localhost:3000/api/admin/news";
    try {
        const url = id
            ? `${baseURLVercel}/${id}` // Attempt fetch by specific ID
            : `${baseURLVercel}?limit=1`; // Fallback to latest news

        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) return null;
        const json = await res.json();

        if (id) {
            return json.success ? json.data : null;
        } else {
            return json.success && json.data.length > 0 ? json.data[0] : null;
        }
    } catch {
        return null;
    }
}

export default async function NewsDetail({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
    const params = await searchParams;
    const news = await getNewsDetail(params.id);

    const warna = "#7db03d";
    const textWarnaPrimary = "text-[#7db03d]";
    const textWarnaWhite = "text-[#fff]";

    return (
        <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
            {/* ─── HEADER ─── */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 no-underline">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: warna }}>
                            <span className="material-symbols-outlined text-white text-[18px]">emoji_events</span>
                        </div>
                        <span className={`text-[15px] font-black uppercase tracking-tight ${textWarnaPrimary}`}>Raih Prestasi</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/#about" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Tentang</Link>
                        <Link href="/#how-to" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Alur</Link>
                        <Link href="/#features" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Fitur</Link>
                        <Link href="/#news" className="text-[11px] font-bold uppercase tracking-widest text-slate-600 no-underline hover:text-slate-900 transition-colors">Berita</Link>
                    </nav>

                    <Link href="/page/login" className={`text-[13px] font-bold uppercase tracking-wider py-2.5 px-6 rounded-lg no-underline hover:opacity-90 transition-opacity shadow-sm ${textWarnaWhite}`} style={{ backgroundColor: warna }}>
                        Login
                    </Link>
                </div>
            </header>

            {/* ─── MAIN ARTICLE SECTION ─── */}
            <main className="flex-1 pb-24">
                {news ? (
                    <article className="max-w-[800px] mx-auto px-6 pt-12">
                        <Link href="/#news" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest mb-8 hover:opacity-75 transition-opacity" style={{ color: warna }}>
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            Kembali ke Berita
                        </Link>

                        <header className="mb-10 text-center">
                            <span className="inline-block py-1 px-3 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 bg-emerald-500/10" style={{ color: warna }}>
                                {new Date(news.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                            <h1 className="text-[clamp(32px,5vw,56px)] font-black text-slate-900 tracking-tight leading-tight mb-6">
                                {news.title}
                            </h1>
                        </header>

                        {news.thumbnail && (
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-200/60 bg-slate-100">
                                <Image
                                    alt={news.title}
                                    src={news.thumbnail}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <div
                            className="mt-8 text-slate-700 leading-relaxed text-[17px] 
                [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-slate-900 [&>h2]:mb-4 [&>h2]:mt-10
                [&>h3]:text-xl [&>h3]:font-black [&>h3]:text-slate-900 [&>h3]:mb-3 [&>h3]:mt-8
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                [&>li]:mb-2
                [&>blockquote]:border-l-4 [&>blockquote]:border-emerald-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:bg-white [&>blockquote]:py-3 [&>blockquote]:pr-4 [&>blockquote]:rounded-r-xl [&>blockquote]:shadow-sm
                [&>img]:rounded-2xl [&>img]:shadow-md [&>img]:my-10 [&>img]:mx-auto
                [&>a]:text-emerald-600 [&>a]:font-bold [&>a]:underline hover:[&>a]:text-emerald-700"
                            dangerouslySetInnerHTML={{ __html: news.content }}
                        />
                    </article>
                ) : (
                    <div className="max-w-[800px] mx-auto px-6 pt-32 text-center pb-32">
                        <span className="material-symbols-outlined text-[64px] text-slate-300 mb-6 block">info</span>
                        <h2 className="text-[32px] font-black text-slate-900 mb-4 tracking-tight">Berita tidak ditemukan</h2>
                        <p className="text-[16px] text-slate-500 mb-10 max-w-[400px] mx-auto">Maaf, berita yang Anda cari mungkin telah ditarik atau URL tidak valid.</p>
                        <Link href="/#news" className={`inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider py-3.5 px-8 rounded-xl no-underline hover:opacity-90 transition-all shadow-md ${textWarnaWhite}`} style={{ backgroundColor: warna }}>
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Kembali
                        </Link>
                    </div>
                )}
            </main>

            {/* ─── FOOTER ─── */}
            <footer className="bg-slate-950 pt-16 px-6 pb-8 border-t border-white/10 mt-auto">
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
                                <Link href="/#about" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Visi &amp; Misi</Link>
                                <Link href="/#how-to" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Panduan</Link>
                                <Link href="/#features" className="text-[12px] text-slate-400 no-underline hover:text-white transition-colors">Fitur</Link>
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