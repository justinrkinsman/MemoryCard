import React, { Component } from 'react'
import { Rules } from './Rules.js'

export class Title extends Component {
    render(){
        return(
            <>
                <fieldset>
                    <Rules />
                </fieldset>
            </>
        )
    }
}