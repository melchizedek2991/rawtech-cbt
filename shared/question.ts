// --------------------------------
// Shared RawTech Question Type
// Used by both the frontend and backend.
// --------------------------------

export type Option = {
  label: string
  text: string
}

export type Question = {
  id: string
  year: number
  subject: string
  topic: string
  question: string
  options: Option[]
  correctAnswer: string
  explanation: string
}