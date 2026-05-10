import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/landingPage/navbar";
import Footer from "@/app/components/landingPage/footer";

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
            <Navbar />

            {/* ─── MAIN ARTICLE SECTION ─── */}
            <main className="flex-1 pb-24 pt-24">
                {news ? (
                    <article className="max-w-[800px] mx-auto px-6 pt-12">
                        <Link href="/#news" className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest mb-8 hover:opacity-75 transition-opacity" style={{ color: warna }}>
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                            Kembali ke Berita
                        </Link>

                        <header className="mb-10 text-center">
                            <span className="inline-block py-1 px-3 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 bg-[#224F1F]/10" style={{ color: warna }}>
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

            <Footer />
        </div>
    );
}