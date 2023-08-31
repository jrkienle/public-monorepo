import { builder } from 'server/core';
import { User } from './users.objects';
import { getUserById } from './users.service';

builder.queryField('viewer', (t) =>
  t.prismaField({
    authScopes: {
      loggedIn: true,
    },
    description: 'Gets the currently logged in user',
    resolve: async (query, _root, _args, { userId }) => getUserById(userId, query),
    type: User,
  })
);
