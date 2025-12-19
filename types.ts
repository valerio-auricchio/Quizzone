
export interface Question {
  id: number;
  topic: string;
  questionText: string;
  codeSnippet?: string;
  image_url?: string;
  imageUrl?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswerId: string | string[]; // Can be a single ID or an array of IDs
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
