import { authMiddleware } from '@clerk/nextjs';

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api)(.*)'],
};

export default authMiddleware({
  publicRoutes: ['/', '/login', '/signup'],
});
