// --------------------------------
// Submit Confirmation Component
// Asks the student to confirm
// before manually submitting.
// --------------------------------

type SubmitConfirmationProps = {
  onCancel: () => void
  onConfirm: () => void
}

function SubmitConfirmation({
  onCancel,
  onConfirm,
}: SubmitConfirmationProps) {
  return (
    // --------------------------------
    // Confirmation Container
    // --------------------------------
    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">

      {/* Confirmation Message */}
      <h3 className="text-lg font-bold text-slate-900">
        Submit Exam?
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Are you sure you want to submit your exam? You will not be able to
        change your answers after submission.
      </p>

      {/* --------------------------------
          Confirmation Actions
      -------------------------------- */}
      <div className="mt-5 flex gap-3">

        {/* Cancel Submission */}
        <button
          onClick={onCancel}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
        >
          Cancel
        </button>

        {/* Confirm Submission */}
        <button
          onClick={onConfirm}
          className="flex-1 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Submit Exam
        </button>

      </div>

    </div>
  )
}

export default SubmitConfirmation
