
export interface Question {
  id: number;
  topic: string;
  questionText: string;
  codeSnippet?: string;
  // Ho rimosso image_url (quello col trattino) per pulizia
  imageUrl?: string; 
  options: {
    id: string;
    text: string;
    imageUrl?: string; // <--- QUESTA È LA RIGA MAGICA CHE MANCA!
  }[];
  correctAnswerId: string | string[];
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
