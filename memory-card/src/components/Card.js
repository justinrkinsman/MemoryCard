import React, { useState, useEffect } from 'react'
import "./card.css"

export function Card(props) {
    return(
        <>
            <div className="card">
                <img src={props.source} alt={props.alternate}></img>
            </div>
        </>
    )
}