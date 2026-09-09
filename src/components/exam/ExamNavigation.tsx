// --------------------------------
// Exam Navigation Component
// Handles Previous, Next, and
// Finish Exam navigation.
// --------------------------------

type ExamNavigationProps = {
  currentQuestionIndex: number
  totalQuestions: number
  onPrevious: () => void
  onNext: () => void
  onFinish: () => void
}

function ExamNavigation({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onFinish,
}: ExamNavigationProps) {
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  return (
    // --------------------------------
    // Previous / Next Navigation
    // --------------------------------
    <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {/* Next / Finish Button */}
      <button
        onClick={isLastQuestion ? onFinish : onNext}
        className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {isLastQuestion ? 'Finish Exam' : 'Next'}
      </button>

    </div>
  )
}

export default ExamNavigation
