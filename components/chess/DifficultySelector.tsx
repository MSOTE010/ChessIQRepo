'use client';

import React from 'react';

interface DifficultySelectorProps {
  selected: string;
  setSelected: (difficulty: string) => void;
}

export default function DifficultySelector({ selected, setSelected }: DifficultySelectorProps) {
  const options = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="flex gap-4 justify-center my-4">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded border ${
            selected === option
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-blue-600 border-blue-600'
          } hover:opacity-80`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
