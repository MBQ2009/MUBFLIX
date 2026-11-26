import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhoWeAre = () => {
  return (
<Container>
  <Row className="p-5 align-items-center">
    
      <img
        src="https://images.unsplash.com/photo-1478720568477-152d9b164e26"
        alt="Cinema experience"
        className="about-img"
      />
    

    <Col md={6}>
      <h2>Who We Are</h2>
      <p>
        MUBFLIX CINEMAS is a modern cinema platform created
        for movie lovers. We believe watching a movie should
        be more than just sitting in front of a screen.
      </p>
      <p>
        Our goal is to bring audiences closer to the magic
        of storytelling through exciting movies, upcoming
        releases, and an enjoyable cinematic experience.
      </p>
    </Col>
  </Row>
</Container>
  )
}

export default WhoWeAre
