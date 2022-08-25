import React, { useState } from 'react'

export function ScoreComponent() {
    const [score, setScore] = useState(0)

    const changeScore = () => {
      setScore(12) 
    }

    const [highScore, setHighScore] = useState(0)

    const changeHighScore = () => {
        setHighScore(13)
    }

    return(
        <>
        <fieldset>
            <legend>Score</legend>
            <p>Current Score: {score}</p>
            <p>High Score: {highScore}</p>
            <p>Max Score: 18</p>
        </fieldset>
        </>
    )
}