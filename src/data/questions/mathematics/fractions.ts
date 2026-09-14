// --------------------------------
// Mathematics — Fractions Questions
// --------------------------------

import type { Question } from '../../../types/question'

// --------------------------------
// Fractions Questions
// --------------------------------
export const fractionsQuestions: Question[] = [
  {
    id: '7',
    year: 2025,
    subject: 'Mathematics',
    topic: 'Fractions',
    question: 'What is 1/2 + 1/4?',
    options: [
      { label: 'A', text: '1/4' },
      { label: 'B', text: '1/2' },
      { label: 'C', text: '3/4' },
      { label: 'D', text: '1' },
    ],
    correctAnswer: 'C',
    explanation: 'Convert 1/2 to 2/4. Therefore, 2/4 + 1/4 = 3/4.',
  },
]