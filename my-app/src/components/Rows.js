import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Rows({ guess }) {

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
