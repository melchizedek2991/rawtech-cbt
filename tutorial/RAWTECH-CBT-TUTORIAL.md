# RAWTECH JAMB CBT — Development Tutorial

## Milestone 01 — Project Setup

- React
- Vite
- TypeScript
- Tailwind CSS

## Milestone 02 — First React Component

- Created App component
- Learned JSX
- Introduced Tailwind utilities

## Milestone 03 — Component Architecture

- Created Header component
- Created Home page
- Learned parent/child component relationships
- Learned component imports

## Milestone 04 — Reusable Components & Props

- Created PracticeCard
- Learned props
- Created PracticeCardProps
- Introduced TypeScript types

## Milestone 05 — Arrays and .map()

- Stored UI information as data
- Used `.map()` to generate components
- Learned React `key`
- Separated data from UI
- Prepared the architecture for the JAMB question bank

# RAWTECH CBT — Milestone 9
## Practice by Year, Subject & Topic

---

## 1. Milestone Overview

Milestone 9 introduced practice selection to the RAWTECH JAMB CBT application.

Students can now choose how they want to practice:

- Practice by Year
- Practice by Subject
- Practice by Topic

The application then filters the question database and sends only the matching questions to the CBT exam.

This milestone also introduced a more scalable question-bank architecture by separating questions into subject-specific files.

---

# 2. What We Built

The student flow is now:

Homepage
↓
Choose Practice Mode
↓
Choose Year / Subject / Topic
↓
Filter Questions
↓
Show Number of Available Questions
↓
Start Practice
↓
Exam receives Selected Questions
↓
Results use Selected Questions

---

# 3. Practice Selection State

We introduced state for the student's selected practice option.

```tsx
const [practiceSelection, setPracticeSelection] = useState<
  string | number | null
>(null)