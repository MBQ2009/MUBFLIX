
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { Button, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <Container>
        <Row className='border-top border-secondary mt-3 py-4'>
          <Col>
            <img src='/Logo.png' alt='MovieNest logo' width={200} height='auto' />
            <p>DREAM • WATCH • ENJOY</p>
            <p>Your ultimate movie destination.</p>
            <p>Blockbusters, Classics and more — all in one place.</p>
          </Col>

          <Col>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Now Showing</li>
              <li>Coming Soon</li>
              <li>Cinema Locations</li>
              <li>Showtimes</li>
            </ul>
          </Col>

          <Col>
            <h4>Explore</h4>
            <ul>
              <li>Movies</li>
              <li>Genres</li>
              <li>Top Rated</li>
              <li>New Releases</li>
              <li>My Watchlist</li>
            </ul>
          </Col>

          <Col>
            <h4>Support</h4>
            <ul>
              <li>Help Centre</li>
              <li>FAQs</li>
              <li>Booking Assistance</li>
              <li>Cancellation Policy</li>
              <li>Contact Us</li>
            </ul>
          </Col>

          <Col>
            <div className='footer-column'>
              <h6>Follow Us</h6>

              <a href='Dodge Official Facebook Page'>
                <FaFacebookF /> Facebook
              </a>

              <a href='Dodge Official Instagram Page'>
                <FaInstagram /> Instagram
              </a>

              <a href='Dodge Official X/Twitter Page'>
                <FaXTwitter /> X Twitter
              </a>

              <a href=' Dodge Official YouTube Channel'>
                <FaYoutube /> YouTube
              </a>
            </div>
          </Col>
        </Row>

        <Row className='border-top border-secondary mt-3 py-4'>
          <Col>
            <h5>Stay updated with MovieNest</h5>
            <p>
              Get the latest movie releases, exclusive offers and cinema updates delivered to your inbox.
            </p>
          </Col>

          <Col>
            <Form className='d-flex gap-2 align-items-end'>
              <Form.Group className='mb-3 w-100' controlId='exampleForm.ControlInput1'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>

              

            </Form>
           <Button variant='danger' type='submit'>Sign Up</Button>
          </Col>

        </Row>

        <Row className='border-top border-secondary mt-3 py-4'>
          <Col>&copy; {new Date().getFullYear()} MUBFLEX </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;