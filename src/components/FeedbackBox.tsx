import { useState } from 'react';

export default function FeedbackBox() {
  const [difficulty, setDifficulty] = useState('');
  const [confusion, setConfusion] = useState('');
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Feedback submitted:', { difficulty, confusion, rating });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
        <p className="font-semibold text-green-800">Thanks for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 border border-gray-200 rounded bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Your Feedback</h3>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm text-gray-700">
          📝 What was hard?
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          rows={2}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm text-gray-700">
          🧩 Anything unclear?
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          rows={2}
          value={confusion}
          onChange={(e) => setConfusion(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm text-gray-700">
          ⭐️ Rate the proof (1–5)
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-500 mt-1 text-center">Rating: {rating} / 5</p>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
      >
        Submit Feedback
      </button>
    </div>
  );
}