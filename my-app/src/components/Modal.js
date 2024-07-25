import React from 'react'

export default function Modal({ isCorrect, turn, solution }) {

  const handleClick = () => {
    console.log("button click");
  }

  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You win!</h1>
                <p className="solution">Solution: {solution}</p>
                <p>You found the solution in {turn} guesses.</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You lose.</h1>
                <p className="solution">Solution: {solution}</p>
                <p>Better luck next time! </p>
                <button className="pa" onClick={ handleClick }>TEST</button>
            </div>
            
        )}
    </div>
  )
}
