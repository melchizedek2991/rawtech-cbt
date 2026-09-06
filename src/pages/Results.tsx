import { questions } from '../data/questions'

type ResultsProps = {
  score: number
  totalQuestions: number
  incorrectAnswers: number
  unansweredQuestions: number
  answers: Record<number, string>
  onRestart: () => void
}

function Results({ 
  score, 
  totalQuestions, 
  incorrectAnswers,
  unansweredQuestions,
  answers,
  onRestart,
	}: ResultsProps) 
	{
  const percentage = Math.round((score / totalQuestions) * 100)
  const correctAnswers = score
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-sm font-medium text-slate-500">
          RAWTECH JAMB CBT
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Exam Completed
        </h1>

        <p className="mt-4 text-slate-600">
          You scored
        </p>

        <p className="mt-2 text-5xl font-bold text-slate-900">
          {score}/{totalQuestions}
        </p>

        <p className="mt-3 text-lg font-semibold text-slate-700">
          {percentage}%
        </p>
            
        {/* --------------------------------
        Performance Summary
        Displays correct, incorrect,
        and unanswered questions
    -------------------------------- */}
    <div className="mt-6 grid grid-cols-3 gap-3">

      {/* Correct Answers */}
      <div className="rounded-xl bg-slate-100 p-4">
        <p className="text-sm text-slate-500">
          Correct
        </p>

        <p className="mt-1 text-2xl font-bold text-slate-900">
          {correctAnswers}
        </p>
        </div>

          {/* Incorrect Answers */}
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">
              Incorrect
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {incorrectAnswers}
            </p>
          </div>

          {/* Unanswered Questions */}
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-sm text-slate-500">
              Unanswered
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {unansweredQuestions}
            </p>
          </div>

        </div>
{questions.map((question) => {
  const studentAnswer = answers[question.id]

  // --------------------------------
  // Determine Question Status
  // A question can be correct,
  // incorrect, or unanswered
  // --------------------------------
  const isUnanswered = !studentAnswer
  const isCorrect = studentAnswer === question.correctAnswer

  return (
      <div
        key={question.id}
        className="rounded-xl border border-slate-200 p-4"
      >
        <p className="text-sm font-semibold text-slate-900">
          Question {question.id}
        </p>

        <p className="mt-2 text-sm text-slate-700">
          {question.question}
        </p>

        <p className="mt-3 text-sm">
          Your answer:{' '}
          <span className="font-semibold">
            {studentAnswer || 'Not answered'}
          </span>
        </p>

        <p className="mt-1 text-sm">
          Correct answer:{' '}
          <span className="font-semibold">
            {question.correctAnswer}
          </span>
        </p>

        <p
            className={`mt-2 text-sm font-semibold ${
              isUnanswered
                ? 'text-slate-500'
                : isCorrect
                  ? 'text-green-600'
                  : 'text-red-600'
            }`}
          >
              {isUnanswered
                ? 'Unanswered'
                : isCorrect
                ? 'Correct'
                : 'Incorrect'}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {question.explanation}
        </p>
      </div>
    )
  })}
</div>
	<button
          onClick={onRestart}
          className="mt-6 w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Practice Again
        </button>
      </div>
  )

}

export default Results
