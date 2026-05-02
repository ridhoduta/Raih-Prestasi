import Link from "next/link";
import Image from "next/image";

export default function Berita({ newsItems }: { newsItems: any[] }) {
  return (
    <section className="py-section-padding bg-surface" id="news">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-background">Berita &amp; Artikel Terbaru</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              Informasi terkini seputar beasiswa, kompetisi, dan tips sukses akademik dari para ahli.
            </p>
          </div>
          <button className="text-primary-container font-label-bold flex items-center gap-2 hover:underline">
            Lihat Semua Berita <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems && newsItems.length > 0 ? newsItems.slice(0, 3).map((item: any) => (
            <Link key={item.id} href={`/page/news?id=${item.id}`} className="bg-white rounded-2xl overflow-hidden border border-slate-100 group cursor-pointer block hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                {item.thumbnail ? (
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-600">image</span>
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4">
                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-label-sm font-label-bold">Berita</span>
                <h4 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary-container transition-colors line-clamp-2">{item.title}</h4>
                <p className="text-body-md text-on-surface-variant line-clamp-2" dangerouslySetInnerHTML={{__html: item.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...'}}></p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-label-sm text-on-surface-variant">
                    {new Date(item.createdAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="material-symbols-outlined text-primary-container">arrow_forward</span>
                </div>
              </div>
            </Link>
          )) : (
            <div className="col-span-3 text-center text-slate-500 py-12">Belum ada berita.</div>
          )}
        </div>
      </div>
    </section>
  );
}
