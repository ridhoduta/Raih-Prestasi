# Tambahan Seed untuk Student, Registration, Answer, Grade, dan Achievement

Tambahkan import berikut di bagian atas:

```ts
import { RegistrationStatus, AchievementStatus, Gender } from '../src/generated/prisma';
```

---

## Seed Grades

```ts
async function seedGrades() {
    console.log('Seeding grades...');

    const grades = [
        { gradeName: 'Juara 1', points: 100 },
        { gradeName: 'Juara 2', points: 90 },
        { gradeName: 'Juara 3', points: 80 },
        { gradeName: 'Harapan 1', points: 70 },
        { gradeName: 'Harapan 2', points: 60 },
    ];

    for (const grade of grades) {
        await prisma.grade.upsert({
            where: {
                gradeName: grade.gradeName,
            },
            update: {},
            create: grade,
        });
    }

    console.log('Grades seeded.');
}
```

---

## Seed Grade Competitions

```ts
async function seedGradeCompetitions() {
    console.log('Seeding grade competitions...');

    const gradeCompetitions = [
        { gradeCompetitionName: 'Sekolah', points: 10 },
        { gradeCompetitionName: 'Kecamatan', points: 20 },
        { gradeCompetitionName: 'Kabupaten/Kota', points: 30 },
        { gradeCompetitionName: 'Provinsi', points: 40 },
        { gradeCompetitionName: 'Nasional', points: 50 },
        { gradeCompetitionName: 'Internasional', points: 75 },
    ];

    for (const gradeCompetition of gradeCompetitions) {
        await prisma.gradeCompetition.upsert({
            where: {
                gradeCompetitionName: gradeCompetition.gradeCompetitionName,
            },
            update: {},
            create: gradeCompetition,
        });
    }

    console.log('Grade competitions seeded.');
}
```

---

## Seed Students

```ts
async function seedStudents() {
    console.log('Seeding students...');

    const salt = await bcrypt.genSalt(10);

    const studentsData = [
        {
            nisn: '1000000001',
            name: 'Ahmad Rizki',
            kelas: '10 IPA 1',
            angkatan: 2026,
            dateBirth: new Date('2008-01-10'),
            gender: Gender.L,
        },
        {
            nisn: '1000000002',
            name: 'Budi Santoso',
            kelas: '10 IPA 2',
            angkatan: 2026,
            dateBirth: new Date('2008-02-14'),
            gender: Gender.L,
        },
        {
            nisn: '1000000003',
            name: 'Citra Lestari',
            kelas: '10 IPA 3',
            angkatan: 2026,
            dateBirth: new Date('2008-03-18'),
            gender: Gender.P,
        },
        {
            nisn: '1000000004',
            name: 'Dewi Anggraini',
            kelas: '10 IPS 1',
            angkatan: 2026,
            dateBirth: new Date('2008-04-11'),
            gender: Gender.P,
        },
        {
            nisn: '1000000005',
            name: 'Eko Prasetyo',
            kelas: '10 IPS 2',
            angkatan: 2026,
            dateBirth: new Date('2008-05-22'),
            gender: Gender.L,
        },
        {
            nisn: '1000000006',
            name: 'Fajar Nugroho',
            kelas: '11 IPA 1',
            angkatan: 2025,
            dateBirth: new Date('2007-06-17'),
            gender: Gender.L,
        },
        {
            nisn: '1000000007',
            name: 'Gita Maharani',
            kelas: '11 IPA 2',
            angkatan: 2025,
            dateBirth: new Date('2007-07-20'),
            gender: Gender.P,
        },
        {
            nisn: '1000000008',
            name: 'Hendra Wijaya',
            kelas: '11 IPS 1',
            angkatan: 2025,
            dateBirth: new Date('2007-08-03'),
            gender: Gender.L,
        },
        {
            nisn: '1000000009',
            name: 'Indah Permata',
            kelas: '11 IPS 2',
            angkatan: 2025,
            dateBirth: new Date('2007-09-05'),
            gender: Gender.P,
        },
        {
            nisn: '1000000010',
            name: 'Joko Saputra',
            kelas: '12 IPA 1',
            angkatan: 2024,
            dateBirth: new Date('2006-10-01'),
            gender: Gender.L,
        },
        {
            nisn: '1000000011',
            name: 'Kartika Sari',
            kelas: '12 IPA 2',
            angkatan: 2024,
            dateBirth: new Date('2006-11-09'),
            gender: Gender.P,
        },
        {
            nisn: '1000000012',
            name: 'Lukman Hakim',
            kelas: '12 IPS 1',
            angkatan: 2024,
            dateBirth: new Date('2006-12-12'),
            gender: Gender.L,
        },
        {
            nisn: '1000000013',
            name: 'Maya Putri',
            kelas: '12 IPS 2',
            angkatan: 2024,
            dateBirth: new Date('2006-04-25'),
            gender: Gender.P,
        },
    ];

    const students = [];

    for (const studentData of studentsData) {
        const hashedPassword = await bcrypt.hash(studentData.nisn, salt);

        const student = await prisma.student.upsert({
            where: {
                nisn: studentData.nisn,
            },
            update: {},
            create: {
                ...studentData,
                password: hashedPassword,
            },
        });

        students.push(student);
    }

    console.log('Students seeded.');

    return students;
}
```

