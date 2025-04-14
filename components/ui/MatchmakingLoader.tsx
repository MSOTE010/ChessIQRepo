'use client';

import React from 'react';

export default function MatchmakingLoader() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-blue-600 font-semibold">Finding a match...</p>
    </div>
  );
}
