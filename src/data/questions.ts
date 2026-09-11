// --------------------------------
// Question Database
// Combines questions from all
// subject-specific question files.
// --------------------------------

import { mathematicsQuestions } from './questions/mathematics'
import { englishQuestions } from './questions/english'
import { physicsQuestions } from './questions/physics'
import { chemistryQuestions } from './questions/chemistry'

// --------------------------------
// All Questions
// This is the main question collection
// used by the rest of the application.
// --------------------------------
export const questions = [
  ...mathematicsQuestions,
  ...englishQuestions,
  ...physicsQuestions,
  ...chemistryQuestions,
]