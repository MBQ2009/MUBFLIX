
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
       <Row
  className="mt-3 py-4"
  style={{ borderTop: "1px solid #8B2BFF" }}
>
          <Col>
            <img src='/Logo.png' alt='MovieNest logo' width={200} height='auto' />
            <p>DREAM • WATCH • ENJOY</p>
            <p>Your ultimate movie destination.</p>
            <p>Blockbusters, Classics and more — all in one place.</p>
          </Col>

          <Col>
            <h4>Quick Links</h4>
           
             <Nav.Link href='/'>Home</Nav.Link>
             <Nav.Link href='/nowshowingsam'>Now Showing</Nav.Link>
              <Nav.Link href='/comingsoon'>Coming Soon</Nav.Link>
              <Nav.Link href='/cinemalocation'>Cinema Locations</Nav.Link>
              <Nav.Link href='/showtime'>Showtimes</Nav.Link>
          
          </Col>

          <Col>
            <h4>Explore</h4>
               <Nav.Link href='/'>Movies</Nav.Link>
               <Nav.Link href='/'>Genres</Nav.Link> 
               <Nav.Link href='/'>Top Rated</Nav.Link>
               <Nav.Link href='/'>New Releases</Nav.Link>
               <Nav.Link href='/'>My Watchlist</Nav.Link>
            
          </Col>

          <Col>
            <h4>Support</h4>
            
                <Nav.Link href='/'>Help Centre</Nav.Link>
                <Nav.Link href='/'>FAQs</Nav.Link>
                <Nav.Link href='/'>Booking Assistance</Nav.Link>
               <Nav.Link href='/'>Cancellation Policy</Nav.Link>
              <Nav.Link href='/'>Contact Us</Nav.Link>
            
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

       <Row
  className="mt-3 py-4"
  style={{ borderTop: "1px solid #8B2BFF" }}
>
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

        <Row
  className="mt-3 py-4"
  style={{ borderTop: "1px solid #8B2BFF" }}
>
          <Col>&copy; {new Date().getFullYear()} MUBFLEX </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;