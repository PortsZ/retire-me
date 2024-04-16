'use client';
import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function Page() {
  async function handleSignOut() {
    await signOut({
      redirect: true,
      callbackUrl: '/',
    });
  }

  useEffect(() => {handleSignOut()}, []);
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <h1 className="text-5xl italic font-logo">SIGNED OUT</h1>
    </div>
  );
}
