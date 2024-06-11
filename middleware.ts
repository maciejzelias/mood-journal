import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/journal(.*)']);

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  },
  {
    signInUrl: '/sign-in',
    signUpUrl: '/sign-up',
    afterSignInUrl: '/journal',
    afterSignUpUrl: '/new-user',
  },
);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
