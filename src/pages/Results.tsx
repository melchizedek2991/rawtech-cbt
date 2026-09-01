type ResultsProps = {
  score: number
  totalQuestions: number
  incorrectAnswers: number
}

function Results({ score, totalQuestions, incorrectAnswers,}: ResultsProps) {
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
      </div>
    </div>
  )
}

export default Results
