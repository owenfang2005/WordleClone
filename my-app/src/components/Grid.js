import React from 'react'
import Rows from './Rows'

export default function Grid({ currentGuess, guesses, turn }) {
  return (
    <div>
        {guesses.map((g, i) => {
            return <Rows key={i}/>
        })}
    </div>
  )
}
