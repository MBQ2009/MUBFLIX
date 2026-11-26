import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <Navbar sticky="top"  expand="lg" className=" bg-black tc-white" >
      <Container>
       
        <Navbar.Brand href="/">
            <img src='/Logo.png' alt='' width={200} height="auto" />

        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" color='w' style={{ textAlign: 'end' }}>
            <Nav.Link href='/'>Home</Nav.Link>

            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nowshowingsam">Now Sowing</NavDropdown.Item>
              <NavDropdown.Item href="/comingsoonsam">
                Coming Soon
              </NavDropdown.Item>
    
            </NavDropdown>
             
            
            <Nav.Link href="/movie details">Movie Details</Nav.Link>
            <Nav.Link href="/book tickets">Book Tickets</Nav.Link>
            <Nav.Link href="/about us">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
    <button>Click Me</button>

            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;