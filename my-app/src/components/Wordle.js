import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
          console.log("Congrats, you win! ")
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5 && !isCorrect) {
          console.log("Sorry, you lose. The answer was " + solution + ". ")
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    // console log is used for testing purposes. in this case we can see the guesses, turn, and if the user wins the game
    // useEffect(() => {
    //   console.log(guesses, turn, isCorrect)     
    // }, [guesses, turn, isCorrect])

  return (
    <div>
      {/* Current guess: { currentGuess }
      <br></br><br></br> */}
      {/* Answer: { solution }
      <br></br><br></br> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/> 
      <Keypad usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}
