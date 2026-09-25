// --------------------------------
// Exam Attempt Types
// Defines the information we keep
// about a completed exam.
// --------------------------------

import type { Question } from './question'

// --------------------------------
// Exam Attempt
// --------------------------------
export type ExamAttempt = {
  id: string
  date: string
  totalQuestions: number
  score: number
  incorrectAnswers: number
  unansweredQuestions: number
  answers: Record<string, string>

  // Questions used in this particular
  // exam attempt.
  questions: Question[]
}