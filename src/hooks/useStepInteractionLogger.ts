import { useState } from 'react';

export function useStepInteractionLogger(stepIds: string[]) {
    const [confidenceByStep, setConfidenceByStep] = useState<Record<string, number | null>>(
      () => Object.fromEntries(stepIds.map(id => [id, null]))
    );
  
    const [hintShownByStep, setHintShownByStep] = useState<Record<string, boolean>>(
      () => Object.fromEntries(stepIds.map(id => [id, false]))
    );
  
    const setConfidence = (stepId: string, confidence: number) => {
      setConfidenceByStep(prev => ({ ...prev, [stepId]: confidence }));
    };
  
    const markHintShown = (stepId: string) => {
      setHintShownByStep(prev => ({ ...prev, [stepId]: true }));
    };
  
    const getLog = () => ({
      timestamp: new Date().toISOString(),
      confidenceByStep,
      hintShownByStep,
    });
  
    return {
      confidenceByStep,
      hintShownByStep,
      setConfidence,
      markHintShown,
      getLog,
    };
  }
  