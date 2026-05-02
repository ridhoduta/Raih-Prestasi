export default function Alur() {
  return (
    <section className="py-section-padding bg-surface-container-low" id="alur">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Alur Utama</h2>
          <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tiga langkah sederhana untuk memulai perjalanan prestasi Anda bersama kami.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="space-y-6">
            <div className="aspect-video bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow">
              <img className="w-full h-full object-cover" data-alt="Illustration of account registration process" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxvqJekXvvi-0xdtYdFhc0NU_P9Q9P88WLPI5GWF99p22auogSY3vLAevStlvejg7GLALifVPfVsTh6mDfy_OtBpaSRuZRKd8DdfrbrfZh767fEbsq9l7If72_beG7e2piojePhuIsEFbY_cdcwNy8S69px38zDUncaE0DEIfGOF4er7XXpLLv5W1hFOLPJBfNY00WeqNdE7wzsBHmgCBzFv7wlNmlcIK3L5ZVK3EdsXMohLm50mt04uBBF8lK9UY9tvXnInumpaY"/>
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg shadow-emerald-200">1</div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4">Registrasi Akun</h3>
              <p className="text-body-md text-on-surface-variant mt-2">Lengkapi profil Anda dan verifikasi identitas untuk mulai mengejar peluang prestasi terbaik.</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="space-y-6">
            <div className="aspect-video bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow">
              <img className="w-full h-full object-cover" data-alt="Illustration of searching for opportunities" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgh_dhrVFnhcrt4Y_om5FvVlocscyqLt7D5xXhV2X3z6SER6w5JY89CA6br7KoEVRhZhG73M9kdVDYdBUsJVfgkiaXBXAzHOO-1Et1XSW8N1-Y-QbNISWUQj5EoRe6ziy9r22V9r4SkFBh5paMlCQGuHVxl8z808mtE3JxZ7W_g7vl_4h1Rs8SKjItuH8RfNtkVs4VWl6u4uWJQFWX5Ryj_Fk6_WyvkbTjIxxJN7smXwsB4M3fj7hnFmbnqiQxCP6BMaorIo9BQY"/>
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg shadow-emerald-200">2</div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4">Cari Peluang</h3>
              <p className="text-body-md text-on-surface-variant mt-2">Telusuri ribuan beasiswa, kompetisi, dan program pelatihan yang sesuai dengan minat dan bakat Anda.</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="space-y-6">
            <div className="aspect-video bg-white rounded-2xl overflow-hidden border border-slate-100 ambient-shadow">
              <img className="w-full h-full object-cover" data-alt="Illustration of winning achievements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7K9yZx78kOh0AYqg-RwByairRSM_5_wgAz3nyKonzkJZXR-A_Ef5vkYfuErIrN1fPrbehNaYhd0BLt1EY6fgAutNAk6_VriLwNphM4W5d6DN20BxAxfIXYc0XC7it0s8lUw-M_MqbSyRRpP-W9nRMi05KjYvXVQ4yCPBRJj8eU7BZb91w7nlWQHvC8MY21My6L_96hPtmAD246NDhaBYe7PkjEVSfUnPglPHxe1aGME9B-QWUDOyZayK_a0XncGBF4ibQLo_FEIg"/>
            </div>
            <div className="relative p-6 bg-white rounded-2xl border border-slate-100">
              <div className="absolute -top-6 left-6 w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center font-headline-md shadow-lg shadow-emerald-200">3</div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-4">Raih Prestasi</h3>
              <p className="text-body-md text-on-surface-variant mt-2">Daftar langsung melalui platform dan pantau progress aplikasi Anda hingga berhasil meraih target.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
