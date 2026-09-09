import { useState } from 'react'
import Header from '../components/Header'
import PracticeCard from '../components/PracticeCard'
import Exam from './Exam'
import Results from './Results'
import { questions } from '../data/questions'

// --------------------------------
// Practice Options
// Contains the practice choices
// shown on the homepage
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
  // should be displayed
  // --------------------------------
  const [isExamStarted, setIsExamStarted] = useState(false)

// --------------------------------
// Practice Mode State
// Stores the practice option selected
// by the student.
// --------------------------------
const [practiceMode, setPracticeMode] = useState<string | null>(null)


  // --------------------------------
  // Exam Answers
  // Stores answers received from Exam
  // --------------------------------
  const [examAnswers, setExamAnswers] = useState<Record<number, string>>({})

  // --------------------------------
  // Exam Completion State
  // Tells Home whether the exam has finished
  // --------------------------------
  const [isExamFinished, setIsExamFinished] = useState(false)

    // --------------------------------
    // Calculate Exam Score
    // Counts questions answered correctly
    // --------------------------------
    const score = questions.reduce((total, question) => {
      if (examAnswers[question.id] === question.correctAnswer) {
        return total + 1
      }

      return total
    }, 0)

  // --------------------------------
  // Calculate Unanswered Questions
  // Counts questions the student skipped
  // --------------------------------
  const unansweredQuestions = questions.reduce((total, question) => {
    if (!examAnswers[question.id]) {
      return total + 1
    }

    return total
  }, 0)

  // --------------------------------
  // Calculate Incorrect Answers
  // Everything answered that was not correct
  // --------------------------------
  const incorrectAnswers =
    questions.length - score - unansweredQuestions

  // --------------------------------
  // Show Results
  // --------------------------------
  if (isExamFinished) {
    return (
      <Results
        score={score}
        totalQuestions={questions.length}
        incorrectAnswers={incorrectAnswers}
        unansweredQuestions={unansweredQuestions}
        answers={examAnswers}
        onRestart={() => {
          setExamAnswers({})
          setIsExamFinished(false)
          setIsExamStarted(false)
        }}
      />
    )
  }

  // --------------------------------
  // Show Exam
  // --------------------------------
  if (isExamStarted) {
    return (
      <Exam
        onFinish={(answers) => {
          setExamAnswers(answers)
          setIsExamFinished(true)
        }}
      />
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
            onClick={() => setIsExamStarted(true)}
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
