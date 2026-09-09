import { useState } from 'react'
import Header from '../components/Header'
import PracticeCard from '../components/PracticeCard'
import Exam from './Exam'
import Results from './Results'
import { questions } from '../data/questions'

// --------------------------------
// Practice Selection Data
// Provides the available years,
// subjects, and topics.
// --------------------------------
import {
  practiceYears,
  practiceSubjects,
  practiceTopics,
} from '../data/practiceOptions'

// --------------------------------
// Practice Options
// Contains the practice choices
// shown on the homepage.
// --------------------------------
const practiceOptions = [
  {
    title: 'Practice by Year',
    description: 'Practice previous JAMB questions year by year.',
  },
  {
    title: 'Practice by Subject',
    description:
      'Focus on a specific JAMB subject and improve your performance.',
  },
  {
    title: 'Practice by Topic',
    description:
      'Target specific topics where you need more practice.',
  },
]

// --------------------------------
// Home Page
// --------------------------------
function Home() {

  // --------------------------------
  // Exam Started State
  // Controls whether the Exam page
  // should be displayed.
// --------------------------------
  const [isExamStarted, setIsExamStarted] = useState(false)

  // --------------------------------
  // Practice Mode State
  // Stores the practice option selected
  // by the student.
// --------------------------------
  const [practiceMode, setPracticeMode] = useState<string | null>(null)

  // --------------------------------
// Practice Selection State
// Stores the specific year, subject,
// or topic selected by the student.
// --------------------------------
const [practiceSelection, setPracticeSelection] = useState<
  string | number | null
>(null)

  // --------------------------------
  // Practice Questions State
  // Stores the questions selected for
  // the current practice session.
// --------------------------------
  const [practiceQuestions, setPracticeQuestions] = useState(questions)

  // --------------------------------
  // Exam Answers
  // Stores answers received from Exam.
// --------------------------------
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({})

  // --------------------------------
  // Exam Completion State
  // Tells Home whether the exam
  // has finished.
// --------------------------------
  const [isExamFinished, setIsExamFinished] = useState(false)

  // --------------------------------
  // Calculate Exam Score
  // Counts questions answered correctly.
// --------------------------------
  const score = practiceQuestions.reduce((total, question) => {
    if (examAnswers[question.id] === question.correctAnswer) {
      return total + 1
    }

    return total
  }, 0)

  // --------------------------------
  // Calculate Unanswered Questions
  // Counts questions the student skipped.
// --------------------------------
  const unansweredQuestions = practiceQuestions.reduce((total, question) => {
    if (!examAnswers[question.id]) {
      return total + 1
    }

    return total
  }, 0)

  // --------------------------------
  // Calculate Incorrect Answers
  // Everything answered that was not correct.
// --------------------------------
  const incorrectAnswers =
    practiceQuestions.length - score - unansweredQuestions

  // --------------------------------
  // Show Results
  // --------------------------------
  if (isExamFinished) {
    return (
      <Results
        score={score}
        totalQuestions={practiceQuestions.length}
        incorrectAnswers={incorrectAnswers}
        unansweredQuestions={unansweredQuestions}
        answers={examAnswers}
        onRestart={() => {
          setExamAnswers({})
          setIsExamFinished(false)
          setIsExamStarted(false)
          setPracticeMode(null)
          setPracticeQuestions(questions)
        }}
      />
    )
  }

  // --------------------------------
  // Show Exam
  // Passes the selected questions
  // into the Exam component.
// --------------------------------
  if (isExamStarted) {
    return (
      <Exam
        questions={practiceQuestions}
        onFinish={(answers) => {
          setExamAnswers(answers)
          setIsExamFinished(true)
        }}
      />
    )
  }

// --------------------------------
// Practice Mode Screen
// Displays the available choices
// for the selected practice mode.
// --------------------------------
if (practiceMode) {
  let practiceChoices: (string | number)[] = []

  // --------------------------------
  // Select choices for Practice by Year
  // --------------------------------
  if (practiceMode === 'Practice by Year') {
    practiceChoices = practiceYears
  }

  // --------------------------------
  // Select choices for Practice by Subject
  // --------------------------------
  if (practiceMode === 'Practice by Subject') {
    practiceChoices = practiceSubjects
  }

  // --------------------------------
  // Select choices for Practice by Topic
  // --------------------------------
  if (practiceMode === 'Practice by Topic') {
    practiceChoices = practiceTopics
  }

  // --------------------------------
  // Filter Questions
  // Finds questions matching the
  // student's selected choice.
  // --------------------------------
  const selectedQuestions = questions.filter((question) => {
    if (practiceMode === 'Practice by Year') {
      return question.year === practiceSelection
    }

    if (practiceMode === 'Practice by Subject') {
      return question.subject === practiceSelection
    }

    if (practiceMode === 'Practice by Topic') {
      return question.topic === practiceSelection
    }

    return false
  })

  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="mx-auto max-w-4xl px-4 py-6">

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          {/* Practice Mode Heading */}
          <h1 className="text-2xl font-bold text-slate-900">
            {practiceMode}
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose an option to continue.
          </p>

          {/* Practice Choices */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {practiceChoices.map((choice) => (
              <button
                key={choice}
                onClick={() => setPracticeSelection(choice)}
                className={`rounded-xl border p-4 text-left font-semibold transition ${
                  practiceSelection === choice
                    ? 'border-slate-900 bg-slate-100 text-slate-900'
                    : 'border-slate-200 text-slate-900 hover:bg-slate-50'
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {/* Practice Information */}
          {practiceSelection !== null && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">

              {/* Selected Practice */}
              <h2 className="text-lg font-bold text-slate-900">
                {practiceSelection}
              </h2>

              {/* Available Questions */}
              <p className="mt-2 text-sm text-slate-600">
                {selectedQuestions.length === 1
                  ? '1 question available'
                  : `${selectedQuestions.length} questions available`}
              </p>

              {/* Start Practice */}
              {selectedQuestions.length > 0 && (
                <button
                  onClick={() => {
                    setPracticeQuestions(selectedQuestions)
                    setIsExamStarted(true)
                  }}
                  className="mt-5 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Start Practice
                </button>
              )}

              {/* No Questions Message */}
              {selectedQuestions.length === 0 && (
                <p className="mt-4 text-sm font-medium text-slate-500">
                  No questions are currently available for this selection.
                </p>
              )}

            </div>
          )}

          {/* Back to Practice Options */}
          <button
            onClick={() => {
              setPracticeMode(null)
              setPracticeSelection(null)
            }}
            className="mt-6 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back to Practice Options
          </button>

        </div>

      </main>

    </div>
  )
}

  // --------------------------------
  // Show Homepage
  // --------------------------------
  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <main className="px-4 py-12">

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Prepare Smarter for JAMB
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Practice with realistic JAMB CBT questions, track your performance,
            and build confidence before examination day.
          </p>

          {/* --------------------------------
              Start Exam Button
          -------------------------------- */}
          <button
            onClick={() => {
              setPracticeQuestions(questions)
              setIsExamStarted(true)
            }}
            className="mt-8 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Start JAMB CBT Exam
          </button>

          {/* --------------------------------
              Practice Options
          -------------------------------- */}
          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">

            {practiceOptions.map((option) => (
              <PracticeCard
                key={option.title}
                title={option.title}
                description={option.description}
                onExplore={() => {
                  setPracticeMode(option.title)
                  setPracticeSelection(null)
                }}
              />
            ))}

          </div>

        </div>

      </main>

    </div>
  )
}

export default Home