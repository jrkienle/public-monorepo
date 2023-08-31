import builder from './graphqlBuilder';
import type { PaginatedObject } from './core.types';

// Pothos typings are so insane there's not really any other way to do this
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildPaginatedObj = <ObjectType>(type: any, description?: string) => {
  const ObjRef = builder.objectRef<PaginatedObject<ObjectType>>(`Paginated${type.name}`);
  return builder.objectType(ObjRef, {
    description,
    fields: (t) => ({
      count: t.exposeInt('count'),
      nextPage: t.exposeInt('nextPage', { nullable: true }),
      objects: t.expose('objects', { type: [type] }),
      pageCount: t.exposeInt('pageCount'),
      prevPage: t.exposeInt('prevPage', { nullable: true }),
    }),
  });
};
