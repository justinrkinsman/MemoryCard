import React from 'react'

export function ScoreComponent(props) {

    return(
        <>
        <fieldset>
            <legend>Score</legend>
            <p>Current Score: {props.score}</p>
            <p>High Score: {props.hiScore}</p>
            <p>Max Score: 16</p>
        </fieldset>
        </>
    )
}