import { getAuth } from '@clerk/nextjs/server';
import { useDisableIntrospection as disableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { createYoga } from 'graphql-yoga';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { AuthContext } from './core.types';
import schema from './graphqlSchema';

async function graphqlHandler(request: NextRequest) {
  const yoga = createYoga({
    context: (): AuthContext => {
      const { userId } = getAuth(request);
      return {
        loggedIn: !!userId,
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
