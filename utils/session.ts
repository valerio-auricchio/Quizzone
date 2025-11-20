import { Question } from '../types';

const SESSION_KEY = 'databricks_prep_session';

export interface QuizSession {
  questionOrder: number[]; // Array of IDs
  currentIndex: number;
  selectedOption: string | null;
  isSubmitted: boolean;
}

export const saveSession = (session: QuizSession) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getSession = (): QuizSession | null => {
  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse session", e);
    return null;
  }
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

// Helper to reconstruct the full question objects from the saved ID order
export const restoreQuestionList = (allQuestions: Question[], savedOrder: number[]): Question[] => {
  const questionMap = new Map(allQuestions.map(q => [q.id, q]));
  const ordered = savedOrder.map(id => questionMap.get(id)).filter((q): q is Question => !!q);
  
  // If questions were added to code since last save, append them, or if lengths mismatch significantly, just return original
  if (ordered.length === 0) return allQuestions;
  
  return ordered;
};