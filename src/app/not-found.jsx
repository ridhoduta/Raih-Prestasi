import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  const warnaPrimary = "#7db03d";
  const textWarnaPrimary = "text-[#7db03d]";
  const textWarnaWhite = "text-[#fff]";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 font-sans" style={{ background: "linear-gradient(135deg, #0f172a 0%, #437504ff 100%)" }}>
      <div className="max-w-[500px] w-full text-center">
        {/* Decorative Element */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 shadow-2xl rotate-12 transition-transform hover:rotate-0 duration-500 bg-white/10 backdrop-blur-xl border border-white/20">
          <span className="material-symbols-outlined text-[48px] text-white" style={{ color: warnaPrimary }}>
            error
          </span>
        </div>

        {/* 404 Text */}
        <h1 className="text-[120px] font-black leading-none tracking-tighter m-0 mb-4 text-white/10 select-none">
          404
        </h1>

        <div className="-mt-16 relative z-10">
          <h2 className={`text-[32px] md:text-[40px] font-black uppercase tracking-tight m-0 mb-4 ${textWarnaWhite}`}>
            Halaman <span className={`${textWarnaPrimary}`}>Hilang</span>
          </h2>
          
          <p className="text-[16px] text-slate-300 leading-relaxed mb-10 max-w-[400px] mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan ke dimensi lain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className={`inline-flex items-center justify-center gap-2 font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl no-underline hover:opacity-90 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 ${textWarnaWhite}`} 
              style={{ backgroundColor: warnaPrimary }}
            >
              <span className="material-symbols-outlined text-[20px]">home</span>
              Kembali ke Beranda
            </Link>
            
            <Link 
              href="/page/login" 
              className="inline-flex items-center justify-center gap-2 border border-white/20 font-bold text-[13px] uppercase tracking-wider py-4 px-8 rounded-xl no-underline hover:bg-white/10 transition-colors text-white active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">login</span>
              Login Area
            </Link>
          </div>
        </div>

        {/* Footer info consistent with project */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-bold">
            Raih Prestasi — SMKN 1 Boyolangu
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;