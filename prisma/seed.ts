import "dotenv/config";
import { PrismaClient, UserRole, FieldType } from '../src/generated/prisma';
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());

async function seedCategories() {
    console.log('Seeding categories...');
    const categoryNames = ['Olahraga', 'Akademik', 'Teknologi', 'Seni', 'Keagamaan'];
    const categoriesMap: Record<string, string> = {};

    for (const name of categoryNames) {
        let cat = await prisma.competitionCategory.findFirst({ where: { name } });
        if (!cat) {
            cat = await prisma.competitionCategory.create({ data: { name } });
        }
        categoriesMap[name] = cat.id;
    }
    console.log('Categories seeded.');
    return categoriesMap;
}

async function seedLevels() {
    console.log('Seeding levels...');
    const levelsData = [
        { name: 'Sekolah', order: 1 },
        { name: 'Kecamatan', order: 2 },
        { name: 'Kabupaten/Kota', order: 3 },
        { name: 'Provinsi', order: 4 },
        { name: 'Nasional', order: 5 },
        { name: 'Internasional', order: 6 },
    ];
    const levelsMap: Record<string, string> = {};
    for (const levelData of levelsData) {
        let level = await prisma.competitionLevel.findFirst({ where: { name: levelData.name } });
        if (!level) {
            level = await prisma.competitionLevel.create({ data: levelData });
        }
        levelsMap[levelData.name] = level.id;
    }
    console.log('Levels seeded.');
    return levelsMap;
}

async function seedUsers() {
    console.log('Seeding users...');
    const salt = await bcrypt.genSalt(10);
    
    const guruHashedPassword = await bcrypt.hash('guru123', salt);
    const guru = await prisma.user.upsert({
        where: { email: 'guru@raihprestasi.com' },
        update: {},
        create: {
            email: 'guru@raihprestasi.com',
            name: 'Guru Raih Prestasi',
            password: guruHashedPassword,
            role: UserRole.GURU,
        },
    });
    console.log('Guru user seeded.');

    const adminHashedPassword = await bcrypt.hash('admin123', salt);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@raihprestasi.com' },
        update: {},
        create: {
            email: 'admin@raihprestasi.com',
            name: 'Admin Raih Prestasi',
            password: adminHashedPassword,
            role: UserRole.ADMIN,
        },
    });
    console.log('Admin user seeded.');

    return { guru, admin };
}

