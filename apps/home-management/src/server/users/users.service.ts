import { prisma } from 'server/core';
import type { Prisma } from 'generated/prisma';

export const getUserById = (
  id: string,
  args: Omit<Prisma.UserFindFirstOrThrowArgs, 'where'> = {}
) => prisma.user.findFirstOrThrow({ where: { id }, ...args });
