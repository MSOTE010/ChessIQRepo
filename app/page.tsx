'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to ChessIQ</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link href="/register" className="px-6 py-2 bg-gray-200 text-blue-600 rounded">Register</Link>
      </div>
    </main>
  );
}
