'use client';

import React from 'react';

const tutorials = [
  {
    title: 'Opening Principles',
    content: 'Control the center, develop your pieces, and protect your king.',
  },
  {
    title: 'Endgame Basics',
    content: 'Know key positions like king and pawn vs king.',
  },
  {
    title: 'Common Checkmates',
    content: 'Learn mating patterns like back-rank mate, smothered mate, etc.',
  },
];

export default function TutorialSection() {
  return (
    <div className="p-6 space-y-6">
      {tutorials.map((tutorial, idx) => (
        <div key={idx} className="p-4 border border-gray-300 rounded shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">{tutorial.title}</h2>
          <p className="text-gray-700 mb-3">{tutorial.content}</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}
