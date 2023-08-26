import { builder } from 'server/core';

import { Property } from './properties.objects';
import { getPropertyById } from './properties.service';

builder.queryField('property', (t) =>
  t.field({
    args: {
      id: t.arg.string({
        description: 'The ID of the Property to fetch',
        required: true,
      }),
    },
    description: 'Fetches a Property by its ID',
    resolve: async (_query, args) => getPropertyById(args.id),
    type: Property,
  })
);
