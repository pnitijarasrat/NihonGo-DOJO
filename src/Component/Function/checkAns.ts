export default function checkAnswer(correctAnswer: number, answer: number) {
  if (correctAnswer === answer) return true
  if (correctAnswer !== answer) return false
}