---

## Helper Generate Answer Value

```ts
function generateAnswerValue(field: any, student: any) {
    switch (field.fieldType) {
        case 'TEXT':
            return {
                answer: `${student.name} ${field.label}`,
            };

        case 'TEXTAREA':
            return {
                answer: `Jawaban untuk ${field.label}`,
            };

        case 'NUMBER':
            return {
                answer: Math.floor(Math.random() * 100).toString(),
            };

        case 'DATE':
            return {
                answer: student.dateBirth.toISOString(),
            };

        case 'FILE':
            return {
                url: 'https://example.com/document.pdf',
                filename: 'document.pdf',
            };

        case 'SELECT':
        case 'RADIO': {
            const options = Array.isArray(field.options)
                ? field.options
                : JSON.parse(JSON.stringify(field.options || []));

            return {
                answer: options[0] || 'Pilihan',
            };
        }

        case 'CHECKBOX': {
            const options = Array.isArray(field.options)
                ? field.options
                : JSON.parse(JSON.stringify(field.options || []));

            return {
                answer: [options[0] || 'Ya'],
            };
        }

        default:
            return {
                answer: 'Default Answer',
            };
    }
}
```

---

## Seed Registrations + Answers

```ts
async function seedRegistrations(students: any[]) {
    console.log('Seeding registrations...');

    const competitions = await prisma.competition.findMany({
        include: {
            CompetitionFormField: true,
        },
    });

    for (const student of students) {
        const selectedCompetitions = competitions.slice(0, 3);

        for (const competition of selectedCompetitions) {
            const existing = await prisma.competitionRegistration.findFirst({
                where: {
                    studentId: student.id,
                    competitionId: competition.id,
                },
            });

            if (existing) continue;

            const registration = await prisma.competitionRegistration.create({
                data: {
                    studentId: student.id,
                    competitionId: competition.id,
                    status: RegistrationStatus.DITERIMA,
                    documentUrl: 'https://example.com/document.pdf',
                },
            });

            for (const field of competition.CompetitionFormField) {
                await prisma.registrationAnswer.create({
                    data: {
                        registrationId: registration.id,
                        fieldId: field.id,
                        value: generateAnswerValue(field, student),
                    },
                });
            }
        }
    }

    console.log('Registrations seeded.');
}
```

---

## Seed Achievements

```ts
async function seedAchievements(students: any[]) {
    console.log('Seeding achievements...');

    const competitions = await prisma.competition.findMany({
        include: {
            level: true,
        },
    });

    const grades = await prisma.grade.findMany();
    const gradeCompetitions = await prisma.gradeCompetition.findMany();

    for (const student of students) {
        const achievementCount = Math.floor(Math.random() * 9) + 2;

        for (let i = 0; i < achievementCount; i++) {
            const competition = competitions[i % competitions.length];
            const grade = grades[Math.floor(Math.random() * grades.length)];

            const gradeCompetition = gradeCompetitions.find(
                (gc) => gc.gradeCompetitionName === competition.level.name
            );

            await prisma.achievement.create({
                data: {
                    studentId: student.id,
                    competitionName: competition.title,
                    result: grade.gradeName,
                    points: Math.floor(grade.points + (gradeCompetition?.points || 0)),
                    certificate: 'https://example.com/certificate.pdf',
                    gradeId: grade.id,
                    gradeCompetitionId: gradeCompetition?.id,
                    status: AchievementStatus.TERVERIFIKASI,
                },
            });
        }
    }

    console.log('Achievements seeded.');
}
```

---

## Tambahkan di main()

```ts
const students = await seedStudents();

await seedGrades();
await seedGradeCompetitions();

await seedRegistrations(students);
await seedAchievements(students);
```

---

## Contoh Urutan Main Final

```ts
async function main() {
    console.log('Start seeding...');

    const categoriesMap = await seedCategories();
    const levelsMap = await seedLevels();
    const { guru, admin } = await seedUsers();

    await seedCompetitions(categoriesMap, levelsMap, admin.id);

    const students = await seedStudents();

    await seedGrades();
    await seedGradeCompetitions();

    await seedRegistrations(students);
    await seedAchievements(students);

    await seedNews(admin.id);
    await seedAnnouncements(guru.id);

    console.log('Seeding finished.');
}
```

