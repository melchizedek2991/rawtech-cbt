// --------------------------------
// Physics Questions
// --------------------------------

import type { Question } from '../../types/question'

export const physicsQuestions: Question[] = [
  {
    id: 3,
    year: 2025,
    subject: 'Physics',
    topic: 'Motion',
    question: 'What is the SI unit of speed?',
    options: [
      { label: 'A', text: 'Kilometre' },
      { label: 'B', text: 'Hour' },
      { label: 'C', text: 'Metre per second' },
      { label: 'D', text: 'Metre' },
    ],
    correctAnswer: 'C',
    explanation: 'Speed is measured in metres per second (m/s) in the SI system.',
  },
]