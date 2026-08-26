import type { Question } from '../types/question'

export const questions: Question[] = [
  {
    id: 1,
    year: 2025,
    subject: 'Mathematics',
    topic: 'Algebra',
    question: 'If 2x = 10, what is the value of x?',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '5' },
      { label: 'C', text: '8' },
      { label: 'D', text: '10' },
    ],
    correctAnswer: 'B',
    explanation: 'Divide both sides of the equation by 2. Therefore, x = 5.',
  },
]