import React, { useState } from "react";
import classes from './LevelPage.module.css'
import { AlphabetArr } from "../Interface/interface";
import genQuiz from "../Function/genQuiz";
import checkAnswer from "../Function/checkAns";

interface LevelPageProp {
  header: string
  level: AlphabetArr[]
}

const LevelPage: React.FC<LevelPageProp> = ({ header, level }) => {
  const [quizData, setQuizData] = useState(genQuiz(level))
  const [streak, setStreak] = useState(0)
  const [correctNoti, setCorrectNoti] = useState(false)
  const [incorrectNoti, setIncorrectNoti] = useState(false)
  const { correctAnswerChar, choiceArr } = quizData

  const newQuizHandler = () => {
    setQuizData(genQuiz(level))
    setStreak(streak + 1)
  }

  const answerEvent = (choice: number) => {
    if (checkAnswer(correctAnswerChar, choice)) {
      setCorrectNoti(true)
      setTimeout(() => {
        setCorrectNoti(false)
        return newQuizHandler()
      }, 1000)
    }
    else {
      setIncorrectNoti(true)
      setTimeout(() => {
        setIncorrectNoti(false)
        setStreak(0)
        return
      }, 1000)
    }
    return
  }

  return (
    <div className={classes.LevelPage}>
      {correctNoti && <h1 style={{ color: "green" }}>Correct</h1>}
      {incorrectNoti && <h1 style={{ color: "red" }}>Incorrect</h1>}
      {(!correctNoti && !incorrectNoti) && <h1>{header}</h1>}
      <div className={classes.Quiz}> {level[correctAnswerChar].char} </div>
      <div>
        {choiceArr.map((choice, index) =>
          <div
            className={classes.choice}
            key={index}
            onClick={() => answerEvent(choice)}
          >
            {index + 1}. {level[choice].sound}
          </div>)}
      </div>
      <div>Streak{streak > 1 ? "s" : ""}: {streak}</div>
    </div>
  )
}

export default LevelPage