export default function Footer() {
  return (
    <footer className="w-full block bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto py-16 px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4 max-w-sm">
          <div className="text-lg font-bold text-slate-900 dark:text-white">Raih Prestasi</div>
          <p className="font-['Inter'] text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            © 2024 Raih Prestasi. Memberdayakan Ambisi, Meraih Prestasi.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-emerald-600 transition-colors" data-icon="public">public</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-emerald-600 transition-colors" data-icon="mail">mail</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-emerald-600 transition-colors" data-icon="share">share</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <span className="font-label-bold text-slate-900 dark:text-white">Navigasi</span>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#">Beranda</a>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#features">Fitur</a>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#news">Berita</a>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#about">Tentang</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-bold text-slate-900 dark:text-white">Legal</span>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#">Kebijakan Privasi</a>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#">Syarat Layanan</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-bold text-slate-900 dark:text-white">Support</span>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#">Bantuan</a>
            <a className="font-['Inter'] text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 underline-offset-4 hover:underline transition-all opacity-80 hover:opacity-100" href="#">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
