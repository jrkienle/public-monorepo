import builder from './graphqlBuilder';

export const PaginationInput = builder.inputType('Pagination', {
  fields: (t) => ({
    page: t.int({ required: true }),
    limit: t.int({ required: false }),
  }),
});

export const StringFilter = builder.prismaFilter('String', {
  ops: ['contains', 'equals', 'startsWith', 'not'],
});
