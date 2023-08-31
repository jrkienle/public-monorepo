import type { Prisma, Property } from 'generated/prisma';
import { prisma } from 'server/core';

export const getPropertyById = async (
  id: string,
  args: Omit<Prisma.PropertyFindFirstArgs, 'where'> = {}
): Promise<Property> => prisma.property.findFirstOrThrow({ where: { id }, ...args });
