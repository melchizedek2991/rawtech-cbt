// --------------------------------
// App Component
// Controls which main page is
// currently displayed.
// --------------------------------

import { useState } from 'react'

import Home from './pages/Home'
import History from './pages/History'

// --------------------------------
// App
// --------------------------------
function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'history'>('home')

  // --------------------------------
  // Show History Page
  // --------------------------------
  if (currentPage === 'history') {
    return (
      <div>
        <button onClick={() => setCurrentPage('home')}>
          Back to Home
        </button>

        <History />
      </div>
    )
  }

  // --------------------------------
  // Show Home Page
  // --------------------------------
  return (
    <div>
      <button onClick={() => setCurrentPage('history')}>
        Exam History
      </button>

      <Home />
    </div>
  )
}

export default App