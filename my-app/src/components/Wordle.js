import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
      console.log(guesses, turn, isCorrect) // console log is used for testing purposes. in this case we can see the guesses, turn, and if the user wins the game
    }, [guesses, turn, isCorrect])

  return (
    <div>
      Current guess: { currentGuess }
      <br></br><br></br>
      Answer: { solution }
      <br></br><br></br>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/> 
      <Keypad />
    </div>
  )
}
