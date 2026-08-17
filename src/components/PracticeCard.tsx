type PracticeCardProps = {
  title: string
  description: string
}

function PracticeCard({ title, description }: PracticeCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
        Explore
      </button>
    </div>
  )
}

export default PracticeCard