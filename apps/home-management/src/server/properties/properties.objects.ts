import { builder } from 'server/core';

export const Address = builder.prismaObject('Address', {
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    city: t.exposeString('city'),
    country: t.exposeString('country'),
    lines: t.exposeStringList('lines'),
    property: t.relation('property'),
    propertyId: t.exposeString('propertyId'),
    state: t.exposeString('state'),
    zip: t.exposeString('zip'),
  }),
});

export const Property = builder.prismaObject('Property', {
  fields: (t) => ({
    id: t.exposeString('id'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    address: t.relation('address'),
    description: t.exposeString('description', { nullable: true }),
    name: t.exposeString('name'),
    pic: t.exposeString('pic', { nullable: true }),
  }),
});
