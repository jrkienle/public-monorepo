import { prisma } from 'server/core';

export const getPropertiesAndRole = async (userId?: string) => {
  if (!userId) {
    return {
      properties: [],
      role: null,
    };
  }

  // I'm getting extra properties here, thus why I'm not calling getUserById
  const user = await prisma.user.findFirstOrThrow({
    where: { id: userId },
    include: { properties: { select: { id: true } } },
  });

  return {
    properties: user.properties.map(({ id }) => id),
    role: user.role,
  };
};
