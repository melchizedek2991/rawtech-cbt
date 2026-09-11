// --------------------------------
// Mathematics Question Database
// Combines all Mathematics topics.
// --------------------------------

import { algebraQuestions } from './mathematics/algebra'
import { geometryQuestions } from './mathematics/geometry'
import { numberSystemQuestions } from './mathematics/numberSystem'
import { statisticsQuestions } from './mathematics/statistics'
import { fractionsQuestions } from './mathematics/fractions'
import { trigonometryQuestions } from './mathematics/trigonometry'
// --------------------------------
// All Mathematics Questions
// --------------------------------
export const mathematicsQuestions = [
  ...algebraQuestions,
  ...geometryQuestions,
  ...numberSystemQuestions,
  ...statisticsQuestions,
  ...fractionsQuestions,
  ...trigonometryQuestions,
]