async function seedCompetitions(categoriesMap: Record<string, string>, levelsMap: Record<string, string>, adminId: string) {
    console.log('Seeding competitions...');
    const now = new Date();
    const future = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30); // 30 days from now
    
    const competitionsData = [
        {
            title: 'Lomba Bulutangkis',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vMS5wbmciLCJpYXQiOjE3NzY2MTY4NzAsImV4cCI6MTgwODE1Mjg3MH0.f6k1XgPySlY40EjQnosry4cUOWJVnTnPFAWiLZH8QhU',
            description: 'Kompetisi bulutangkis tingkat nasional yang ditujukan untuk siswa SMA/MA dari berbagai daerah. Peserta akan bertanding secara individu maupun ganda dengan sistem eliminasi. Ajang ini bertujuan untuk meningkatkan sportivitas dan kemampuan teknik bermain.',
            categoryId: categoriesMap['Olahraga'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Lengkap', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Tanggal Lahir', fieldType: FieldType.DATE, isRequired: true, order: 2 },
                { label: 'Jenis Kelamin', fieldType: FieldType.RADIO, isRequired: true, order: 3, options: ['Laki-laki', 'Perempuan'] },
                { label: 'Kategori Pertandingan', fieldType: FieldType.SELECT, isRequired: true, order: 4, options: ['Tunggal Putra', 'Tunggal Putri', 'Ganda Putra', 'Ganda Putri', 'Campuran'] },
                { label: 'Upload Kartu Pelajar', fieldType: FieldType.FILE, isRequired: true, order: 5 },
            ],
        },
        {
            title: 'Pameran Karya Siswa',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/10.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vMTAucG5nIiwiaWF0IjoxNzc2NjE2ODgzLCJleHAiOjE4MDgxNTI4ODN9.RoOKfxTrcZwIBSTwTlKaOE07aH-e-7PTYNMtiYFUgN4',
            description: 'Pameran ini menampilkan berbagai karya inovatif siswa di bidang seni, teknologi, dan kreativitas. Setiap peserta diberikan kesempatan untuk mempresentasikan hasil karyanya kepada pengunjung. Kegiatan ini bertujuan untuk meningkatkan apresiasi terhadap kreativitas pelajar.',
            categoryId: categoriesMap['Seni'],
            levelId: levelsMap['Sekolah'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Judul Karya', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Deskripsi Karya', fieldType: FieldType.TEXTAREA, isRequired: true, order: 2 },
                { label: 'Kategori Karya', fieldType: FieldType.SELECT, isRequired: true, order: 3, options: ['Lukisan', 'Patung', 'Kriya', 'Digital Art', 'Lainnya'] },
                { label: 'Upload Foto Karya', fieldType: FieldType.FILE, isRequired: true, order: 4 },
                { label: 'Butuh Stand?', fieldType: FieldType.CHECKBOX, isRequired: false, order: 5, options: ['Ya, saya butuh stand'] },
            ],
        },
        {
            title: 'Turnamen Esport',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vMi5wbmciLCJpYXQiOjE3NzY2MTY4OTQsImV4cCI6MTgwODE1Mjg5NH0.uuy6rcXs0-ZyG-dJAisizNAGXmd30R5cktLTPPfgZ1s',
            description: 'Turnamen esport ini mempertemukan tim-tim pelajar dalam berbagai game populer yang kompetitif. Setiap tim akan bertanding dalam sistem bracket untuk menentukan juara. Kegiatan ini juga melatih kerja sama tim dan strategi bermain.',
            categoryId: categoriesMap['Teknologi'],
            levelId: levelsMap['Provinsi'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Tim', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Game yang Diikuti', fieldType: FieldType.SELECT, isRequired: true, order: 2, options: ['Mobile Legends', 'PUBG Mobile', 'Valorant', 'Free Fire'] },
                { label: 'Jumlah Anggota', fieldType: FieldType.NUMBER, isRequired: true, order: 3 },
                { label: 'Upload Logo Tim', fieldType: FieldType.FILE, isRequired: false, order: 4 },
                { label: 'Platform', fieldType: FieldType.RADIO, isRequired: true, order: 5, options: ['Mobile', 'PC'] },
            ],
        },
        {
            title: 'Lari Marathon 5K',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vMy5wbmciLCJpYXQiOjE3NzY2MTY5MDMsImV4cCI6MTgwODE1MjkwM30.bzatUs_aUNSn2AubkB1SKxzz-gtHzIlrbDmV-H0mN8Q',
            description: 'Lomba lari jarak 5 kilometer yang terbuka untuk pelajar dengan kondisi fisik yang sehat. Peserta akan mengikuti rute yang telah ditentukan oleh panitia. Kegiatan ini bertujuan untuk meningkatkan kesehatan and semangat olahraga.',
            categoryId: categoriesMap['Olahraga'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Usia Peserta', fieldType: FieldType.NUMBER, isRequired: true, order: 1 },
                { label: 'Riwayat Kesehatan', fieldType: FieldType.TEXTAREA, isRequired: false, order: 2 },
                { label: 'Tanggal Lahir', fieldType: FieldType.DATE, isRequired: true, order: 3 },
                { label: 'Jenis Kelamin', fieldType: FieldType.RADIO, isRequired: true, order: 4, options: ['Laki-laki', 'Perempuan'] },
                { label: 'Upload Surat Sehat', fieldType: FieldType.FILE, isRequired: true, order: 5 },
            ],
        },
        {
            title: 'Lomba Basket',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vNC5wbmciLCJpYXQiOjE3NzY2MTY5MTYsImV4cCI6MTgwODE1MjkxNn0.NtW7TnVWces3GukepM5TqSTfyPZgj_7YbYzhEZoBE7g',
            description: 'Kompetisi bola basket antar sekolah yang menampilkan tim terbaik dari berbagai daerah. Pertandingan dilakukan dengan sistem turnamen hingga babak final. Kegiatan ini bertujuan untuk meningkatkan kemampuan tim dan sportivitas.',
            categoryId: categoriesMap['Olahraga'],
            levelId: levelsMap['Provinsi'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Tim', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Jumlah Pemain', fieldType: FieldType.NUMBER, isRequired: true, order: 2 },
                { label: 'Kategori Tim', fieldType: FieldType.SELECT, isRequired: true, order: 3, options: ['Putra', 'Putri'] },
                { label: 'Upload Logo Tim', fieldType: FieldType.FILE, isRequired: false, order: 4 },
                { label: 'Setuju Peraturan', fieldType: FieldType.CHECKBOX, isRequired: true, order: 5, options: ['Ya, Setuju'] },
            ],
        },
        {
            title: 'Turnamen Sepak Bola',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vNS5wbmciLCJpYXQiOjE3NzY2MTY5MjMsImV4cCI6MTgwODE1MjkyM30.Zs7mXo6nCwY7NXkCYtzr4vRKSYfXGgHAakogdfWtV-s',
            description: 'Turnamen sepak bola ini diikuti oleh tim pelajar dari berbagai sekolah di tingkat daerah. Setiap tim akan bersaing untuk menjadi juara melalui sistem pertandingan gugur. Kegiatan ini bertujuan untuk membangun kerja sama dan semangat kompetisi.',
            categoryId: categoriesMap['Olahraga'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Tim', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Kapten Tim', fieldType: FieldType.TEXT, isRequired: true, order: 2 },
                { label: 'Jumlah Pemain', fieldType: FieldType.NUMBER, isRequired: true, order: 3 },
                { label: 'Upload Jersey', fieldType: FieldType.FILE, isRequired: false, order: 4 },
                { label: 'Kategori Umur', fieldType: FieldType.SELECT, isRequired: true, order: 5, options: ['U-15', 'U-17', 'U-19'] },
            ],
        },
        {
            title: 'Kompetisi Catur',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vNi5wbmciLCJpYXQiOjE3NzY2MTY5MzAsImV4cCI6MTgwODE1MjkzMH0.45IE2WCP03uDn6Zv8y44ppycVOwR-ItJ5N1Zhnh1JRI',
            description: 'Kompetisi catur ini dirancang untuk menguji kemampuan strategi and konsentrasi peserta. Setiap pertandingan dilakukan dengan aturan resmi yang berlaku. Kegiatan ini juga bertujuan untuk meningkatkan kemampuan berpikir kritis siswa.',
            categoryId: categoriesMap['Akademik'],
            levelId: levelsMap['Provinsi'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Rating Catur', fieldType: FieldType.NUMBER, isRequired: false, order: 1 },
                { label: 'Pengalaman Bertanding', fieldType: FieldType.TEXTAREA, isRequired: false, order: 2 },
                { label: 'Kategori', fieldType: FieldType.SELECT, isRequired: true, order: 3, options: ['Standar', 'Cepat', 'Kilat'] },
                { label: 'Jenis Kelamin', fieldType: FieldType.RADIO, isRequired: true, order: 4, options: ['Laki-laki', 'Perempuan'] },
                { label: 'Upload Identitas', fieldType: FieldType.FILE, isRequired: true, order: 5 },
            ],
        },
        {
            title: 'Cerdas Cermat',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vNy5wbmciLCJpYXQiOjE3NzY2MTY5MzgsImV4cCI6MTgwODE1MjkzOH0.nnzLLJbM-qElD2YLruF9fPTbU118TyyhoukBdi5FM8c',
            description: 'Lomba cerdas cermat ini menguji pengetahuan umum dan kemampuan berpikir cepat siswa. Peserta akan berkompetisi dalam bentuk tim with berbagai jenis soal. Kegiatan ini bertujuan untuk meningkatkan wawasan and kerja sama tim.',
            categoryId: categoriesMap['Akademik'],
            levelId: levelsMap['Sekolah'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Tim', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Jumlah Anggota', fieldType: FieldType.NUMBER, isRequired: true, order: 2 },
                { label: 'Kategori Soal', fieldType: FieldType.SELECT, isRequired: true, order: 3, options: ['IPA', 'IPS', 'Matematika', 'Pengetahuan Umum'] },
                { label: 'Upload Surat Tugas', fieldType: FieldType.FILE, isRequired: true, order: 4 },
                { label: 'Setuju Aturan', fieldType: FieldType.CHECKBOX, isRequired: true, order: 5, options: ['Setuju'] },
            ],
        },
        {
            title: 'Tryout Persiapan PPDB',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vOC5wbmciLCJpYXQiOjE3NzY2MTY5NTAsImV4cCI6MTgwODE1Mjk1MH0.l7VoE9rFH-HBFfIfIItBkYH84Zpt8NGF3e5k81avQ-o',
            description: 'Tryout ini dirancang sebagai simulasi ujian untuk mempersiapkan siswa menghadapi PPDB. Soal-soal disusun menyerupai ujian sebenarnya. Kegiatan ini membantu siswa mengukur kemampuan and kesiapan mereka.',
            categoryId: categoriesMap['Akademik'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Asal Sekolah', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Target Sekolah', fieldType: FieldType.TEXT, isRequired: false, order: 2 },
                { label: 'Tanggal Lahir', fieldType: FieldType.DATE, isRequired: true, order: 3 },
                { label: 'Jurusan Pilihan', fieldType: FieldType.SELECT, isRequired: true, order: 4, options: ['IPA', 'IPS', 'Bahasa', 'Agama'] },
                { label: 'Upload Kartu Peserta', fieldType: FieldType.FILE, isRequired: false, order: 5 },
            ],
        },
        {
            title: 'Lomba Adzan',
            thumbnail: 'https://sqnqrcvnrkmnbgjauxxj.supabase.co/storage/v1/object/sign/dokument-pengajuan/9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWMxNzc1NC0yYTM2LTQxMjMtYTEzNy00ZDA0NjU4YWY3YjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2t1bWVudC1wZW5nYWp1YW4vOS5wbmciLCJpYXQiOjE3NzY2MTY5NTgsImV4cCI6MTgwODE1Mjk1OH0.AlHj2bFKHqr_5ljXEvMAKt9G5qVix9z57F-sKzJrilY',
            description: 'Lomba adzan ini bertujuan untuk meningkatkan kemampuan and keindahan dalam mengumandangkan adzan. Peserta akan dinilai berdasarkan suara, tajwid, and adab. Kegiatan ini juga menumbuhkan kepercayaan diri siswa.',
            categoryId: categoriesMap['Keagamaan'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: adminId,
            formFields: [
                { label: 'Nama Peserta', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Pengalaman Adzan', fieldType: FieldType.TEXTAREA, isRequired: false, order: 2 },
                { label: 'Kategori Umur', fieldType: FieldType.SELECT, isRequired: true, order: 3, options: ['Anak-anak', 'Remaja', 'Dewasa'] },
                { label: 'Upload Video Adzan', fieldType: FieldType.FILE, isRequired: true, order: 4 },
                { label: 'Jenis Kelamin', fieldType: FieldType.RADIO, isRequired: true, order: 5, options: ['Laki-laki'] },
            ],
        },
    ];

    for (const comp of competitionsData) {
        const { formFields, ...compData } = comp;

        const existing = await prisma.competition.findFirst({ where: { title: comp.title } });
        if (!existing) {
            const competition = await prisma.competition.create({
                data: {
                    ...compData,
                    CompetitionFormField: {
                        create: formFields || [],
                    },
                },
            });
            console.log(`Created competition: ${competition.title}`);
        } else {
            console.log(`Competition already exists: ${comp.title}`);
        }
    }
    console.log('Competitions seeded.');
}

