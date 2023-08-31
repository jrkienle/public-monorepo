import pagination from 'prisma-extension-pagination';
import { PrismaClient } from 'generated/prisma';

const prismaClientSingleton = () => new PrismaClient().$extends(pagination());

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
