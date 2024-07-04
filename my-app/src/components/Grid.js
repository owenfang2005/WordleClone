import React from 'react'
import Rows from './Rows'

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
        {guesses.map((g, i) => { // guesses is an array of ALL guesses. this function prints out all guesses in boxes (css styling)
            if (turn === i) {
                return <Rows key={i} currentGuess={currentGuess} /> // if the index of the guess matches the turn, we allow currentGuess to go through to Rows.js file
            }
            return <Rows key={i} guess={g}/>
        })}
    </div>
  )
}