async function seedNews(adminId: string) {
    console.log('Seeding news...');
    const newsData = [
        {
            title: 'Siswa SMKN 1 Boyolangu Raih Juara 1 Lomba Web Design Tingkat Provinsi',
            content: 'Salah satu siswa jurusan RPL berhasil meraih juara 1 dalam lomba Web Design tingkat provinsi Jawa Timur. Karya yang ditampilkan dinilai unggul dari segi UI/UX and fungsionalitas. Prestasi ini diharapkan dapat memotivasi siswa lain untuk terus berkarya.',
            thumbnail: 'https://unsplash.com/photos/a-graduate-in-cap-and-gown-adjusts-her-hat-outdoors-OWA0YMQ3E5U',
            isPublished: true,
            createdBy: adminId,
        },
        {
            title: 'Tim Basket SMKN 1 Boyolangu Menjadi Juara 2 Turnamen Antar Sekolah',
            content: 'Tim basket SMKN 1 Boyolangu berhasil meraih juara 2 dalam turnamen antar sekolah se-Kabupaten Tulungagung. Pertandingan berlangsung sengit hingga babak final. Kekompakan tim menjadi kunci keberhasilan dalam kompetisi ini.',
            thumbnail: 'https://unsplash.com/photos/classmate-classroom-knowledge-technology-concept-hD23z8XuqAE',
            isPublished: true,
            createdBy: adminId,
        },
        {
            title: 'Prestasi Gemilang di Lomba Cerdas Cermat Tingkat Kabupaten',
            content: 'Tim cerdas cermat SMKN 1 Boyolangu berhasil meraih juara 1 dalam lomba tingkat kabupaten. Mereka menunjukkan kemampuan pengetahuan umum yang sangat baik. Keberhasilan ini menjadi bukti kualitas akademik siswa.',
            thumbnail: 'https://unsplash.com/photos/3-women-smiling-and-standing-under-blue-sky-during-daytime-dNBmg8ckaOE',
            isPublished: true,
            createdBy: adminId,
        },
    ];

    for (const news of newsData) {
        const existing = await prisma.news.findFirst({ where: { title: news.title } });
        if (!existing) {
            await prisma.news.create({ data: news });
            console.log(`Created news: ${news.title}`);
        } else {
            console.log(`News already exists: ${news.title}`);
        }
    }
    console.log('News seeded.');
}

