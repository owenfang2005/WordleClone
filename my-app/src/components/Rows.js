import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Rows({ guess, currentGuess }) {

  if (guess) {
    return (
      <Container>
        <Row className="row-past">
          {guess.map((l, i) => (
            <Col key={i} className={l.color}>{l.key}</Col>
          ))}
        </Row>
      </Container>
    )
  }

  if (currentGuess) { // if index of guess matches. in other words, the current guess we are on
    let letters = currentGuess.split('') // create an array of the letters in currentGuess

    return (
       <Container>
        <Row className="row-current">
            {letters.map((letter, i) => (
              <Col key={i} className="filled">{letter}</Col> // prints "letters" or the current letters in currentGuess
            ))}
            {[...Array(5 - letters.length)].map((v, i) => (
              <Col key={i}></Col> // prints the remaining boxes if currentGuess is not 5 letters yet
            ))}
        </Row>
       </Container>
    )
  }

  return ( // if no guess, returns an empty row
    <Container>
        <Row className="row-empty">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
  )
}
