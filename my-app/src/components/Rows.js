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

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
       <Container>
        <Row className="row-current">
            {letters.map((letter, i) => (
              <Col key={i} className="filled">{letter}</Col>
            ))}
            {[...Array(5 - letters.length)].map((v, i) => (
              <Col key={i}></Col>
            ))}
        </Row>
       </Container>
    )
  }

  return (
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
