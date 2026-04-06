import "dotenv/config";
import { PrismaClient, UserRole, FieldType } from '../src/generated/prisma';
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());

async function main() {
    console.log('Start seeding...');

    // 1. Seed Categories
    const categoryNames = ['Sains', 'Seni', 'Olahraga', 'Akademik', 'Teknologi'];
    const categoriesMap: Record<string, string> = {};

    for (const name of categoryNames) {
        let cat = await prisma.competitionCategory.findFirst({ where: { name } });
        if (!cat) {
            cat = await prisma.competitionCategory.create({ data: { name } });
        }
        categoriesMap[name] = cat.id;
    }
    console.log('Categories seeded.');

    // 2. Seed Levels
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

    // 3. Seed Guru User
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash('guru123', salt);
    // const guru = await prisma.user.upsert({
    //     where: { email: 'guru@example.com' },
    //     update: {},
    //     create: {
    //         email: 'guru@example.com',
    //         name: 'Guru Pengampu',
    //         password: hashedPassword,
    //         role: UserRole.GURU,
    //     },
    // });
    // console.log('Guru user seeded.');

    // // const salt = await bcrypt.genSalt(10);
    // const adminHashedPassword = await bcrypt.hash('admin123', salt);
    // const admin = await prisma.user.upsert({
    //     where: { email: 'admin@example.com' },
    //     update: {},
    //     create: {
    //         email: 'admin@example.com',
    //         name: 'Admin',
    //         password: adminHashedPassword,
    //         role: UserRole.ADMIN,
    //     },
    // });
    // console.log('Admin user seeded.');

    // 4. Seed Competitions
    const now = new Date();
    const past = new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30); // 30 days ago
    const future = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30); // 30 days from now

    const competitionsData = [
        {
            title: 'Lomba Matematika Nasional 2026',
            description: 'Kompetisi matematika tingkat nasional untuk siswa SMA/MA.',
            categoryId: categoriesMap['Sains'],
            levelId: levelsMap['Nasional'],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
            formFields: [
                { label: 'Link Portofolio', fieldType: FieldType.TEXT, isRequired: true, order: 1 },
                { label: 'Alasan Mengikuti', fieldType: FieldType.TEXTAREA, isRequired: false, order: 2 },
            ],
        },
        {
            title: 'Festival Lukis Digital Provinsi',
            description: 'Unjuk bakat melukis digital tingkat provinsi.',
            categoryId: categoriesMap['Seni'],
            levelId: levelsMap['Provinsi'],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 7),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
            formFields: [
                { label: 'Ukuran Kaos', fieldType: FieldType.SELECT, isRequired: true, order: 1, options: ['S', 'M', 'L', 'XL'] },
            ],
        },
        {
            title: 'Turnamen Catur Sekolah 2025',
            description: 'Pencarian bakat catur internal sekolah.',
            categoryId: categoriesMap['Olahraga'],
            levelId: levelsMap['Sekolah'],
            startDate: past,
            endDate: new Date(past.getTime() + 1000 * 60 * 60 * 24 * 2),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
        },
        {
            title: 'Lomba Karya Tulis Ilmiah Populer',
            description: 'Menulis artikel ilmiah dengan bahasa yang mudah dimengerti.',
            categoryId: categoriesMap['Akademik'],
            levelId: levelsMap['Kabupaten/Kota'],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
        },
        {
            title: 'Robotics International Contest',
            description: 'Annual international robotics competition for students.',
            categoryId: categoriesMap['Teknologi'],
            levelId: levelsMap['Internasional'],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 14),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
        },
        {
            title: "Olimpiade Fisika Nasional",
            description: "Kompetisi fisika tingkat nasional bagi siswa SMA.",
            categoryId: categoriesMap["Sains"],
            levelId: levelsMap["Nasional"],
            startDate: now,
            endDate: future,
            "createdBy": "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
            "formFields": [
                { "label": "Motivasi Mengikuti", "fieldType": FieldType.TEXTAREA, "isRequired": true, "order": 1 }
            ]
        },
        {
            title: "Festival Musik Pelajar Provinsi",
            description: "Ajang unjuk bakat musik antar sekolah.",
            categoryId: categoriesMap["Seni"],
            levelId: levelsMap["Provinsi"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 5),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Kejuaraan Basket Antar Sekolah",
            description: "Turnamen basket tingkat kabupaten.",
            categoryId: categoriesMap["Olahraga"],
            levelId: levelsMap["Kabupaten/Kota"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Hackathon Pelajar Indonesia",
            description: "Kompetisi membuat aplikasi inovatif.",
            categoryId: categoriesMap["Teknologi"],
            levelId: levelsMap["Nasional"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 3),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
            formFields: [
                { label: "Link GitHub", fieldType: FieldType.TEXT, isRequired: true, order: 1 }
            ]
        },
        {
            title: "Debat Bahasa Inggris Tingkat Sekolah",
            description: "Kompetisi debat untuk meningkatkan kemampuan public speaking.",
            categoryId: categoriesMap["Akademik"],
            levelId: levelsMap["Sekolah"],
            startDate: past,
            endDate: new Date(past.getTime() + 1000 * 60 * 60 * 24 * 1),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Lomba Desain Poster Digital",
            description: "Kompetisi desain poster bertema lingkungan.",
            categoryId: categoriesMap["Seni"],
            levelId: levelsMap["Kabupaten/Kota"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10",
            formFields: [
                { label: "Link Karya", fieldType: FieldType.TEXT, isRequired: true, order: 1 }
            ]
        },
        {
            title: "Olimpiade Biologi Pelajar",
            description: "Kompetisi biologi tingkat provinsi.",
            categoryId: categoriesMap["Sains"],
            levelId: levelsMap["Provinsi"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 7),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Kompetisi Coding untuk Pemula",
            description: "Belajar dan berkompetisi dalam pemrograman dasar.",
            categoryId: categoriesMap["Teknologi"],
            levelId: levelsMap["Sekolah"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Turnamen Futsal Pelajar",
            description: "Turnamen futsal antar SMA.",
            categoryId: categoriesMap["Olahraga"],
            levelId: levelsMap["Provinsi"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 4),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Lomba Fotografi Alam",
            description: "Kompetisi fotografi bertema keindahan alam.",
            categoryId: categoriesMap["Seni"],
            levelId: levelsMap["Nasional"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Seminar Inovasi Teknologi Pelajar",
            description: "Presentasi ide teknologi inovatif dari siswa.",
            categoryId: categoriesMap["Teknologi"],
            levelId: levelsMap["Kabupaten/Kota"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Lomba Puisi Pelajar",
            description: "Ajang kreativitas menulis puisi.",
            categoryId: categoriesMap["Seni"],
            levelId: levelsMap["Sekolah"],
            startDate: past,
            endDate: new Date(past.getTime() + 1000 * 60 * 60 * 24 * 2),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Kompetisi Startup Pelajar",
            description: "Pitching ide bisnis digital untuk siswa.",
            categoryId: categoriesMap["Teknologi"],
            levelId: levelsMap["Nasional"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 6),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Olimpiade Kimia Sekolah",
            description: "Kompetisi kimia tingkat internal sekolah.",
            categoryId: categoriesMap["Sains"],
            levelId: levelsMap["Sekolah"],
            startDate: now,
            endDate: future,
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        },
        {
            title: "Lomba Esai Nasional Pelajar",
            description: "Kompetisi menulis esai ilmiah tingkat nasional.",
            categoryId: categoriesMap["Akademik"],
            levelId: levelsMap["Nasional"],
            startDate: future,
            endDate: new Date(future.getTime() + 1000 * 60 * 60 * 24 * 10),
            createdBy: "43dc7078-59bc-4e02-aa1e-ad57ad910b10"
        }
    ];

    for (const comp of competitionsData) {
        const { formFields, ...compData } = comp;

        // Check if competition already exists to avoid duplicates
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
