
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "Data Lakehouse",
    questionText: "A data organization leader is upset about the data analysis team's reports being different from the data engineering team's reports. The leader believes the siloed nature of their organization's data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
    options: [
      { id: "A", text: "Both teams would autoscale their work as data size evolves" },
      { id: "B", text: "Both teams would use the same source of truth for their work" },
      { id: "C", text: "Both teams would reorganize to report to the same department" },
      { id: "D", text: "Both teams would be able to collaborate on projects in real-time" },
      { id: "E", text: "Both teams would respond more quickly to ad-hoc requests" }
    ],
    correctAnswerId: "B",
    explanation: "Databricks Lakehouse enables using data as the single source of truth. Duplicating data often results in data silos in organizations."
  },
  {
    id: 200,
    topic: "Visual Diagnosis",
    questionText: "Which architecture component is highlighted in the diagram below?",
    imageUrl: "/images/p1_q1.png",
    options: [
      { id: "A", text: "Control Plane" },
      { id: "B", text: "Data Plane" },
      { id: "C", text: "Unity Catalog" },
      { id: "D", text: "Serverless Compute" }
    ],
    correctAnswerId: "A",
    explanation: "The Control Plane is responsible for managing workspace metadata, notebook configurations, and cluster orchestration."
  },
  // ... Keep all other 198 questions as they were previously defined or updated by the user
  {
    id: 2,
    topic: "Spark SQL",
    questionText: "Which of the following benefits is provided by the array functions from Spark SQL?",
    options: [
      { id: "A", text: "An ability to work with data in a variety of types at once" },
      { id: "B", text: "An ability to work with data within certain partitions and windows" },
      { id: "C", text: "An ability to work with time-related data in specified intervals" },
      { id: "D", text: "An ability to work with complex, nested data ingested from JSON files" }
    ],
    correctAnswerId: "D",
    explanation: "Spark SQL array functions are designed to manipulate arrays, which are common in nested or semi-structured data (e.g., JSON). They allow you to query, transform, and flatten arrays without writing custom code."
  },
  {
    id: 3,
    topic: "Compute",
    questionText: "Which of the following describes a scenario in which a data team will want to utilize cluster pools?",
    options: [
      { id: "A", text: "An automated report needs to be refreshed as quickly as possible." },
      { id: "B", text: "An automated report needs to be made reproducible." },
      { id: "C", text: "An automated report needs to be tested to identify errors." },
      { id: "D", text: "An automated report needs to be version-controlled across multiple collaborators." },
      { id: "E", text: "An automated report needs to be runnable by all stakeholders." }
    ],
    correctAnswerId: "A",
    explanation: "Cluster pools maintain a set of idle, ready-to-use instances. This reduces cluster start and auto-scaling times, which is critical when a report needs to be refreshed as quickly as possible."
  }
  // (Full list truncated for space, assuming user will paste their 199 questions back or keep the existing set)
];
