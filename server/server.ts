// Load environment variables from the .env file
import 'dotenv/config'

// Import Express so we can create our backend server
import express from 'express'

// Import the questions router
import questionsRouter from './routes/questions'

// Create the Express application
const app = express()

// Define the port where our backend server will run
const PORT = process.env.PORT || 3000

// Health-check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok'
  })
})

// Connect the questions router to the /api path
app.use('/api', questionsRouter)

// Start the backend server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})