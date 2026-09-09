// --------------------------------
// Exam Header Component
// Displays the exam name, timer,
// and current question counter.
// --------------------------------

type ExamHeaderProps = {
  minutes: number
  seconds: number
  currentQuestion: number
  totalQuestions: number
}

function ExamHeader({
  minutes,
  seconds,
  currentQuestion,
  totalQuestions,
}: ExamHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">

        {/* --------------------------------
            Exam Name
        -------------------------------- */}
        <h1 className="text-lg font-bold text-slate-900">
          RAWTECH JAMB CBT
        </h1>

        {/* --------------------------------
            Timer + Question Counter
        -------------------------------- */}
        <div className="text-right">

          {/* Timer */}
          <p className="text-sm font-bold text-slate-900">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </p>

          {/* Question Counter */}
          <p className="text-xs font-medium text-slate-500">
            {currentQuestion} of {totalQuestions}
          </p>

        </div>

      </div>
    </header>
  )
}

export default ExamHeader
