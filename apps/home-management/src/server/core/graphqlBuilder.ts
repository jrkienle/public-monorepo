import SchemaBuilder from '@pothos/core';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaUtils from '@pothos/plugin-prisma-utils';
import { DateTimeResolver } from 'graphql-scalars';

import type PrismaTypes from 'generated/pothos';

import type { AuthContext } from './core.types';
import { prisma } from './db';

const builder = new SchemaBuilder<{
  AuthScopes: {
    isGuestAtProperty: string;
    isOwner: boolean;
    loggedIn: boolean;
    loggedOut: boolean;
  };
  Context: AuthContext;
  Scalars: {
    DateTime: {
      Input: Date;
      Output: Date;
    };
  };
  PrismaTypes: PrismaTypes;
}>({
  authScopes: (context) => ({
    isGuestAtProperty: (propertyId) =>
      context.role === 'VERIFIED_GUEST' && context.properties.includes(propertyId),
    isOwner: context.role === 'OWNER',
    loggedIn: context.loggedIn,
    loggedOut: !context.loggedIn,
  }),
  plugins: [ScopeAuthPlugin, PrismaPlugin, PrismaUtils],
  prisma: {
    client: prisma,
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

builder.addScalarType('DateTime', DateTimeResolver, {});
builder.queryType({});

export default builder;
