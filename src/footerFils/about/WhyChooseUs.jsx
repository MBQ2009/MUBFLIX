import React from 'react'
import { Row, Col } from 'react-bootstrap'


const WhyChooseUs = () => {
  return (
    < div className='card-choose'>
        <h2>Why Choose Us</h2>
      
      <Row>
        <Col>
    <div className="choose-card">
      <h3>💎</h3>
      <h5>Premium Movie Experience</h5>
      <p>
        Enjoy your favourite movies in an
        environment designed to make every
        moment special.
      </p>
    </div>
  </Col>

  <Col >
    <div className="choose-card">
      <h3>👨‍👩‍👧‍👦</h3>
      <h5>Movies for Everyone</h5>
      <p>
        From blockbuster releases to family
        favourites, we offer entertainment
        for different tastes and audiences.
      </p>
    </div>
  </Col>

  <Col >
    <div className="choose-card">
      <h3>🛋️</h3>
      <h5>Comfort and Convenience</h5>
      <p>
        We aim to make every cinema visit
        enjoyable, relaxing, and hassle-free.
      </p>
    </div>
  </Col>

  <Col >
    <div className="choose-card">
      <h3>⭐</h3>
      <h5>Unforgettable Moments</h5>
      <p>
        Whether it's laughter, suspense,
        excitement, or emotion, every movie
        brings an opportunity to create memories.
      </p>
    </div>
  </Col>
</Row>
    </div>
  )
}

export default WhyChooseUs
