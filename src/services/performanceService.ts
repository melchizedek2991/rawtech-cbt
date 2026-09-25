// --------------------------------
// Performance Service
// Calculates performance statistics
// from completed exam attempts.
// --------------------------------

import type { ExamAttempt } from '../../shared/examAttempt'

// --------------------------------
// Performance Summary
// --------------------------------
export type PerformanceSummary = {
  totalAttempts: number
  averageScore: number
  bestScore: number
  totalQuestions: number
  totalCorrectAnswers: number
  totalIncorrectAnswers: number
  totalUnansweredQuestions: number
  accuracy: number
}

// --------------------------------
// Subject Performance
// --------------------------------
export type SubjectPerformance = {
  subject: string
  totalQuestions: number
  correctAnswers: number
  incorrectAnswers: number
  unansweredQuestions: number
  accuracy: number
}

// --------------------------------
// Topic Performance
// --------------------------------
export type TopicPerformance = {
  subject: string
  topic: string
  totalQuestions: number
  correctAnswers: number
  incorrectAnswers: number
  unansweredQuestions: number
  accuracy: number
}

// --------------------------------
// Weak Area
// Represents a topic where the
// student's accuracy is below
// the chosen threshold.
// --------------------------------
export type WeakArea = {
  subject: string
  topic: string
  accuracy: number
  totalQuestions: number
  correctAnswers: number
}

// --------------------------------
// Calculate Overall Performance
// --------------------------------
export function calculatePerformance(
  attempts: ExamAttempt[]
): PerformanceSummary {
  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      averageScore: 0,
      bestScore: 0,
      totalQuestions: 0,
      totalCorrectAnswers: 0,
      totalIncorrectAnswers: 0,
      totalUnansweredQuestions: 0,
      accuracy: 0,
    }
  }

  const totalAttempts = attempts.length

  const totalQuestions = attempts.reduce(
    (total, attempt) => total + attempt.totalQuestions,
    0
  )

  const totalCorrectAnswers = attempts.reduce(
    (total, attempt) => total + attempt.score,
    0
  )

  const totalIncorrectAnswers = attempts.reduce(
    (total, attempt) => total + attempt.incorrectAnswers,
    0
  )

  const totalUnansweredQuestions = attempts.reduce(
    (total, attempt) => total + attempt.unansweredQuestions,
    0
  )

  const averageScore =
    totalCorrectAnswers / totalAttempts

  const bestScore = Math.max(
    ...attempts.map((attempt) => attempt.score)
  )

  const accuracy =
    totalQuestions === 0
      ? 0
      : (totalCorrectAnswers / totalQuestions) * 100

  return {
    totalAttempts,
    averageScore,
    bestScore,
    totalQuestions,
    totalCorrectAnswers,
    totalIncorrectAnswers,
    totalUnansweredQuestions,
    accuracy,
  }
}

// --------------------------------
// Calculate Subject Performance
// Groups completed questions by
// subject across all exam attempts.
// --------------------------------
export function calculateSubjectPerformance(
  attempts: ExamAttempt[]
): SubjectPerformance[] {
  const subjects: Record<
    string,
    {
      totalQuestions: number
      correctAnswers: number
      incorrectAnswers: number
      unansweredQuestions: number
    }
  > = {}

  // --------------------------------
  // Process every exam attempt.
  // --------------------------------
  attempts.forEach((attempt) => {
    // Older attempts may not contain
    // the questions property.
    if (!attempt.questions) {
      return
    }

    attempt.questions.forEach((question) => {
      const subject = question.subject

      if (!subjects[subject]) {
        subjects[subject] = {
          totalQuestions: 0,
          correctAnswers: 0,
          incorrectAnswers: 0,
          unansweredQuestions: 0,
        }
      }

      subjects[subject].totalQuestions += 1

      const answer = attempt.answers[question.id]

      if (!answer) {
        subjects[subject].unansweredQuestions += 1
      } else if (answer === question.correctAnswer) {
        subjects[subject].correctAnswers += 1
      } else {
        subjects[subject].incorrectAnswers += 1
      }
    })
  })

  // --------------------------------
  // Convert the object into an array
  // that the UI can display.
  // --------------------------------
  return Object.entries(subjects).map(
    ([subject, data]) => ({
      subject,
      totalQuestions: data.totalQuestions,
      correctAnswers: data.correctAnswers,
      incorrectAnswers: data.incorrectAnswers,
      unansweredQuestions: data.unansweredQuestions,
      accuracy:
        data.totalQuestions === 0
          ? 0
          : (data.correctAnswers / data.totalQuestions) * 100,
    })
  )
}

// --------------------------------
// Calculate Topic Performance
// Groups completed questions by
// subject and topic.
// --------------------------------
export function calculateTopicPerformance(
  attempts: ExamAttempt[]
): TopicPerformance[] {
  const topics: Record<
    string,
    {
      subject: string
      topic: string
      totalQuestions: number
      correctAnswers: number
      incorrectAnswers: number
      unansweredQuestions: number
    }
  > = {}

  // --------------------------------
  // Process every exam attempt.
  // --------------------------------
  attempts.forEach((attempt) => {
    // Older attempts may not contain
    // the questions property.
    if (!attempt.questions) {
      return
    }

    attempt.questions.forEach((question) => {
      const subject = question.subject
      const topic = question.topic

      // Combine subject and topic to create
      // a unique key for each topic.
      const topicKey = `${subject}::${topic}`

      if (!topics[topicKey]) {
        topics[topicKey] = {
          subject,
          topic,
          totalQuestions: 0,
          correctAnswers: 0,
          incorrectAnswers: 0,
          unansweredQuestions: 0,
        }
      }

      topics[topicKey].totalQuestions += 1

      const answer = attempt.answers[question.id]

      if (!answer) {
        topics[topicKey].unansweredQuestions += 1
      } else if (answer === question.correctAnswer) {
        topics[topicKey].correctAnswers += 1
      } else {
        topics[topicKey].incorrectAnswers += 1
      }
    })
  })

  // --------------------------------
  // Convert the object into an array
  // that the UI can display.
  // --------------------------------
  return Object.values(topics).map((data) => ({
    subject: data.subject,
    topic: data.topic,
    totalQuestions: data.totalQuestions,
    correctAnswers: data.correctAnswers,
    incorrectAnswers: data.incorrectAnswers,
    unansweredQuestions: data.unansweredQuestions,
    accuracy:
      data.totalQuestions === 0
        ? 0
        : (data.correctAnswers / data.totalQuestions) * 100,
  }))
}

// --------------------------------
// Calculate Weak Areas
// Identifies topics where the
// student's accuracy is below
// the selected threshold.
// --------------------------------
export function calculateWeakAreas(
  topicPerformance: TopicPerformance[],
  threshold: number = 50
): WeakArea[] {
  return topicPerformance
    .filter((topic) => topic.accuracy < threshold)
    .map((topic) => ({
      subject: topic.subject,
      topic: topic.topic,
      accuracy: topic.accuracy,
      totalQuestions: topic.totalQuestions,
      correctAnswers: topic.correctAnswers,
    }))
}