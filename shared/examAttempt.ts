// --------------------------------
// Exam Attempt Type
// Represents one completed CBT attempt.
// --------------------------------
export type ExamAttempt = {
  id: string
  date: string
  totalQuestions: number
  score: number
  incorrectAnswers: number
  unansweredQuestions: number
  answers: Record<string, string>
}