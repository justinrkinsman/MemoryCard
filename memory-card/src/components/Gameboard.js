import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import './gameboard.css'
import dracula from "../images/dracula.jpg"
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
]

export function Gameboard() {


    const RandomImagesArray = () => {
        let currentIndex = images.length
        while (currentIndex !== 0){
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [images[currentIndex], images[randomIndex]] = [images[randomIndex], images[currentIndex]]
        }
        return images
    }

    RandomImagesArray()

    return(
        <>
        <fieldset className="gameboard">
            <Card function={RandomImagesArray} source={images[0][1]} alternate={images[0][0]}/>   
            <Card function={RandomImagesArray} source={images[1][1]} alternate={images[1][0]}/>
            <Card function={RandomImagesArray} source={images[2][1]} alternate={images[2][0]}/>
            <Card function={RandomImagesArray} source={images[3][1]} alternate={images[3][0]}/>
            <Card function={RandomImagesArray} source={images[4][1]} alternate={images[4][0]}/>
            <Card function={RandomImagesArray} source={images[5][1]} alternate={images[5][0]}/>
            <Card function={RandomImagesArray} source={images[6][1]} alternate={images[6][0]}/>
            <Card function={RandomImagesArray} source={images[7][1]} alternate={images[7][0]}/>
            <Card function={RandomImagesArray} source={images[8][1]} alternate={images[8][0]}/>
            <Card function={RandomImagesArray} source={images[9][1]} alternate={images[9][0]}/>
            <Card function={RandomImagesArray} source={images[10][1]} alternate={images[10][0]}/>
            <Card function={RandomImagesArray} source={images[11][1]} alternate={images[11][0]}/>
            <Card function={RandomImagesArray} source={images[12][1]} alternate={images[12][0]}/>
            <Card function={RandomImagesArray} source={images[13][1]} alternate={images[13][0]}/>
            <Card function={RandomImagesArray} source={images[14][1]} alternate={images[14][0]}/>
            <Card function={RandomImagesArray} source={images[15][1]} alternate={images[15][0]}/>
        </fieldset>
        </>
    )
}