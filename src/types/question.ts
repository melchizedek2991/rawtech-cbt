export type Option = {
  label: string
  text: string
}

export type Question = {
  id: number
  year: number
  subject: string
  topic: string
  question: string
  options: Option[]
  correctAnswer: string
  explanation: string
}