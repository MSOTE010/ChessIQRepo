'use client';

import { useState } from 'react';
import ChessBoard from '@/components/chess/ChessBoard';
import DifficultySelector from '@/components/chess/DifficultySelector';
import MatchmakingLoader from '@/components/ui/MatchmakingLoader';

export default function GamePage() {
  const [isPlayerVsAI, setIsPlayerVsAI] = useState(true);
  const [difficulty, setDifficulty] = useState('Easy');
  const [isSearching, setIsSearching] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    if (isPlayerVsAI) {
      setGameStarted(true);
    } else {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setGameStarted(true);
      }, 3000);
    }
  };

  const handleGameEnd = (result: string) => {
    alert(`Game Over: ${result}`);
    setGameStarted(false);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Play Game</h1>

      {!gameStarted && (
        <>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setIsPlayerVsAI(true)}
              className={`px-4 py-2 rounded ${
                isPlayerVsAI ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600'
              }`}
            >
              Practice vs AI
            </button>
            <button
              onClick={() => setIsPlayerVsAI(false)}
              className={`px-4 py-2 rounded ${
                !isPlayerVsAI ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600'
              }`}
            >
              Ranked Match
            </button>
          </div>

          {isPlayerVsAI && (
            <DifficultySelector selected={difficulty} setSelected={setDifficulty} />
          )}

          <button
            onClick={handleStartGame}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Start Game
          </button>
        </>
      )}

      {isSearching && <MatchmakingLoader />}

      {gameStarted && (
        <ChessBoard
          isPlayerVsAI={isPlayerVsAI}
          difficulty={difficulty}
          onGameEnd={handleGameEnd}
        />
      )}
    </main>
  );
}
