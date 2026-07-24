# Raih Prestasi Web 🏆

[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.3.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-316192?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

**Raih Prestasi Web** adalah platform portal web sekolah terintegrasi yang dirancang untuk mengelola, memantau, dan memverifikasi prestasi serta kompetisi siswa secara digital. Sistem ini membagi peran pengguna menjadi Admin dan Guru, serta menyediakan API untuk integrasi aplikasi mobile siswa.

---

## ✨ Fitur Utama

- 🔑 **Sistem Autentikasi**: Login berbasis JWT untuk mengamankan data pengguna (Admin & Guru) dengan role-based authorization.
- 📋 **Manajemen Kompetisi & Form Dinamis**: Membuat kompetisi baru dengan custom fields/form pendaftaran (Text, Date, File, Select, dll) secara fleksibel.
- 🎖️ **Pengajuan & Verifikasi Prestasi**: Siswa dapat mengajukan prestasi secara mandiri, dan Guru dapat memverifikasi pengajuan tersebut secara langsung.
- 📈 **Sistem Poin Prestasi & Akademik**: Perhitungan poin otomatis berdasarkan peringkat juara dan tingkat kompetisi (Sekolah, Kecamatan, Kabupaten, Provinsi, Nasional, Internasional).
- 🔔 **Notifikasi Real-time**: Integrasi **Pusher** untuk notifikasi instan di web dan **Firebase Cloud Messaging (FCM)** untuk push notification ke perangkat siswa.
- 📁 **Penyimpanan File Cloud**: Integrasi dengan **Supabase Storage** untuk menyimpan sertifikat, logo tim, dan dokumen pelengkap secara aman.
- 📊 **Ekspor Laporan**: Generate data prestasi dan statistik ke format **Excel (.xlsx)** serta render sertifikat/laporan ke format **PDF**.

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Framework**: Next.js 16.1.4 (App Router)
- **Library UI**: React 19.2.3, Lucide React (Icons), Recharts (Charts)
- **Styling**: Tailwind CSS v4, PostCSS
- **State Management & Fetching**: TanStack React Query v5

### Backend & Database
- **Runtime & Engine**: Next.js Route Handlers
- **Database ORM**: Prisma 7.3.0 dengan PostgreSQL
- **Penyimpanan Cloud**: Supabase SDK
- **Autentikasi**: JWT (jose), bcrypt
- **Real-time & Push Notifications**: Pusher, Firebase Admin SDK

---

## 📁 Struktur Project

Berikut adalah struktur folder utama dalam project **Raih Prestasi Web**:

```text
raih-prestasi-web/
├── prisma/                    # Konfigurasi database & migrasi Prisma
│   ├── migrations/            # File migrasi database PostgreSQL
│   ├── schema.prisma          # Skema database Prisma (dengan custom client output)
│   └── seed.ts                # Script untuk mengisi data awal (seeding)
├── public/                    # Aset statis (gambar, icon, favicon)
├── scripts/                   # Script utility (contoh: test-fcm.ts)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/               # Endpoint REST API (auth, admin, guru, student, upload)
│   │   ├── components/        # Komponen UI spesifik halaman (Sidebar, Modal, dll)
│   │   │   └── landingPage/   # Komponen khusus untuk Halaman Utama / Landing Page
│   │   ├── page/              # Struktur Halaman Web
│   │   │   ├── admin/         # Dashboard & Fitur Admin
│   │   │   ├── guru/          # Dashboard & Fitur Guru
│   │   │   ├── login/         # Halaman Login Multi-role
│   │   │   └── news/          # Portal Berita Sekolah
│   │   ├── globals.css        # Styling Global Tailwind CSS v4
│   │   ├── layout.tsx         # Root Layout
│   │   └── page.tsx           # Halaman Utama (Landing Page)
│   ├── components/            # Komponen global reusable (seperti provider)
│   ├── generated/             # Lokasi output Prisma Client yang di-generate
│   ├── lib/                   # Utilitas & Inisialisasi SDK (auth, prisma, pusher, supabase)
│   └── middleware.ts          # Middleware Next.js untuk pengecekan JWT & Proteksi Rute
├── .env.example               # Contoh file konfigurasi environment
├── next.config.ts             # Konfigurasi Next.js
├── package.json               # Daftar dependensi & npm scripts
└── tsconfig.json              # Konfigurasi TypeScript
```

---

## 🚀 Langkah Instalasi & Konfigurasi

Ikuti langkah-langkah di bawah ini untuk menjalankan project ini di lingkungan lokal Anda:

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal software berikut di komputer Anda:
- **Node.js** (versi 18.x atau yang lebih baru direkomendasikan)
- **PostgreSQL Database** (baik lokal atau cloud seperti Supabase/Aiven)
- **Git**

### 2. Clone Repository
Clone project ini ke komputer lokal Anda:
```bash
git clone https://github.com/username/raih-prestasi-web.git
cd raih-prestasi-web
```

### 3. Instal Dependensi
Jalankan perintah berikut untuk menginstal semua library yang dibutuhkan:
```bash
npm install
```

### 4. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Buka file `.env` yang baru dibuat dan sesuaikan nilai-nilainya dengan kredensial PostgreSQL, Supabase, JWT, Firebase, dan Pusher Anda.

### 5. Setup Database & Generate Prisma Client
Project ini menggunakan output direktori kustom untuk Prisma Client (`src/generated/prisma`). Jalankan perintah berikut untuk menerapkan migrasi ke database Anda dan men-generate client:
```bash
# Terapkan migrasi ke database PostgreSQL
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

### 6. Jalankan Database Seeder (Opsional)
Untuk mempermudah pengujian, isi database Anda dengan data awal (kategori, level kompetisi, akun guru/admin default, siswa, pengajuan, prestasi, berita, dan pengumuman) menggunakan script seed:
```bash
npx prisma db seed
```

### 7. Jalankan Server Pengembangan
Jalankan server Next.js lokal:
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 👥 Akun untuk Pengujian (Seeded Accounts)

Jika Anda menjalankan langkah **Database Seeder** di atas, Anda dapat masuk ke aplikasi dengan akun-akun default berikut:

| Peran (Role) | Email / NISN | Password | Rute Halaman |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@raihprestasi.com` | `admin123` | `/page/admin` |
| **Guru** | `guru@raihprestasi.com` | `guru123` | `/page/guru` |
| **Siswa (1)** | `1000000001` | `1000000001` | *Integrasi Mobile / API* |
| **Siswa (2)** | `1000000002` | `1000000002` | *Integrasi Mobile / API* |
| ... | s/d `1000000013` | *sama dengan NISN* | *Integrasi Mobile / API* |

---

## 📝 Catatan Tambahan

- **Penyimpanan Gambar/Sertifikat**: Pastikan bucket storage di Supabase dengan nama yang tertera di `SUPABASE_STORAGE_BUCKET` (default: `dokument-pengajuan`) telah diset ke status **public** atau memiliki policy yang mengizinkan download agar tautan sertifikat/dokumen dapat diakses secara publik.
- **Push Notification**: File konfigurasi kunci Firebase Admin harus disalin dengan benar pada `.env` agar modul push notification berfungsi tanpa error saat siswa mengajukan prestasi.
