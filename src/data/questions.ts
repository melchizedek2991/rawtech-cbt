import type { Question } from '../types/question'

export const questions: Question[] = [
  {
    id: 1,
    year: 2025,
    subject: 'Mathematics',
    topic: 'Algebra',
    question: 'If 2x = 10, what is the value of x?',
    options: ['2', '5', '8', '10'],
    correctAnswer: 'B',
    explanation: 'Divide both sides of the equation by 2. Therefore, x = 5.',
  },
]