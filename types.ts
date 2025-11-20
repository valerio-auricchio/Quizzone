export interface Question {
  id: number;
  topic: string;
  questionText: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string;
  explanation: string;
}

export interface QuestionStat {
  attempts: number;
  incorrect: number;
  lastAnswered: number; // Timestamp
}

export interface StatsDB {
  [questionId: number]: QuestionStat;
}