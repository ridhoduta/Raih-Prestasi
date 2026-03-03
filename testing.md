# DOKUMENTASI SKENARIO TESTING (FORMAT TABEL)

## Sistem Informasi Manajemen Kompetisi & Prestasi Siswa

---

# I. TESTING ADMIN

## A. Manajemen Akun Guru

| ID     | Skenario               | Langkah Singkat           | Expected Result                  |
| ------ | ---------------------- | ------------------------- | -------------------------------- |
| TC-A01 | Tambah akun guru valid | Isi form lengkap → Simpan | Data tersimpan & guru bisa login |
| TC-A02 | Email duplikat         | Input email terdaftar     | Sistem menolak & tampil error    |
| TC-A03 | Edit profil guru       | Ubah data → Simpan        | Data berhasil diperbarui         |
| TC-A04 | Nonaktifkan akun       | Klik nonaktifkan          | Guru tidak dapat login           |

---

## B. Import Data Siswa

| ID     | Skenario               | Langkah Singkat             | Expected Result                |
| ------ | ---------------------- | --------------------------- | ------------------------------ |
| TC-A05 | Upload CSV/Excel valid | Upload file sesuai format   | Data siswa masuk database      |
| TC-A06 | Upload format salah    | Upload file bukan CSV/Excel | Sistem menolak file            |
| TC-A07 | Data NISN duplikat     | Upload data sama            | Sistem menolak / skip duplikat |

---

## C. Manajemen Kategori & Tingkat

| ID     | Skenario                | Expected Result       |
| ------ | ----------------------- | --------------------- |
| TC-A08 | Tambah kategori         | Kategori tersimpan    |
| TC-A09 | Hapus kategori terpakai | Ditolak / soft delete |

---

## D. Manajemen Berita

| ID     | Skenario      | Expected Result     |
| ------ | ------------- | ------------------- |
| TC-A10 | Tambah berita | Berita tampil       |
| TC-A11 | Edit berita   | Perubahan tersimpan |
| TC-A12 | Hapus berita  | Berita tidak tampil |

---

# II. TESTING GURU

## A. Login

| ID     | Skenario       | Expected Result    |
| ------ | -------------- | ------------------ |
| TC-G01 | Login valid    | Masuk dashboard    |
| TC-G02 | Password salah | Muncul pesan error |
| TC-G03 | Akun nonaktif  | Login ditolak      |

---

## B. Manajemen Kompetisi

| ID     | Skenario              | Expected Result       |
| ------ | --------------------- | --------------------- |
| TC-G04 | Tambah kompetisi      | Kompetisi tersimpan   |
| TC-G05 | Tanpa kategori        | Validasi gagal        |
| TC-G06 | Edit kompetisi        | Data diperbarui       |
| TC-G07 | Nonaktifkan kompetisi | Tidak tampil di siswa |

---

## C. Verifikasi Pendaftaran

| ID     | Skenario              | Expected Result            |
| ------ | --------------------- | -------------------------- |
| TC-G08 | Set diterima          | Status berubah             |
| TC-G09 | Set ditolak + catatan | Status & catatan tersimpan |
| TC-G10 | Akses tanpa login     | Unauthorized               |

---

## D. Pengajuan Kompetisi Mandiri

| ID     | Skenario         | Expected Result       |
| ------ | ---------------- | --------------------- |
| TC-G11 | Terima pengajuan | Status diterima       |
| TC-G12 | Tolak + alasan   | Alasan tersimpan      |
| TC-G13 | Upload non-PDF   | Ditolak               |
| TC-G14 | Download berkas  | File berhasil diunduh |

---

## E. Pengumuman

| ID     | Skenario          | Expected Result     |
| ------ | ----------------- | ------------------- |
| TC-G15 | Tambah pengumuman | Tampil di siswa     |
| TC-G16 | Edit pengumuman   | Perubahan tersimpan |
| TC-G17 | Hapus pengumuman  | Tidak tampil        |

---

## F. Laporan & Prestasi

| ID     | Skenario               | Expected Result |
| ------ | ---------------------- | --------------- |
| TC-G18 | Verifikasi laporan     | Status berubah  |
| TC-G19 | Verifikasi tanpa login | Ditolak         |

---

## G. Upload Nilai Akademik

| ID     | Skenario         | Expected Result |
| ------ | ---------------- | --------------- |
| TC-G20 | Upload CSV valid | Data tersimpan  |
| TC-G21 | Format salah     | Ditolak         |
| TC-G22 | Data kosong      | Ditolak         |

---

# III. TESTING SISWA

## A. Login

| ID     | Skenario             | Expected Result |
| ------ | -------------------- | --------------- |
| TC-S01 | Login NISN valid     | Berhasil login  |
| TC-S02 | NISN tidak terdaftar | Login gagal     |

---

## B. Melihat Kompetisi

