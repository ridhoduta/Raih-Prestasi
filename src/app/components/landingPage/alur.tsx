export default function Alur() {
  return (
    <section className="py-section-padding bg-surface-container-low" id="alur">
      <div className="max-w-[1280px] mx-auto px-8">
        
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-background">
            Alur Pendaftaran Kompetisi
          </h2>
          <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Proses sederhana untuk mengikuti kompetisi dan memantau status pendaftaran Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Step 1 */}
          <div className="space-y-6 group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow group-hover:shadow-lg transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Cari kompetisi"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              />
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100 group-hover:border-primary-container/30 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 flex-1">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg group-hover:scale-110 group-hover:bg-[#1a3d17] transition-all duration-300">
                1
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 group-hover:text-primary-container transition-colors duration-300">
                Cari Kompetisi
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                Temukan berbagai kompetisi yang tersedia sesuai minat dan bidang Anda.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow group-hover:shadow-lg transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Isi formulir"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              />
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100 group-hover:border-primary-container/30 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 flex-1">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg group-hover:scale-110 group-hover:bg-[#1a3d17] transition-all duration-300">
                2
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 group-hover:text-primary-container transition-colors duration-300">
                Isi Formulir
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                Lengkapi formulir pendaftaran sesuai data yang diminta oleh penyelenggara.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow group-hover:shadow-lg transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Verifikasi guru"
                src="https://images.unsplash.com/photo-1584697964403-0c0b1eecdb1f"
              />
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100 group-hover:border-primary-container/30 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 flex-1">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg group-hover:scale-110 group-hover:bg-[#1a3d17] transition-all duration-300">
                3
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 group-hover:text-primary-container transition-colors duration-300">
                Verifikasi Guru/Admin
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                Pendaftaran akan ditinjau dan diverifikasi oleh guru atau admin sekolah.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-6 group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow group-hover:shadow-lg transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Cek status"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              />
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100 group-hover:border-primary-container/30 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 flex-1">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg group-hover:scale-110 group-hover:bg-[#1a3d17] transition-all duration-300">
                4
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4 group-hover:text-primary-container transition-colors duration-300">
                Lihat Status
              </h3>
              <p className="text-body-md text-on-surface-variant mt-2">
                Pantau status pendaftaran Anda secara real-time hingga dinyatakan diterima atau ditolak.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}