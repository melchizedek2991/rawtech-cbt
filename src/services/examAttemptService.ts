// --------------------------------
// Exam Attempt Service
// Responsible for saving and
// retrieving completed exam attempts.
// --------------------------------

import type { ExamAttempt } from '../../shared/examAttempt'

// --------------------------------
// Storage Key
// This is the name we will use
// inside the browser's localStorage.
// --------------------------------
const STORAGE_KEY = 'rawtech_exam_attempts'

// --------------------------------
// Save Exam Attempt
// Adds a completed attempt to the
// existing list of saved attempts.
// --------------------------------
export function saveExamAttempt(attempt: ExamAttempt): void {
  const existingAttempts = getExamAttempts()

  const updatedAttempts = [
    ...existingAttempts,
    attempt,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedAttempts)
  )
}

// --------------------------------
// Get Exam Attempts
// Retrieves all saved exam attempts.
// --------------------------------
export function getExamAttempts(): ExamAttempt[] {
  const storedAttempts = localStorage.getItem(STORAGE_KEY)

  if (!storedAttempts) {
    return []
  }

  return JSON.parse(storedAttempts)
}