| ID     | Skenario              | Expected Result           |
| ------ | --------------------- | ------------------------- |
| TC-S03 | Lihat kompetisi aktif | Data tampil               |
| TC-S04 | Filter kategori       | Data sesuai filter        |
| TC-S05 | Filter tanpa hasil    | Notifikasi tidak ada data |

---

## C. Pendaftaran Kompetisi

| ID     | Skenario         | Expected Result      |
| ------ | ---------------- | -------------------- |
| TC-S06 | Daftar kompetisi | Status terdaftar     |
| TC-S07 | Daftar dua kali  | Ditolak              |
| TC-S08 | Lihat status     | Status tampil sesuai |

---

## D. Pengajuan Kompetisi Mandiri

| ID     | Skenario             | Expected Result       |
| ------ | -------------------- | --------------------- |
| TC-S09 | Ajukan kompetisi     | Status menunggu       |
| TC-S10 | Upload file salah    | Ditolak               |
| TC-S11 | Download rekomendasi | File berhasil diunduh |

---

## E. Pengumuman

| ID     | Skenario         | Expected Result   |
| ------ | ---------------- | ----------------- |
| TC-S12 | Lihat pengumuman | Urut dari terbaru |

---

## F. Prestasi & Laporan

| ID     | Skenario                | Expected Result |
| ------ | ----------------------- | --------------- |
| TC-S13 | Upload laporan          | File tersimpan  |
| TC-S14 | File terlalu besar      | Ditolak         |
| TC-S15 | Lihat status verifikasi | Status tampil   |

---

## G. Nilai Akademik

| ID     | Skenario               | Expected Result  |
| ------ | ---------------------- | ---------------- |
| TC-S16 | Lihat nilai sendiri    | Data tampil      |
| TC-S17 | Akses nilai siswa lain | Access forbidden |

---

# IV. SECURITY TESTING

| ID       | Skenario                  | Expected Result |
| -------- | ------------------------- | --------------- |
| TC-SEC01 | Akses admin tanpa login   | Redirect login  |
| TC-SEC02 | Siswa akses endpoint guru | 403 Forbidden   |
| TC-SEC03 | Uji SQL Injection         | Sistem aman     |
| TC-SEC04 | Upload file berbahaya     | Ditolak         |
| TC-SEC05 | Akses Guru ke Admin       | 403 Forbidden   |
| TC-SEC06 | IDOR (Akses data lain)    | 403 Forbidden   |
| TC-SEC07 | Session Expiry & Logout   | Token invalid   |

---

# V. INTEGRATION TESTING

| ID       | Skenario             | Expected Result   |
| -------- | -------------------- | ----------------- |
| TC-INT01 | Admin → Guru → Siswa | Data sinkron      |
| TC-INT02 | Daftar → Verifikasi  | Status ter-update |
| TC-INT03 | Hapus Guru (Cascade) | Relasi aman       |
| TC-INT04 | Hapus Siswa (History) | Data aman         |

---

# VI. SYSTEM TESTING

| ID       | Skenario                  | Expected Result              |
| -------- | ------------------------- | ---------------------------- |
| TC-SYS01 | End-to-end flow kompetisi | Seluruh alur berjalan normal |

---

# VII. ADDITIONAL EXTENDED TESTING

## A. Form Dinamis & Validasi
| ID      | Skenario                     | Expected Result           |
| ------- | ---------------------------- | ------------------------- |
| TC-E01  | Validasi tipe field dinamis  | Tampil error tipe data    |
| TC-E02  | Field wajib (Required)       | Validasi gagal            |
| TC-E03  | Simpan field opsional kosong | Berhasil disimpan         |
| TC-E04  | Edit form dengan pendaftar   | Integritas data terjaga   |

## B. Logika Waktu & File
| ID      | Skenario                     | Expected Result           |
| ------- | ---------------------------- | ------------------------- |
| TC-E05  | Daftar belum mulai           | Tombol daftar nonaktif    |
| TC-E06  | Daftar sudah berakhir        | Pendaftaran ditolak       |
| TC-E07  | Validasi rentang tanggal     | StartDate < EndDate       |
| TC-E08  | Upload non-gambar (thumb)    | Ditolak                   |
| TC-E09  | Upload file > 5MB            | Ditolak                   |

## C. Dashboard & UX
| ID      | Skenario                     | Expected Result           |
| ------- | ---------------------------- | ------------------------- |
| TC-E10  | Akurasi statistik Admin      | Data sesuai database      |
| TC-E11  | Akurasi statistik Guru       | Data sesuai database      |
| TC-E12  | Update real-time dashboard   | Data langsung berubah     |
| TC-E13  | Pagination daftar siswa      | Page 2 tampil benar       |
| TC-E14  | Search kompetisi (Partial)   | Data ditemukan            |

---

# TOTAL ESTIMASI TEST CASE

| Role                   | Jumlah            |
| ---------------------- | ----------------- |
| Admin                  | 12                |
| Guru                   | 22                |
| Siswa                  | 17                |
| Security & Integration | 13                |
| Extended Testing       | 14                |
| **Total**              | **±78 Test Case** |