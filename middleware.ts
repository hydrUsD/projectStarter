import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export const middleware = authkitMiddleware({
  redirectUri: process.env.NEXT_PUBLIC_AUTHKIT_REDIRECT_URI ?? 'http://localhost:3000/callback',
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: [
      '/',        // allow home page when signed out
      '/login',   // allow the login route
      '/callback',// allow OAuth callback
      '/debug-auth', // if you want to test, getSignInUrl
    ],
  },
});

export const config = { matcher: ['/', '/account/:page*', '/api/:page*', '/callback'] };
