'use client';

import React from 'react';

interface Player {
  username: string;
  rating: number;
  wins: number;
  losses: number;
}

interface LeaderboardTableProps {
  players: Player[];
}

export default function LeaderboardTable({ players }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Rating</th>
            <th className="px-4 py-2 text-left">Wins</th>
            <th className="px-4 py-2 text-left">Losses</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.username} className="border-t">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{player.username}</td>
              <td className="px-4 py-2">{player.rating}</td>
              <td className="px-4 py-2">{player.wins}</td>
              <td className="px-4 py-2">{player.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
