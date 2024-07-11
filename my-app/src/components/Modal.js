import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You win!</h1>
                <p className="solution">Solution: {solution}</p>
                <p>You found the solution in {turn} guesses.</p>
                <div className="playAgain">
                    <p className="pa">PLAY AGAIN!</p>
                </div>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You lose.</h1>
                <p className="solution">Solution: {solution}</p>
                <p>Better luck next time! </p>
                <div className="playAgain">
                    <p className="pa">PLAY AGAIN!</p>
                </div>
            </div>
            
        )}
    </div>
  )
}
