import type { Prisma, Property } from 'generated/prisma';
import { prisma } from 'server/core';

export type PropertyIncludeSelect = Pick<Prisma.PropertyFindUniqueArgs, 'include' | 'select'>;

export const getPropertyById = async (
  id: string,
  includeSelect?: PropertyIncludeSelect
): Promise<Property> => prisma.property.findFirstOrThrow({ where: { id }, ...includeSelect });
