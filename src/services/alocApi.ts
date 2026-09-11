// Import the type that describes ALOC's complete API response
import type { ALOCQuestionsResponse } from '../types/aloc'

// Fetch Mathematics questions from the ALOC API
export async function fetchALOCQuestions(): Promise<ALOCQuestionsResponse> {
  const response = await fetch(
    'https://dev.aloc.com.ng/api/v1/questions?subject=mathematics'
  )

  // Stop if ALOC does not return a successful response
  if (!response.ok) {
    throw new Error('Failed to fetch questions from ALOC')
  }

  // Convert the JSON response into a JavaScript object
  const data: ALOCQuestionsResponse = await response.json()

  return data
}