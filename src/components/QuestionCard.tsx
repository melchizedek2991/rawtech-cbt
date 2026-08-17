import type { Question } from '../types/question'

type QuestionCardProps = {
  question: Question
}

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-medium text-slate-500">
          {question.subject} • {question.year}
        </p>

        <h2 className="mt-2 text-xl font-semibold leading-8 text-slate-900">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option}
            className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
              {String.fromCharCode(65 + index)}
            </span>

            <span className="text-slate-800">
              {option}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard