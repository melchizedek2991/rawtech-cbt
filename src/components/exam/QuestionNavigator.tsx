// --------------------------------
// Question Navigator Component
// Displays question numbers and
// allows the student to jump between
// questions.
// --------------------------------

type QuestionNavigatorProps = {
  questions: {
    id: string
  }[]
  answers: Record<string, string>
  currentQuestionIndex: number
  onQuestionSelect: (index: number) => void
}

function QuestionNavigator({
  questions,
  answers,
  currentQuestionIndex,
  onQuestionSelect,
}: QuestionNavigatorProps) {
  return (
    // --------------------------------
    // Question Navigator Container
    // --------------------------------
    <div className="mt-8 border-t border-slate-200 pt-6">

      <p className="mb-3 text-sm font-semibold text-slate-700">
        Questions
      </p>

      {/* --------------------------------
          Question Number Navigator
      -------------------------------- */}
      <div className="flex gap-2 overflow-x-auto pb-2">

        {questions.map((question, index) => {

          // --------------------------------
          // Determine Navigator State
          // --------------------------------
          const isCurrent = index === currentQuestionIndex
          const isAnswered = Boolean(answers[question.id])

          return (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(index)}
              className={`h-10 min-w-10 shrink-0 rounded-lg text-sm font-semibold transition ${
                isCurrent
                  ? 'bg-slate-900 text-white'
                  : isAnswered
                    ? 'bg-slate-200 text-slate-700'
                    : 'border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {index + 1}
            </button>
          )
        })}

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

    </div>
  )
}

export default QuestionNavigator
