import React, { useState, useEffect } from 'react'
import "./card.css"
{/*import dracula from "../images/dracula.jpg"
import frankenstein from "../images/frankenstein.jpg"
import nosferatu from "../images/nosferatu.jpg"
import phantom from "../images/phantom.jpg"
import mummy from "../images/mummy.jpg"
import invisible from "../images/invisibleman.jpg"
import wolfman from "../images/wolfman.jpg"
import creature from "../images/creature.jpg"
import jason from "../images/jason.jpg"
import freddy from "../images/freddy.jpg"
import michael from "../images/myers.jpg"
import chucky from "../images/chucky.jpg"
import leather from "../images/leatherface.jpg"
import xeno from "../images/xenomorph.jpg"
import predator from "../images/predator.jpg"
import pinhead from "../images/pinhead.jpg"

const images = [
    ['Dracula', dracula], 
    ['Frankenstein', frankenstein], 
    ['Nosferatu', nosferatu],
    ['The Phantom of the Opera', phantom], 
    ['The Mummy', mummy],
    ['The Invisible Man', invisible], 
    ['The Wolf Man', wolfman],
    ['The Creature From the Black Lagoon', creature], 
    ['Jason Voorhees', jason],
    ['Freddy Krueger', freddy], 
    ['Michael Myers', michael], 
    ['Chucky', chucky],
    ['Leatherface', leather], 
    ['Xenomorph', xeno],
    ['Predator', predator], 
    ['Pinhead', pinhead]
]*/}

export function Card(props) {

    {/*const RandomImagesArray = () => {
        let currentIndex = images.length
        while (currentIndex !== 0){
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [images[currentIndex], images[randomIndex]] = [images[randomIndex], images[currentIndex]]
        }
        console.log(images)
    }*/}

    return(
        <>
            <div className="card">
                <img onClick={props.function} src={props.source} alt={props.alternate}></img>
            </div>
        </>
    )
}