import { AlphabetArr } from "../Interface/interface"

export default function genQuiz(quizTypeArr: AlphabetArr[]) {
  const correctAnswerChar = Math.floor(Math.random() * quizTypeArr.length)

  const getIndex = (correctAnswerChar: number) => {
    let index = Math.floor(Math.random() * quizTypeArr.length);
    while (index === correctAnswerChar) {
      index = Math.floor(Math.random() * quizTypeArr.length);
    }
    return index;
  };

  const choiceArr = [getIndex(correctAnswerChar), getIndex(correctAnswerChar), getIndex(correctAnswerChar), getIndex(correctAnswerChar)]

  const correctAnswerIndex = Math.round(Math.random() * 3)

  choiceArr[correctAnswerIndex] = correctAnswerChar

  return { correctAnswerChar, choiceArr }
}