async function seedAnnouncements(guruId: string) {
    console.log('Seeding announcements...');
    const announcementsData = [
        {
            title: 'Jadwal Ujian Remedial Matematika',
            content: 'Bagi siswa yang belum mencapai KKM pada ujian matematika, harap mengikuti ujian remedial pada hari Jumat pukul 13.00 WIB di Laboratorium Komputer 1.',
            isPublished: true,
            createdBy: guruId,
        },
        {
            title: 'Kumpul Perdana Ekskul Robotik Terbatas',
            content: 'Pertemuan perdana ekstrakurikuler robotik akan diadakan besok sepulang sekolah. Bagi anggota baru, silakan membawa laptop masing-masing jika ada.',
            isPublished: true,
            createdBy: guruId,
        }
    ];

    for (const ann of announcementsData) {
        const existing = await prisma.announcement.findFirst({ where: { title: ann.title } });
        if (!existing) {
            await prisma.announcement.create({ data: ann });
            console.log(`Created announcement: ${ann.title}`);
        } else {
            console.log(`Announcement already exists: ${ann.title}`);
        }
    }
    console.log('Announcements seeded.');
}

async function main() {
    console.log('Start seeding...');

    const categoriesMap = await seedCategories();
    const levelsMap = await seedLevels();
    const { guru, admin } = await seedUsers();

    await seedCompetitions(categoriesMap, levelsMap, admin.id);
    await seedNews(admin.id);
    await seedAnnouncements(guru.id);

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
