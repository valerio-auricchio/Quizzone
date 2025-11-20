import { StatsDB, QuestionStat } from '../types';

const STORAGE_KEY = 'databricks_prep_stats';

export const getStats = (): StatsDB => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const saveStat = (questionId: number, isCorrect: boolean) => {
  const stats = getStats();
  const current: QuestionStat = stats[questionId] || { attempts: 0, incorrect: 0, lastAnswered: 0 };

  const updated: QuestionStat = {
    attempts: current.attempts + 1,
    incorrect: isCorrect ? current.incorrect : current.incorrect + 1,
    lastAnswered: Date.now()
  };

  const newStats = { ...stats, [questionId]: updated };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
};

export const clearStats = () => {
  localStorage.removeItem(STORAGE_KEY);
};