// Import the function that fetches questions from ALOC
import { fetchALOCQuestions } from '../services/alocApi'

// Import Express Router so we can create question-related routes
import { Router } from 'express'

// Create a router for question-related endpoints
const router = Router()

router.get('/questions', async (req, res) => {
  // Get the subject from the URL query
  const subject =
    typeof req.query.subject === 'string'
      ? req.query.subject
      : 'mathematics'

  // Get the year from the URL query
  const year =
    typeof req.query.year === 'string'
      ? Number(req.query.year)
      : undefined

  // Get the topic from the URL query
  const topic =
    typeof req.query.topic === 'string'
      ? req.query.topic
      : undefined

  // Get the pagination cursor from the URL query
  const cursor =
    typeof req.query.cursor === 'string'
      ? req.query.cursor
      : undefined

  // Fetch questions for the requested subject
  const data = await fetchALOCQuestions(
    subject, 
    year, 
    topic,
    cursor,
  )

  res.json(data)
})

// Export the router so server.ts can use it
export default router