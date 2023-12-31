import { authMiddleware } from '@clerk/nextjs';

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};

export default authMiddleware({
  apiRoutes: '/graphql',
  publicRoutes: ['/', '/login', '/signup'],
});
