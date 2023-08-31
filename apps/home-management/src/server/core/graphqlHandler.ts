import { getAuth } from '@clerk/nextjs/server';
import { useDisableIntrospection as disableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { createYoga } from 'graphql-yoga';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { prisma } from 'server/core';
import type { AuthContext } from './core.types';
import schema from './graphqlSchema';

async function graphqlHandler(request: NextRequest) {
  const yoga = createYoga({
    context: async (): Promise<AuthContext> => {
      const { userId } = getAuth(request);

      if (!userId) {
        return {
          loggedIn: false,
          properties: [],
          role: null,
          userId: '',
        };
      }

      let user = await prisma.user.findFirst({
        where: { id: userId },
        include: { properties: { select: { id: true } } },
      });

      // If there's no user record in the database for that ID, create one
      if (!user) {
        user = await prisma.user.create({
          data: {
            id: userId,
            role: 'UNVERIFIED_GUEST',
          },
          include: { properties: { select: { id: true } } },
        });
      }

      return {
        loggedIn: true,
        properties: user.properties.map(({ id }) => id),
        role: user.role,
        userId,
      };
    },
    graphiql: process.env.NODE_ENV !== 'production',
    plugins: process.env.NODE_ENV === 'production' ? [disableIntrospection()] : [],
    graphqlEndpoint: '/api/graphql',
    schema,
  });
  const yogaRes = await yoga.fetch(request);
  return new NextResponse(yogaRes.body, yogaRes);
}

export default graphqlHandler;
