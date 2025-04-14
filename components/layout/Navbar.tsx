'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center shadow text-white">
      <Link href="/" className="text-xl font-semibold hover:text-gray-200">
        ChessIQ
      </Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            <button onClick={signOut} className="text-red-300 hover:text-red-100">Sign Out</button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-gray-200">Login</Link>
            <Link href="/register" className="hover:text-gray-200">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
