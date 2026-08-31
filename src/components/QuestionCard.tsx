import type { Question } from '../types/question'

type QuestionCardProps = {
  question: Question
  selectedAnswer: string | null
  onAnswer: (answer: string) => void
}

function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
}: QuestionCardProps) {

 const isCorrect =
  selectedAnswer !== null &&
  selectedAnswer === question.correctAnswer

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
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => onAnswer(option.label)}
            className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
              selectedAnswer === option.label
                ? 'border-slate-900 bg-slate-100'
                : 'border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
              {option.label}
            </span>

            <span className="text-slate-800">
              {option.text}
            </span>
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <p className="mt-5 text-sm font-semibold">
          {isCorrect ? 'Correct answer!' : 'Incorrect answer.'}
        </p>
      )}
    </div>
  )
}

export default QuestionCard