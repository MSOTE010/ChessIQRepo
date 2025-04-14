'use client';

import './globals.css';
import { AuthProvider } from '@/lib/AuthContext';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
