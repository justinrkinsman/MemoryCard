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

export function Gameboard() {
{/*put all the images in an array and have a function randomly select from the array and remove each one as it selects it */}

    return(
        <>
        <fieldset className="gameboard"> {/*Create function that will randomly assign src and one that will randomly assign alt. Put those functions in the props  */}
            <Card source={dracula} alternate='Dracula'/>   
            <Card source={frankenstein} alternate='Frankenstein'/>
            <Card source={nosferatu} alternate='Nosferatu'/>
            <Card source={phantom} alternate='The Phantom of the Opera'/>
            <Card source={mummy} alternate="The Mummy"/>
            <Card source={invisible} alternate="The Invisible Man"/>
            <Card source={wolfman} alternate="The Wolf Man"/>
            <Card source={creature} alternate="The Creature From the Black Lagoon"/>
            <Card source={jason} alternate="Jason Voorhees"/>
            <Card source={freddy} alternate="Freddy Krueger"/>
            <Card source={michael} alternate="Michael Myers"/>
            <Card source={chucky} alternate="Chucky"/>
            <Card source={leather} alternate="Leatherface"/>
            <Card source={xeno} alternate="Xenomorph"/>
            <Card source={predator} alternate="Predator"/>
            <Card source={pinhead} alternate="Pinhead"/>
        </fieldset>
        </>
    )
}