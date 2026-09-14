import { useEffect, useState } from 'react'
// --------------------------------
// Question Type
// Describes the structure of each
// question received by the exam.
// --------------------------------
import type { Question } from '../types/question'

// --------------------------------
// Exam Header Component
// Displays the exam title and timer.
// --------------------------------
import ExamHeader from '../components/exam/ExamHeader'

// --------------------------------
// Question Navigator Component
// Allows the student to jump between
// exam questions.
// --------------------------------
import QuestionNavigator from '../components/exam/QuestionNavigator'

// --------------------------------
// Exam Navigation Component
// Handles Previous, Next, and
// Finish Exam navigation.
// --------------------------------
import ExamNavigation from '../components/exam/ExamNavigation'

// --------------------------------
// Submit Confirmation Component
// Handles manual exam submission.
// --------------------------------
import SubmitConfirmation from '../components/exam/SubmitConfirmation'

// --------------------------------
// Exam Props
// Receives the questions that the
// student selected for this exam.
// --------------------------------
type ExamProps = {
  questions: Question[]
  onFinish: (answers: Record<string, string>) => void
}


function Exam({ questions, onFinish }: ExamProps) {

// --------------------------------
// Answers State
// Stores the student's answer for each question
// --------------------------------
const [answers, setAnswers] = useState<Record<string, string>>({})

// --------------------------------
// Current Question State
// Stores the position of the question
// currently being displayed
// --------------------------------
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

// --------------------------------
// Timer State
// Stores the remaining exam time
// in seconds
// --------------------------------
const [timeRemaining, setTimeRemaining] = useState(1800)

// --------------------------------
// Submit Confirmation State
// Controls whether the student sees
// the exam submission confirmation
// --------------------------------
const [isSubmitConfirmationOpen, setIsSubmitConfirmationOpen] = useState(false)

// --------------------------------
// Timer Effect
// Decreases the remaining time
// every second
// --------------------------------
useEffect(() => {
  const timer = setInterval(() => {
    setTimeRemaining((previousTime) => {
      if (previousTime <= 1) {
        return 0
      }

      return previousTime - 1
    })
  }, 1000)

  return () => {
    clearInterval(timer)
  }
}, [])

// --------------------------------
// Automatic Exam Completion
// Finishes the exam when the timer
// reaches zero
// --------------------------------
useEffect(() => {
  if (timeRemaining === 0) {
    onFinish(answers)
  }
}, [timeRemaining, answers, onFinish])
  
// --------------------------------
// Current Question
// Gets the question currently being displayed
// --------------------------------
const currentQuestion = questions[currentQuestionIndex]

// --------------------------------
// Current Answer
// Gets the answer saved for the current question
// --------------------------------
const currentAnswer = answers[currentQuestion.id]

// --------------------------------
// Timer Display
// Converts remaining seconds into
// minutes and seconds for the UI
// --------------------------------
const minutes = Math.floor(timeRemaining / 60)
const seconds = timeRemaining % 60

  // --------------------------------
  // Answer Handler
  // Saves the student's answer
  // for the current question
  // --------------------------------
  const handleAnswer = (answer: string) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: answer,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-100">
	{/* --------------------------------
          Exam Header Component
          Receives timer and question
          information from Exam.tsx
      -------------------------------- */}
      <ExamHeader
        minutes={minutes}
        seconds={seconds}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
      {/* --------------------------------
          Exam Content
      -------------------------------- */}
      <main className="mx-auto max-w-4xl px-4 py-6">

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <p className="text-sm font-medium text-slate-500">
             {currentQuestion.subject}
          </p>

          <h2 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
            {currentQuestion.question}
          </h2>

          {/* --------------------------------
            Answer Options
        -------------------------------- */}
        <div className="mt-6 space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleAnswer(option.label)}
              className={`w-full rounded-xl border p-4 text-left ${
                currentAnswer === option.label
                  ? 'border-slate-900 bg-slate-100'
                  : 'border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="font-semibold text-slate-900">
                {option.label}.
              </span>

              <span className="ml-2 text-slate-700">
                {option.text}
              </span>
            </button>
          ))}
        </div>


{/* --------------------------------
    Question Navigator Component
-------------------------------- */}
<QuestionNavigator
  questions={questions}
  answers={answers}
  currentQuestionIndex={currentQuestionIndex}
  onQuestionSelect={(index) => setCurrentQuestionIndex(index)}
/>

     
{/*------------------------------
Exam Navigation Component
--------------------------------*/}
<ExamNavigation
  currentQuestionIndex={currentQuestionIndex}
  totalQuestions={questions.length}
  onPrevious={() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }}
  onNext={() => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }}
  onFinish={() => {
    // --------------------------------
    // Open Submit Confirmation
    // Instead of submitting immediately
    // --------------------------------
    setIsSubmitConfirmationOpen(true)
  }}
/>

  
{/* --------------------------------
Submit Confirmation Component
--------------------------------*/}
{isSubmitConfirmationOpen && (
  <SubmitConfirmation
    onCancel={() => setIsSubmitConfirmationOpen(false)}
    onConfirm={() => onFinish(answers)}
  />
)}

</div>

      </main>

    </div>
  )
}

export default Exam
