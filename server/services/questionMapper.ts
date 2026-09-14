// --------------------------------
// RawTech Question Type
// Describes the structure our
// application expects.
// --------------------------------
import type { Question } from '../../shared/question'

// --------------------------------
// ALOC Question Type
// Describes the question structure
// returned by the ALOC API.
// --------------------------------
type ALOCQuestion = {
  id: string
  text: string
  options: Record<string, string>
  correctAnswer: string
  subject: string
  year: number
  metadata?: {
    topic?: string
    explanation?: string
  }
}

// --------------------------------
// Question Mapper
// Converts an ALOC question into
// the RawTech Question format.
// --------------------------------
export function mapALOCQuestion(
  alocQuestion: ALOCQuestion
): Question {
  return {
    id: alocQuestion.id,
    year: alocQuestion.year,
    subject: alocQuestion.subject,
    topic: alocQuestion.metadata?.topic ?? '',
    question: alocQuestion.text,

    // Convert ALOC's options object into
    // RawTech's options array.
    options: Object.entries(alocQuestion.options).map(
      ([label, text]) => ({
        label,
        text,
      })
    ),

    correctAnswer: alocQuestion.correctAnswer,

    // Use ALOC's explanation when available.
    // Otherwise, leave it empty for now.
    explanation: alocQuestion.metadata?.explanation ?? '',
  }
}