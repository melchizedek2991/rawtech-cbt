import { useState } from 'react'
import { questions } from '../data/questions'

// --------------------------------
// Exam Props
// Defines the function Exam receives
// from its parent component
// --------------------------------
type ExamProps = {
  onFinish: (answers: Record<number, string>) => void
}

// --------------------------------
// Exam Page
// --------------------------------
function Exam({ onFinish }: ExamProps) {
 
// --------------------------------
// Answers State
// Stores the student's answer for each question
// --------------------------------
const [answers, setAnswers] = useState<Record<number, string>>({})

  // --------------------------------
  // Current Question State
  // --------------------------------
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  
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
          Exam Header
      -------------------------------- */}
      <header className="border-b border-slate-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold text-slate-900">
            RAWTECH JAMB CBT
          </h1>

          <p className="text-sm font-semibold text-slate-600">
            {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
      </header>


      {/* --------------------------------
          Exam Content
      -------------------------------- */}
      <main className="mx-auto max-w-4xl px-4 py-6">

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <p className="text-sm font-medium text-slate-500">
            Mathematics
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
              Question Navigator
          -------------------------------- */}
          <div className="mt-8 border-t border-slate-200 pt-6">

            <p className="mb-3 text-sm font-semibold text-slate-700">
              Questions
            </p>

            <div className="flex flex-wrap gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`h-10 w-10 rounded-lg text-sm font-semibold ${
                  index === currentQuestionIndex
                    ? 'bg-slate-900 text-white'
                    : answers[question.id]
                      ? 'bg-slate-200 text-slate-700'
                      : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

          </div>

           {/* --------------------------------
              Question Status Legend
          -------------------------------- */}
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500">

          {/* Current */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-900" />
            Current
          </div>

          {/* Answered */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-200" />
            Answered
          </div>

          {/* Unanswered */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-slate-300" />
            Unanswered
          </div>

        </div>
      {/* --------------------------------
        Previous / Next Navigation
      -------------------------------- */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

          {/* Previous Button */}
          <button
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1)
              }
            }}
            disabled={currentQuestionIndex === 0}
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700
              hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {/* Next / Finish Button */}
          <button
            onClick={() => {
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
                return
              }

              // --------------------------------
              // Send Answers Back To Home
              // --------------------------------
              onFinish(answers)
            }}
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white
              hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {currentQuestionIndex === questions.length - 1
              ? 'Finish Exam'
              : 'Next'}
          </button>

        </div>

        </div>

      </main>

    </div>
  )
}

export default Exam
