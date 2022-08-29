import React from 'react'
import { Rules } from './Rules.js'
import { ScoreComponent } from './Score.js'

export function Title(props) {
    return(
        <>
            <fieldset>
                <Rules />
                <ScoreComponent score={props.score} hiScore={props.hiScore}/>
            </fieldset>
        </>
    )
}