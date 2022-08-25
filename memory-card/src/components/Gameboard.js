import React, { useState, useEffect } from 'react'
import { Card } from './Card'

export function Gameboard() {
    return(
        <>
        <fieldset>
            <Card />
            <Card />
            <Card />
            <Card />
        </fieldset>
        </>
    )
}