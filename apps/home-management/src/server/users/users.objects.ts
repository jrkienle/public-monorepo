import { builder } from 'server/core';

export const User = builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    role: t.exposeString('role'),
  }),
});
