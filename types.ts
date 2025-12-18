
export interface Question {
  id: number;
  topic: string;
  questionText: string;
  codeSnippet?: string;
  image_url?: string; // Standardized snake_case
  imageUrl?: string;  // Added for compatibility with user structure
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
