
import { Question } from '../types';

const SESSION_KEY = 'databricks_prep_session_v2'; // Bump version for schema change

export interface QuizSession {
  questionOrder: number[]; 
  currentIndex: number;
  selectedOptions: string[]; // Changed from selectedOption: string | null
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

export const restoreQuestionList = (allQuestions: Question[], savedOrder: number[]): Question[] => {
  const questionMap = new Map(allQuestions.map(q => [q.id, q]));
  const ordered = savedOrder.map(id => questionMap.get(id)).filter((q): q is Question => !!q);
  if (ordered.length === 0) return allQuestions;
  return ordered;
};
