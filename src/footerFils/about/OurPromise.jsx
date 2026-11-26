import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OurPromise = () => {
  return (
   <Container>
      <Row  className="p-5 align-items-center">
       
        <Col> 
<h2>Our Story</h2>
            <p>
              MUBFLIX CINEMAS was created with a passion for
              entertainment and a vision to make discovering
              movies more exciting, accessible, and memorable.
            </p>
            <p>
              From thrilling adventures to heartwarming stories,
              comedy, animation, and drama, MUBFLIX brings a
              diverse world of movies closer to every audience.
            </p>
            <p>
              Whether you are planning a movie experience with
              friends or discovering your next favorite film,
              MUBFLIX is your destination for cinema.
            </p>
            </Col>
                <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c" alt="" className="about-img"  />
      </Row>
    </Container>
  )
}

export default OurPromise
