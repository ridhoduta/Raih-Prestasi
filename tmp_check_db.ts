import { PrismaClient } from './src/generated/prisma';
const prisma = new PrismaClient();
async function check() {
    try {
        const gurus = await prisma.user.findMany({ where: { role: 'GURU' }, take: 5, select: { id: true, name: true } });
        const cats = await prisma.competitionCategory.findMany({ take: 5 });
        const levels = await prisma.competitionLevel.findMany({ take: 5 });
        console.log(JSON.stringify({ gurus, cats, levels }, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}
check();
