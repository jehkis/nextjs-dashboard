import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Ajetaan middlewaressa jokaiselle pyynnölle ennen sivun renderöintiä.
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Ohjaa kirjautumattoman käyttäjän kirjautumissivulle
      } else if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Lisätään auth.ts:ssä (bcrypt ei toimi Edge-ajoympäristössä)
} satisfies NextAuthConfig;
