import React from 'react'
import { Col, Container } from 'react-bootstrap'

const OurVision = () => {
  return (
    <Container>
       
   <Col  style={{ marginLeft: "10%" }}>
  <div className="mission-card">
    <div className="mission-icon">
      👁️
    </div>

    <div className="mission-divider"></div>

    <div className="mission-content">
      <h4>Our Vision</h4>

      <p>
        To become a leading cinema destination known
        for outstanding entertainment experiences,
        innovation, customer satisfaction, and a
        lasting connection with movie lovers.
      </p>
    </div>
  </div>
</Col>
</Container>
  )
}

export default OurVision
