import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import FeedbackBox from './FeedbackBox';

import { useStepInteractionLogger } from '../hooks/useStepInteractionLogger';

export type Step = {
  id: string;
  content: string;
  hint?: string | React.ReactElement;
};

type Props = {
  steps: Step[];
};

export default function ProofWithSteps({ steps }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const step = steps[stepIndex];

  const {
    confidenceByStep,
    setConfidence,
    markHintShown,
    getLog,
  } = useStepInteractionLogger(steps.map((step) => step.id));

  const goToNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1);
      setShowHint(false);
    }
  };

  const goToPrev = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
      setShowHint(false);
    }
  };

  const handleShowHint = () => {
    setShowHint(true);
    markHintShown(step.id);
  };

  const saveLog = () => {
    const log = getLog();
    console.log('📊 Interaction Log:', log);
    localStorage.setItem('proofSessionLog', JSON.stringify(log));
    alert('Session log saved!');
  };

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto w-full">
      {stepIndex < steps.length - 1 && (
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
          Step {stepIndex + 1} of {steps.length}
        </h2>
      )}

      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="bg-white p-4 rounded shadow"
      >
        <BlockMath math={step.content} />
      </motion.div>

      {stepIndex < steps.length - 1 && (
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <button
            onClick={goToPrev}
            disabled={stepIndex === 0}
            className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
          >
            Previous
          </button>

          {step.hint && !showHint && (
            <button
              onClick={handleShowHint}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Show Hint
            </button>
          )}

          {stepIndex < steps.length - 1 && (
            <button
              onClick={goToNext}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      )}

      <AnimatePresence>
        {showHint && step.hint && (
          <motion.div
            key={step.id + '-hint'}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded prose max-w-none"
          >
            {typeof step.hint === 'string' ? (
              <InlineMath math={step.hint} />
            ) : (
              step.hint
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {showHint && (
        <div className="mt-4">
          <p className="mb-2 font-medium">How confident are you about this step?</p>
          <div className="flex gap-4 text-xl sm:text-2xl flex-wrap">
            <button onClick={() => setConfidence(step.id, 1)} title="Not confident">😕</button>
            <button onClick={() => setConfidence(step.id, 2)} title="Somewhat confident">😐</button>
            <button onClick={() => setConfidence(step.id, 3)} title="Very confident">😊</button>
          </div>

          {confidenceByStep[step.id] && (
            <p className="mt-2 text-sm text-gray-600">
              You selected:{' '}
              {['', '😕 Not confident', '😐 Somewhat', '😊 Very confident'][confidenceByStep[step.id]!] || ''}
            </p>
          )}
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={saveLog}
          className="px-4 py-2 bg-purple-600 text-white rounded w-full sm:w-auto"
        >
          Save Session Log
        </button>
      </div>

      {stepIndex === steps.length - 1 && (
        <>
          <div className="mt-10 p-6 bg-white border rounded shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-800">🧾 Full Proof Summary</h3>
            <div className="space-y-4 text-gray-800">
              {steps.map((step) => (
                <div key={step.id}>
                  <BlockMath math={step.content} />
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                💬 Give Feedback
              </button>
            </div>
          </div>

          {isFeedbackOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <button
                  onClick={() => setIsFeedbackOpen(false)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-black"
                >
                  ❌
                </button>
                <FeedbackBox />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}