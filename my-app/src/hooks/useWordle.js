import { useState } from 'react'
// const fs = require('fs');

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

    //format a guess into an array of letter objects
    // e.g. [{key: 'a', color: yellow}]

    const formatGuess = () => {
        // console.log('formatting the guess - ', currentGuess)
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })

        // find any green letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    
    const addNewGuess = () => {

    }

    // function to determine if word is in 5 letter word list

    // fs.readFile('words.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(data)
    // });

    // handle keyup event and track current guess
    // if user presses enter, add the new guess
    
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log('No more guesses. You lost!')
                return
            }
            // do not allow repeat answers
            if (history.includes(currentGuess)) {
                console.log('You already tried that word.')
                return
            }
            // check word is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('Your guess must be 5 letters long.')
                return
            }
            // *EXTRA* check if word is a part of the words.txt file
            // if(!fh_input.includes(currentGuess)) {
            //     console.log('Invalid word. Try again!')
            //     return
            // }
            
            const format = formatGuess()
            console.log(format)
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle