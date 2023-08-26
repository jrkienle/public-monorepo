import { Property } from 'generated/prisma';
import { prisma } from 'server/core';

export const getPropertyById = async (id: string): Promise<Property> =>
  prisma.property.findFirstOrThrow({ where: { id } });
