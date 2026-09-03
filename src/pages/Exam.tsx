import { useState } from 'react'
import { questions } from '../data/questions'

// --------------------------------
// Exam Page
// --------------------------------
function Exam() {
 
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
  // --------------------------------
  const currentQuestion = questions[currentQuestionIndex]

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
              onClick={() => setSelectedAnswer(option.label)}
              className={`w-full rounded-xl border p-4 text-left ${
                selectedAnswer === option.label
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
                      : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default Exam
