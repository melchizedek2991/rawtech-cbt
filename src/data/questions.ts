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

  {
    id: 2,
    year: 2025,
    subject: 'English Language',
    topic: 'Vocabulary',
    question: 'Choose the word that is closest in meaning to "rapid".',
    options: [
      { label: 'A', text: 'Slow' },
      { label: 'B', text: 'Quick' },
      { label: 'C', text: 'Weak' },
      { label: 'D', text: 'Late' },
    ],
    correctAnswer: 'B',
    explanation: '"Rapid" means happening very quickly. Therefore, "quick" is the closest in meaning.',
  },

  {
    id: 3,
    year: 2025,
    subject: 'Physics',
    topic: 'Motion',
    question: 'What is the SI unit of speed?',
    options: [
      { label: 'A', text: 'Newton' },
      { label: 'B', text: 'Joule' },
      { label: 'C', text: 'Metre per second' },
      { label: 'D', text: 'Watt' },
    ],
    correctAnswer: 'C',
    explanation: 'The SI unit of speed is metre per second (m/s).',
  },
]
