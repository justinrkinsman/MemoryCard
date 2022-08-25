import React, { Component } from 'react'
import { Rules } from './Rules.js'
import { ScoreComponent } from './Score.js'

export class Title extends Component {
    render(){
        return(
            <>
                <fieldset>
                    <Rules />
                    <ScoreComponent />
                </fieldset>
            </>
        )
    }
}