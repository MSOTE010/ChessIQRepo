'use client';

import React from 'react';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';

const mockPlayers = [
  { username: 'Magnus', rating: 2800, wins: 120, losses: 10 },
  { username: 'Hikaru', rating: 2750, wins: 110, losses: 20 },
  { username: 'Fiona', rating: 2400, wins: 90, losses: 30 },
];

export default function LeaderboardPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <LeaderboardTable players={mockPlayers} />
    </main>
  );
}
