// --------------------------------
// History Page
// Displays previous completed
// exam attempts and performance.
// --------------------------------

import { useState } from 'react'

import type { ExamAttempt } from '../../shared/examAttempt'

import { getExamAttempts } from '../services/examAttemptService'

import {
  calculatePerformance,
  calculateSubjectPerformance,
  calculateTopicPerformance,
  calculateWeakAreas,
  type PerformanceSummary,
  type SubjectPerformance,
  type TopicPerformance,
  type WeakArea,
} from '../services/performanceService'

// --------------------------------
// History Component
// --------------------------------
function History() {
  const [attempts] = useState<ExamAttempt[]>(() => {
    return getExamAttempts()
  })

  // --------------------------------
  // Calculate Overall Performance
  // --------------------------------
  const performance: PerformanceSummary =
    calculatePerformance(attempts)

  // --------------------------------
  // Calculate Subject Performance
  // --------------------------------
  const subjectPerformance: SubjectPerformance[] =
    calculateSubjectPerformance(attempts)

  // --------------------------------
  // Calculate Topic Performance
  // --------------------------------
  const topicPerformance: TopicPerformance[] =
    calculateTopicPerformance(attempts)

  // --------------------------------
  // Calculate Weak Areas
  // --------------------------------
  const weakAreas: WeakArea[] =
    calculateWeakAreas(topicPerformance)

  return (
    <main>
      {/* --------------------------------
          Page Heading
          -------------------------------- */}
      <h1>Exam History</h1>

      {/* --------------------------------
          Performance Summary
          -------------------------------- */}
      <section>
        <h2>Performance Summary</h2>

        <p>
          Total Attempts: {performance.totalAttempts}
        </p>

        <p>
          Average Score: {performance.averageScore.toFixed(1)}
        </p>

        <p>
          Best Score: {performance.bestScore}
        </p>

        <p>
          Total Questions: {performance.totalQuestions}
        </p>

        <p>
          Correct Answers: {performance.totalCorrectAnswers}
        </p>

        <p>
          Incorrect Answers: {performance.totalIncorrectAnswers}
        </p>

        <p>
          Unanswered Questions:{' '}
          {performance.totalUnansweredQuestions}
        </p>

        <p>
          Accuracy: {performance.accuracy.toFixed(1)}%
        </p>
      </section>

      {/* --------------------------------
          Subject Performance
          -------------------------------- */}
      {subjectPerformance.length > 0 && (
        <section>
          <h2>Performance by Subject</h2>

          {subjectPerformance.map((subject) => (
            <article key={subject.subject}>
              <h3>{subject.subject}</h3>

              <p>
                Questions: {subject.totalQuestions}
              </p>

              <p>
                Correct: {subject.correctAnswers}
              </p>

              <p>
                Incorrect: {subject.incorrectAnswers}
              </p>

              <p>
                Unanswered: {subject.unansweredQuestions}
              </p>

              <p>
                Accuracy: {subject.accuracy.toFixed(1)}%
              </p>
            </article>
          ))}
        </section>
      )}

      {/* --------------------------------
          Topic Performance
          -------------------------------- */}
      {topicPerformance.length > 0 && (
        <section>
          <h2>Performance by Topic</h2>

          {topicPerformance.map((topic) => (
            <article
              key={`${topic.subject}-${topic.topic}`}
            >
              <h3>
                {topic.subject} — {topic.topic}
              </h3>

              <p>
                Questions: {topic.totalQuestions}
              </p>

              <p>
                Correct: {topic.correctAnswers}
              </p>

              <p>
                Incorrect: {topic.incorrectAnswers}
              </p>

              <p>
                Unanswered: {topic.unansweredQuestions}
              </p>

              <p>
                Accuracy: {topic.accuracy.toFixed(1)}%
              </p>
            </article>
          ))}
        </section>
      )}

      {/* --------------------------------
          Weak Areas
          -------------------------------- */}
      {weakAreas.length > 0 && (
        <section>
          <h2>Weak Areas</h2>

          {weakAreas.map((area) => (
            <article
              key={`${area.subject}-${area.topic}`}
            >
              <h3>
                {area.subject} — {area.topic}
              </h3>

              <p>
                Accuracy: {area.accuracy.toFixed(1)}%
              </p>

              <p>
                Questions Attempted: {area.totalQuestions}
              </p>

              <p>
                Correct: {area.correctAnswers}
              </p>
            </article>
          ))}
        </section>
      )}

      {/* --------------------------------
          Empty State
          -------------------------------- */}
      {attempts.length === 0 && (
        <p>No exam attempts yet.</p>
      )}

      {/* --------------------------------
          Attempt List
          -------------------------------- */}
      {attempts.map((attempt) => {
        const percentage = Math.round(
          (attempt.score / attempt.totalQuestions) * 100
        )

        return (
          <article key={attempt.id}>
            <h2>Practice Exam</h2>

            <p>
              Score: {attempt.score}/{attempt.totalQuestions}
            </p>

            <p>
              Percentage: {percentage}%
            </p>

            <p>
              Incorrect: {attempt.incorrectAnswers}
            </p>

            <p>
              Unanswered: {attempt.unansweredQuestions}
            </p>

            <p>
              Date: {new Date(attempt.date).toLocaleString()}
            </p>
          </article>
        )
      })}
    </main>
  )
}

export default History