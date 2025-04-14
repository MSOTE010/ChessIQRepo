'use client';

import { useEffect, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

interface ChessBoardProps {
  isPlayerVsAI: boolean;
  difficulty: string;
  onGameEnd: (result: string) => void;
}

export default function ChessBoard({ isPlayerVsAI, difficulty, onGameEnd }: ChessBoardProps) {
  const game = useRef(new Chess());
  const [fen, setFen] = useState(game.current.fen());

  const makeAIMove = () => {
    const moves = game.current.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    game.current.move(randomMove);
    setFen(game.current.fen());
  };

  const onDrop = (source: string, target: string) => {
    const move = game.current.move({ from: source, to: target, promotion: 'q' });
    if (move === null) return false;
    setFen(game.current.fen());

    if (game.current.isGameOver()) {
      onGameEnd(game.current.inCheckmate() ? 'Checkmate' : 'Draw');
    } else if (isPlayerVsAI) {
      setTimeout(makeAIMove, 500);
    }

    return true;
  };

  return <Chessboard position={fen} onPieceDrop={onDrop} />;
}
