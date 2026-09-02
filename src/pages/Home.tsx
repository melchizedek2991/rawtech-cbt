import { useState } from 'react'
import Header from '../components/Header'
import PracticeCard from '../components/PracticeCard'
import QuestionCard from '../components/QuestionCard'
import Results from './Results'
import { questions } from '../data/questions'

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

function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestion.id]

  const answeredCount = Object.keys(answers).length

  const allQuestionsAnswered = answeredCount === questions.length
  
  const score = questions.reduce((total, question) => {
  if (answers[question.id] === question.correctAnswer) {
    return total + 1
  }

  return total
}, 0)

  const handleAnswer = (answer: string) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questions[currentQuestionIndex].id]: answer,
    }))
  }

if (isSubmitted) {
  return (
    <Results
      score={score}
      totalQuestions={questions.length}
      incorrectAnswers={questions.length - score}
      answers={answers}
      onPracticeAgain={() => {
        setAnswers({})
        setCurrentQuestionIndex(0)
        setIsSubmitted(false)
      }}
    />
  )
}

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

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {practiceOptions.map((option) => (
              <PracticeCard
                key={option.title}
                title={option.title}
                description={option.description}
              />
            ))}
          </div>

          <div className="mt-10">

            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>

              <p className="text-sm text-slate-500">
                Answered: {answeredCount} of {questions.length}
              </p>
            </div>
            
            <div className="mb-5 flex gap-2 overflow-x-auto">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold ${
                    index === currentQuestionIndex
                      ? 'bg-slate-900 text-white'
                      : answers[question.id]
                        ? 'bg-slate-200 text-slate-700'
                        : 'border border-slate-300 text-slate-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-900" />
                Current
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-200" />
                Answered
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-slate-300" />
                Unanswered
              </div>
            </div>


            <QuestionCard
              question={currentQuestion}
              selectedAnswer={currentAnswer ?? null}
              onAnswer={handleAnswer}
            />

            <div className="mt-5 flex justify-between">
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                  }
                }}
                disabled={currentQuestionIndex === 0}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold
                  text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              <button
                onClick={() => {
                  if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                    return
                  }

                  if (!allQuestionsAnswered) {
                    alert('Please answer all questions before finishing.')
                    return
                  }

		  setIsSubmitted(true)
                }}
                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                {currentQuestionIndex === questions.length - 1
                  ? 'Finish'
                  : 'Next Question'}
              </button>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default Home
