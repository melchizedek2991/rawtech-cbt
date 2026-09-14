// Import the function that converts
// ALOC questions into RawTech questions.
import { mapALOCQuestion } from './questionMapper'
import type { Question } from '../../shared/question'

// Fetch questions from the ALOC API
export async function fetchALOCQuestions(
  subject: string = 'mathematics',
  year?: number,
  topic?: string,
  cursor?: string,
  limit: number = 10,
  requiredAmount: number = 10
) {

  // Store only questions that match
  // the filters requested by our application.
  const matchingQuestions: Question[] = []

  // Keep track of the current pagination cursor.
  let currentCursor = cursor

  // Keep requesting batches while
  // we still need more matching questions.
  let hasMore = true

  while (
    matchingQuestions.length < requiredAmount &&
    hasMore
  ) {

    // Build the ALOC API URL.
    const url =
      `https://dev.aloc.com.ng/api/v1/questions` +
      `?subject=${encodeURIComponent(subject)}` +
      `&examType=jamb` +
      `${currentCursor ? `&cursor=${encodeURIComponent(currentCursor)}` : ''}` +
      `&limit=${limit}`

    // Send the request to ALOC.
    const response = await fetch(url, {
      headers: {
        'X-API-Key': process.env.ALOC_API_KEY ?? ''
      }
    })

    // Check whether ALOC accepted the request.
    if (!response.ok) {
      const errorBody = await response.text()

      throw new Error(
        `ALOC request failed: ${response.status} ${response.statusText} - ${errorBody}`
      )
    }

    // Convert the ALOC response from JSON
    // into a JavaScript object.
    const data = await response.json()

    // Convert this batch into
    // the RawTech Question format.
    const questions = data.data.map(mapALOCQuestion)

    // --------------------------------
    // Filter questions by year
    // --------------------------------

    const filteredQuestions: Question[] = year
    ? questions.filter((question: Question) => question.year === year)
    : questions

    // Add only matching questions
    // to our final collection.
    matchingQuestions.push(...filteredQuestions)

    // Get ALOC's pagination information.
    hasMore = data.pagination?.hasMore ?? false

    // Store the cursor needed
    // for the next batch.
    currentCursor = data.pagination?.nextCursor
  }

  // Return only the requested number
  // of matching questions.
  return {
    questions: matchingQuestions.slice(0, requiredAmount)
  }
}