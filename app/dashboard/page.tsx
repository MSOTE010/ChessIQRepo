'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="max-w-2xl mx-auto mt-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/game" className="p-4 bg-blue-700 text-white rounded hover:bg-blue-800">Play Game</Link>
        <Link href="/learn" className="p-4 bg-blue-700 text-white rounded hover:bg-blue-800">Learn</Link>
        <Link href="/leaderboard" className="p-4 bg-blue-700 text-white rounded hover:bg-blue-800">Leaderboard</Link>
        <Link href="/settings" className="p-4 bg-blue-700 text-white rounded hover:bg-blue-800">Settings</Link>
      </div>
    </main>
  );
}
