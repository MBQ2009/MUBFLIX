import React from 'react'
import { Col, Container } from 'react-bootstrap'

const OurMission = () => {
  return (
    <Container>
      <Col style={{ marginRight: "10%" }}>
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <div className="mission-divider"></div>
          <div className="mission-content">
            <h4>Our Mission</h4>
            <p>
              To deliver exceptional cinema experiences by combining quality
              entertainment, excellent customer service, and a welcoming
              environment where everyone can enjoy the magic of movies.
            </p>
          </div>
        </div>
      </Col>
    </Container>
  )
}

export default OurMission
