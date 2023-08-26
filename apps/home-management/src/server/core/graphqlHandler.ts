import { useDisableIntrospection as disableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { createYoga } from 'graphql-yoga';
import { NextResponse } from 'next/server';

import schema from './graphqlSchema';

const yoga = createYoga({
  context: async () => {
    // TODO: Figure out auth and add auth context
  },
  graphiql: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV === 'production' ? [disableIntrospection()] : [],
  graphqlEndpoint: '/api/graphql',
  schema,
});

async function graphqlHandler(request: Request) {
  const yogaRes = await yoga.fetch(request);
  return new NextResponse(yogaRes.body, yogaRes);
}

export default graphqlHandler;
