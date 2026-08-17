import Header from '../components/Header'
import PracticeCard from '../components/PracticeCard'
import QuestionCard from '../components/QuestionCard'
import { questions } from '../data/questions'

const practiceOptions = [
  {
    title: 'Practice by Year',
    description: 'Practice previous JAMB questions year by year.',
  },
  {
    title: 'Practice by Subject',
    description:
      'Focus on a specific JAMB subject and improve your performance.',
  },
  {
    title: 'Practice by Topic',
    description:
      'Target specific topics where you need more practice.',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Prepare Smarter for JAMB
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Practice with realistic JAMB CBT questions, track your performance,
            and build confidence before examination day.
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            {practiceOptions.map((option) => (
              <PracticeCard
                key={option.title}
                title={option.title}
                description={option.description}
              />
            ))}
          </div>

          <div className="mt-10">
            <QuestionCard question={questions[0]} />
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default Home