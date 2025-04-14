'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-600">Sorry, we couldn’t find the page you were looking for.</p>
      <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded">Go Home</Link>
    </main>
  );
}
