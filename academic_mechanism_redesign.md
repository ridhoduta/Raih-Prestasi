# Revisi Mekanisme Akademik (Reward Prestasi)

Berdasarkan klarifikasi Anda, fitur nilai akademik adalah **reward/bonus** untuk siswa yang memiliki prestasi (Achievement). Fungsi `AcademicFile` akan tetap dipertahankan seperti saat ini untuk mengakomodasi upload rapor dokumen secara global.

## Pemahaman Logika Baru
1. **Fitur Utama**: Mendokumentasikan **Prestasi** (`Achievement`).
2. **Fungsi Akademik**: Sebagai sarana memberikan reward/nilai tambah bagi siswa berprestasi.
3. **Sistem Relasi (Sesuai Permintaan)**:
   - 1 Laporan Prestasi (`Achievement`) dikonversi menjadi **tepat 1 Nilai Mata Pelajaran** sebagai reward (misalnya, juara Lomba Fisika mendapat nilai tambahan di mata pelajaran "Fisika").
   - 1 Poin Nilai tersebut terikat pada **1 Tahun Akademik** dan **1 Semester**.

## Perbandingan Implementasi

### Saat Ini (Current)
- **Pengisian Nilai Terpisah dari Prestasi**: Saat ini admin bisa mengisi *banyak mata pelajaran sekaligus* (seperti menginput rapor penuh) untuk siswa yang berprestasi, tanpa mengikat nilai tersebut ke prestasi yang mana.
- **Relasi Database**: Model `AcademicScore` hanya terikat ke `Student`, berdiri sendiri tanpa tahu asal-usul prestasinya.

### Rencana Perbaikan (Planned)
- **Database Schema (`schema.prisma`)**:
  Kita akan mengikat `AcademicScore` secara langsung (1-to-1) dengan `Achievement`.
  ```prisma
  model Achievement {
    id              String   @id @default(uuid())
    // ... field lainnya ...
    
    // Relasi 1-to-1 ke AcademicScore
    academicScore   AcademicScore?
  }

  model AcademicScore {
    id              String       @id @default(uuid())
    
    studentId       String
    student         Student      @relation(fields: [studentId], references: [id])
    
    // Menghubungkan nilai ini sebagai reward dari laporan prestasi spesifik
    achievementId   String       @unique
    achievement     Achievement  @relation(fields: [achievementId], references: [id], onDelete: Cascade)
    
    subject         String       // 1 Mata Pelajaran terkait
    score           Float        // Nilai Reward
    
    yearId          String
    academicYear    AcademicYear @relation(fields: [yearId], references: [id])
    semester        Semester
  }
  ```

- **Perubahan UI di Halaman Admin**:
  - Komponen `AcademicModal` tidak lagi meminta *array of subjects*, melainkan menampilkan daftar *Laporan Prestasi* (`Achievement`) milik siswa tersebut.
  - Untuk setiap *Laporan Prestasi*, Admin dapat menentukan: "Mata Pelajaran apa yang mendapat reward?" dan "Berapa poin nilainya?" (Berdasarkan Tahun & Semester).

- **Backend API (`/api/admin/academic`)**:
  - Endpoint diperbarui agar hanya memproses 1 `subject` dan 1 `score` yang secara eksplisit dikaitkan dengan `achievementId`.
