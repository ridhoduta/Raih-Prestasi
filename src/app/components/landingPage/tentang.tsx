export default function Tentang() {
  return (
    <section className="py-section-padding bg-surface-container-low" id="about">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-on-background">Tentang Kami</h2>
          <div className="w-20 h-1.5 bg-primary-container mx-auto rounded-full"></div>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tim di balik Raih Prestasi berkomitmen untuk mendemokratisasi akses pendidikan berkualitas bagi seluruh siswa Indonesia.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-4 ambient-shadow">
            <div className="w-24 h-24 bg-secondary-container rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-primary text-3xl font-bold">BP</div>
            </div>
            <div>
              <h4 className="font-headline-md text-on-surface">Budi Pratama</h4>
              <p className="text-label-sm text-primary-container font-label-bold uppercase">CEO &amp; Founder</p>
            </div>
            <p className="text-body-md text-on-surface-variant italic">"Visi kami adalah menciptakan generasi emas yang kompetitif."</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-4 ambient-shadow">
            <div className="w-24 h-24 bg-tertiary-fixed rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-tertiary text-3xl font-bold">AS</div>
            </div>
            <div>
              <h4 className="font-headline-md text-on-surface">Anisa Sitorus</h4>
              <p className="text-label-sm text-primary-container font-label-bold uppercase">Head of Education</p>
            </div>
            <p className="text-body-md text-on-surface-variant italic">"Pendidikan adalah kunci pembuka pintu masa depan."</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-4 ambient-shadow">
            <div className="w-24 h-24 bg-secondary-fixed rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-secondary text-3xl font-bold">RM</div>
            </div>
            <div>
              <h4 className="font-headline-md text-on-surface">Rian Mahendra</h4>
              <p className="text-label-sm text-primary-container font-label-bold uppercase">CTO</p>
            </div>
            <p className="text-body-md text-on-surface-variant italic">"Teknologi harus memudahkan akses ke prestasi."</p>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-4 ambient-shadow">
            <div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant text-3xl font-bold">DK</div>
            </div>
            <div>
              <h4 className="font-headline-md text-on-surface">Dewi Kusuma</h4>
              <p className="text-label-sm text-primary-container font-label-bold uppercase">Partnership Lead</p>
            </div>
            <p className="text-body-md text-on-surface-variant italic">"Kolaborasi adalah kunci kesuksesan bersama."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
