import { useState } from 'react'
// const fs = require('fs');

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    //format a guess into an array of letter objects
    // e.g. [{key: 'a', color: yellow}]

    const formatGuess = () => { // fires when conditions are right (must be 5 letters long, not be guessed before, not exceed number of guesses)
        // console.log('formatting the guess - ', currentGuess)
        let solutionArray = [...solution] // Create an array (the ... separates the 5 letters of the solution into 5 separate elements)
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'} //gives every letter in the guess a key and color (by default grey)
        })

        // find any green letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray[index] === letter.key) { // if the guess at index: index is the same as the solution at that index, turn green
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })

        // find any yellow letters
        formattedGuess.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') { // if the letter exists in the solution and it is not green, turn yellow
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true) // if the guess is the solution, user wins the game
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses] // newGuesses variable is an array of previous guesses
            newGuesses[turn] = formattedGuess // add the new guess into this array
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]  // add the new guess into the history of guesses
        })
        setTurn((prevTurn) => {
            return prevTurn + 1 // add one to the turn
        })
        setUsedKeys(prevUsedKeys => {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach(l => {
                const currentColor = newKeys[l.key] 

                if (l.color === 'green') {
                    newKeys[l.key] = 'green ' + l.key // adds the key class
                    return
                }

                if (l.color === 'yellow' && currentColor !== 'green ' + l.key) {
                    newKeys[l.key] = 'yellow ' + l.key
                    return
                }

                if (l.color === 'grey' && currentColor !== ('green ' + l.key || 'yellow' + l.key)) {
                    newKeys[l.key] = 'grey ' + l.key
                    return
                }
            })

            return newKeys
        })
        setCurrentGuess('')
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
            
            const formatted = formatGuess()
            addNewGuess(formatted) // fires addNewGuess function
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1) // deletes a letter
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) { // only accepts if input is a letter
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key // adds the letter to the word if the word is smaller than 5 letters
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys} // returns functions to be used in other files
}

export default useWordle