// --------------------------------
// Practice Selection Data
// Builds available years, subjects,
// and topics directly from the questions.
// --------------------------------

import { questions } from './questions'

// --------------------------------
// Practice Years
// Gets unique years from the questions.
// --------------------------------
export const practiceYears = [
  ...new Set(questions.map((question) => question.year)),
]

// --------------------------------
// Practice Subjects
// Gets unique subjects from the questions.
// --------------------------------
export const practiceSubjects = [
  ...new Set(questions.map((question) => question.subject)),
]

// --------------------------------
// Practice Topics
// Gets unique topics from the questions.
// --------------------------------
export const practiceTopics = [
  ...new Set(questions.map((question) => question.topic)),
]