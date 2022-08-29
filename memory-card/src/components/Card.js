import React from 'react'
import "./card.css"

export function Card(props) {

    return(
        <>
            <div className="card">
                <img onClick={props.function} src={props.source} alt={props.alternate}></img>
            </div>
        </>
    )
}