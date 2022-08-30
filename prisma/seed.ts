import { PrismaClient } from '@prisma/client';
import { genres, movies } from '../seed';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.movie.createMany({
      data: movies,
      skipDuplicates: true,
    });
    console.log('Added movies data');
    await prisma.genre.createMany({
      data: genres,
    });
    console.log('Added genres data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
