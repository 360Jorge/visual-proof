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
      <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
        <p className="font-semibold">Thanks for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 border rounded bg-gray-50 shadow-sm max-w-2xl w-full mx-auto">
      <h3 className="text-lg font-bold mb-4 text-center">Your Feedback</h3>

      <div className="mb-4">
        <label className="block mb-1 font-medium">🧠 What was hard?</label>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          rows={3}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">❓ Anything unclear?</label>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          rows={3}
          value={confusion}
          onChange={(e) => setConfusion(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">⭐ Rate the proof (1–5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-1 text-center">Rating: {rating} / 5</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
