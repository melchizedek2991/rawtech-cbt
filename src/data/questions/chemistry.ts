// --------------------------------
// Chemistry Questions
// --------------------------------

import type { Question } from '../../types/question'

// --------------------------------
// Chemistry Question Collection
// --------------------------------
export const chemistryQuestions: Question[] = [
  {
    id: '9',
    year: 2025,
    subject: 'Chemistry',
    topic: 'Atoms',
    question: 'What is the smallest unit of an element that retains its chemical properties?',
    options: [
      { label: 'A', text: 'Molecule' },
      { label: 'B', text: 'Atom' },
      { label: 'C', text: 'Cell' },
      { label: 'D', text: 'Compound' },
    ],
    correctAnswer: 'B',
    explanation:
      'An atom is the smallest unit of an element that retains the chemical properties of that element.',
  },
]