import './globals.css';

import { Header } from '@/components/header';
import { Inter } from 'next/font/google';
import type React from 'react';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OpenBoard',
  description: 'A modular and anonymous-first imageboard platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-background to-background/95 flex flex-col content-fade-in items-center w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
