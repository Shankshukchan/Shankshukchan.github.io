import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './youtube-logo.jpeg';
import Menu from './Menu';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid style={{backgroundColor:"grey", marginTop:"-0.5rem",padding:"0.5rem"}}>
        <Menu></Menu>
        <Navbar.Brand href="#"><img src={logo} style={{width:"4.5rem",borderRadius:"25px 25px 25px 25px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>Home <i className="fa-solid fa-house"></i></Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Uppload <i className="fa-solid fa-upload"></i></Nav.Link>
            <NavDropdown title="About" id="navbarScrollingDropdown" menuVariant='dark'>
              <NavDropdown.Item href="#action3">Account <img src={logo} style={{width:"5rem",borderRadius:"50%"}}></img></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Live <i className="fa-solid fa-mobile-screen"></i>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Notification <i className="fa-solid fa-bell"></i>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled style={{color:"white"}}>
            subscription <i className="fa-solid fa-video"></i>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{border:"black solid 1px"}}
            />
            <Button variant="outline-success" style={{color:"yellow",border:"1px solid yellow"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;