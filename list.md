| ID Case | Role   | Modul/Halaman  | Skenario Pengujian       | Langkah Pengujian              | Hasil yang Diharapkan             |
| ------- | ------ | -------------- | ------------------------ | ------------------------------ | --------------------------------- |
| TS-01   | Admin  | Login          | Login dengan data valid  | Input email & password → login | Berhasil masuk ke dashboard admin |
| TS-02   | Admin  | Data Siswa     | Import data siswa        | Upload file CSV/Excel          | Data siswa berhasil tersimpan     |
| TS-03   | Admin  | Data Siswa     | Tambah siswa manual      | Isi form → simpan              | Data siswa tersimpan              |
| TS-04   | Admin  | Data Guru      | Tambah akun guru         | Isi data → simpan              | Akun guru berhasil dibuat         |
| TS-05   | Admin  | Kategori       | Tambah kategori          | Input nama kategori            | Data kategori tersimpan           |
| TS-06   | Admin  | Tingkat        | Tambah tingkat           | Input tingkat kompetisi        | Data tingkat tersimpan            |
| TS-07   | Admin  | Berita         | Tambah berita            | Isi judul & konten → publish   | Berita tampil di sistem           |
| TS-08   | Admin  | Pengumuman     | Buat pengumuman          | Input data → publish           | Pengumuman tampil ke siswa        |
| TS-09   | Admin  | Security       | Akses tanpa login        | Akses URL admin tanpa login    | Sistem redirect ke login          |
| TS-10   | Guru   | Login          | Login guru               | Input email & password         | Masuk ke dashboard guru           |
| TS-11   | Guru   | Kompetisi      | Tambah kompetisi         | Isi data → simpan              | Kompetisi tersimpan               |
| TS-12   | Guru   | Kompetisi      | Tambah form dinamis      | Tambah field wajib             | Field muncul di form siswa        |
| TS-13   | Guru   | Pendaftaran    | Verifikasi pendaftaran   | Klik terima/tolak              | Status berubah sesuai aksi        |
| TS-14   | Guru   | Pengajuan      | Review pengajuan mandiri | Buka data → verifikasi         | Status pengajuan diperbarui       |
| TS-15   | Guru   | Prestasi       | Input prestasi siswa     | Isi data → simpan              | Prestasi tersimpan                |
| TS-16   | Guru   | Nilai          | Input nilai akademik     | Input nilai → simpan           | Nilai muncul di siswa             |
| TS-17   | Guru   | Real-time      | Update data pendaftaran  | Siswa daftar lomba             | Data bertambah otomatis           |
| TS-18   | Siswa  | Splash         | Cek sesi login           | Buka aplikasi                  | Redirect sesuai status login      |
| TS-19   | Siswa  | Login          | Login valid              | Input NISN & password          | Masuk ke dashboard                |
| TS-20   | Siswa  | Dashboard      | Load data                | Masuk dashboard                | Data tampil                       |
| TS-21   | Siswa  | Kompetisi      | Cari kompetisi           | Input keyword                  | Data sesuai tampil                |
| TS-22   | Siswa  | Kompetisi      | Daftar lomba             | Klik daftar                    | Data masuk ke sistem              |
| TS-23   | Siswa  | Pengumuman     | Lihat pengumuman         | Klik pengumuman                | Detail tampil                     |
| TS-24   | Siswa  | Aktivitas      | Filter aktivitas         | Pilih status                   | Data sesuai filter                |
| TS-25   | Siswa  | Riwayat        | Tambah pengajuan         | Isi form                       | Data tersimpan                    |
| TS-26   | Siswa  | Riwayat        | Upload file              | Upload dokumen                 | File tersimpan                    |
| TS-27   | Siswa  | Nilai          | Lihat nilai              | Masuk halaman nilai            | Data nilai tampil                 |
| TS-28   | Siswa  | Profil         | Ganti password           | Input password baru            | Password berubah                  |
| TS-29   | Siswa  | Notifikasi     | Terima notifikasi        | Ada event baru                 | Notifikasi muncul                 |
| TS-30   | Sistem | Validasi       | NISN duplikat            | Input NISN sama                | Sistem menolak data               |
| TS-31   | Sistem | API            | Koneksi backend          | Akses API                      | Data berhasil ditampilkan         |
| TS-32   | Sistem | Error Handling | Input tidak valid        | Kirim data salah               | Muncul pesan error                |
