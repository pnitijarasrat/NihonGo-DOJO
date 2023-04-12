import React, { useState, useEffect } from "react";
import classes from './LevelPage.module.css'
import { AlphabetArr } from "../Interface/interface";
import genQuiz from "../Function/genQuiz";
import checkAnswer from "../Function/checkAns";

interface LevelPageProp {
  level: AlphabetArr[]
}

const LevelPage: React.FC<LevelPageProp> = ({ level }) => {
  const [quizData, setQuizData] = useState(genQuiz(level))
  const [streak, setStreak] = useState(0)
  const { correctAnswerChar, choiceArr } = quizData
  const newQuizHandler = () => {
    setQuizData(genQuiz(level))
    setStreak(streak + 1)
  }

  return (
    <div className={classes.LevelPage}>
      <div className={classes.Quiz}>
        {level[correctAnswerChar].char}
      </div>
      <div>
        {choiceArr.map((choice, index) =>
          <div
            className={classes.choice}
            key={index}
            onClick={() => {
              if (checkAnswer(correctAnswerChar, choice)) {
                return newQuizHandler()
              }
              setStreak(0)
            }}
          >
            {index + 1}. {level[choice].sound}
          </div>)}
      </div>
      <div>Streak{streak > 1 ? "s" : ""}: {streak}</div>
    </div>
  )
}

export default LevelPage