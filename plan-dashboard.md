# 📊 Rancangan Konten Dashboard (Admin & Guru)
## Sistem Raih Prestasi

Dashboard dirancang berdasarkan peran pengguna agar informasi yang ditampilkan relevan dengan tugas masing-masing.

---

# 🧑‍💼 1. Dashboard Admin (System Management Focus)

Dashboard Admin difokuskan pada **pengelolaan data utama sistem** dan monitoring global, bukan pada proses operasional guru.

---

## 1.1 Ringkasan Data Utama (Master Data Overview)
Menampilkan:
- Total Siswa (Student)
- Total Guru (User - role GURU)
- Total Kompetisi (Competition)
- Total Prestasi (Achievement)
- Total Pengumuman (Announcement)

📌 Tujuan:
Memberikan gambaran skala sistem secara keseluruhan

---

## 1.2 Manajemen Data (Data Control Insight)
Menampilkan kondisi data:
- Jumlah siswa aktif vs nonaktif
- Jumlah guru aktif
- Kompetisi aktif vs nonaktif

📌 Tujuan:
Memastikan data dalam sistem terkelola dengan baik

---

## 1.3 Aktivitas Sistem (High-Level Activity)
Menampilkan aktivitas secara global:
- Jumlah pendaftaran kompetisi
- Jumlah submission masuk
- Jumlah prestasi yang tercatat

📌 Catatan:
Admin hanya melihat **jumlah & tren**, bukan detail operasional

---

## 1.4 Statistik & Tren Sistem
- Grafik pertumbuhan siswa
- Grafik jumlah kompetisi per periode
- Grafik prestasi per bulan

📌 Tujuan:
Monitoring perkembangan sistem

---

## 1.5 🎯 Quick Understanding Actions (Pengenalan Sistem)
Fitur untuk membantu admin memahami struktur aplikasi:

- 🔘 "Kelola Data Siswa"
- 🔘 "Kelola Data Guru"
- 🔘 "Kelola Kompetisi"
- 🔘 "Kelola Pengumuman"

📌 Tujuan:
Admin langsung memahami bahwa perannya adalah **mengelola data utama sistem**

---

## 1.6 🚀 Quick Action (System Control)
- Tambah Siswa
- Tambah Guru
- Tambah Kompetisi
- Buat Pengumuman

📌 Fokus:
Aksi terkait **manajemen data**, bukan validasi

---

# 👨‍🏫 2. Dashboard Guru (Operational & Validation Focus)

Dashboard Guru difokuskan pada aktivitas operasional seperti validasi, pembinaan, dan monitoring siswa.

---

## 2.1 Ringkasan Tugas Guru
- Jumlah siswa aktif
- Jumlah prestasi siswa
- Jumlah submission yang perlu direview
- Jumlah kompetisi aktif

---

## 2.2 Validasi & Review (Core Feature)
- Submission MENUNGGU
- Prestasi MENUNGGU verifikasi
- Registrasi MENUNGGU

📌 Ini adalah pusat aktivitas utama guru

---

## 2.3 Aktivitas Siswa
- Siswa terbaru mendaftar
- Siswa upload prestasi
- Submission terbaru

---

## 2.4 Insight Pembinaan
- Siswa paling aktif
- Siswa dengan prestasi terbanyak
- Grafik aktivitas siswa

---

## 2.5 🎯 Quick Understanding Actions (Role Guidance)
- 🔘 "Review Pengajuan"
- 🔘 "Verifikasi Prestasi"
- 🔘 "Pantau Aktivitas Siswa"

📌 Tujuan:
Guru langsung memahami tugas utamanya

---

## 2.6 🚀 Quick Action
- Verifikasi prestasi
- Review submission
- Lihat siswa
- Kelola kompetisi

---

# ⚖️ 3. Perbedaan Peran Dashboard

| Aspek | Admin | Guru |
|------|------|------|
| Fokus | Data & Sistem | Proses & Validasi |
| Aksi | CRUD Data | Review & Verifikasi |
| View | Global | Operasional |
| Tujuan | Kontrol sistem | Pembinaan siswa |

---

# 🎯 Kesimpulan

Dashboard dirancang dengan pemisahan tanggung jawab yang jelas:

- **Admin** → berperan sebagai pengelola sistem dan data utama  
- **Guru** → berperan sebagai validator dan pembina siswa  

Dengan pemisahan ini:
- Sistem menjadi lebih terstruktur
- User tidak bingung dengan perannya
- Alur kerja menjadi lebih efisien