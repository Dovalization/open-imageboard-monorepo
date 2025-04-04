import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenBoard',
  description: 'A customizable and open-source discussion board',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
