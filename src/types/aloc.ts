// Describes one question returned by the ALOC API
export type ALOCQuestion = {
  id: string
  text: string

  options: {
    A: string
    B: string
    C: string
    D: string
  }

  correctAnswer: string

  examType: string
  subject: string
  year: number

  educationLevel: string
  classLevel: string
  section: string

  imageUrl: string

  questionNumber: number
  country: string
  category: string
  institution: string
  state: string

  provenance: {
    contentSource: string
    licenseType: string
    isLicensed: boolean
    validationScore: number | null
    generatorVersion: string
    batchRequestId: string
    reviewStatus: string
    curriculumMapping: string
    isGapFill: boolean
  }

  metadata: {
    topic: string
    subtopic: string
    difficultyScore: number
    estimatedTime: number
    tags: string[]
    learningObjectives: string[]
    curriculumAlignment: string
    classificationConfidence: number
    needsReview: boolean
  }
}

// Describes the complete response returned by the ALOC Questions API
export type ALOCQuestionsResponse = {
  data: ALOCQuestion[]

  pagination: {
    nextCursor: string | null
    hasMore: boolean
  }

  meta: {
    creditsUsed: number
    tier: string
  }
}