// --------------------------------
// Practice Card Props
// Defines the data and action
// received from the parent.
// --------------------------------
type PracticeCardProps = {
  title: string
  description: string
  onExplore: () => void
}

function PracticeCard({
  title,
  description,
  onExplore,
}: PracticeCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button
        onClick={onExplore}
        className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Explore
      </button>
    </div>
  )
}

export default PracticeCard
