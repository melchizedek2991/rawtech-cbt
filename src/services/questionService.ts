// --------------------------------
// Question Service
// Responsible for getting questions
// for the React application.
// --------------------------------

import type { Question } from '../../shared/question'
import { questions as localQuestions } from '../data/questions'

// Use the deployed backend URL in production,
// or the local Vite proxy path during development.
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// --------------------------------
// Get Questions
// Tries to get questions from our
// backend first.
//
// If the backend cannot be reached,
// local questions are returned instead.
// --------------------------------
export async function getQuestions(): Promise<Question[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/questions?subject=mathematics`)

    if (!response.ok) {
      throw new Error('Unable to fetch questions from the backend')
    }

    const data = await response.json()

    return data.questions
  } catch (error) {
    console.log('Using local questions:', error)

    return localQuestions
  }
}