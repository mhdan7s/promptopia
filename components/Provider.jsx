'use client';

import { SessionProvider } from "next-auth/react";
// This component is part of NextAuth.js and is used to provide the authentication session context to components in your Next.js application.

const Provider = ({ children, session }) => (
  <SessionProvider session={session}> 
    {children}
  </SessionProvider>
)

export default Provider;