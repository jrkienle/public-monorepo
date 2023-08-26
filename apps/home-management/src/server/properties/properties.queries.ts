import { builder } from 'server/core';

import { getPropertyById } from './properties.service';

builder.queryField('property', (t) =>
  t.prismaField({
    args: {
      id: t.arg.string({
        description: 'The ID of the Property to fetch',
        required: true,
      }),
    },
    authScopes: {
      loggedIn: true,
    },
    description: 'Fetches a Property by its ID',
    resolve: async (query, _root, args) => getPropertyById(args.id, query),
    type: 'Property',
  })
);
