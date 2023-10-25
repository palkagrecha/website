import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" id="back_color_set">
        <Container fluid>
          <Navbar.Brand href="/" className="brandColor">
            Client
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav_name mt-2">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/service">Service</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/touch">Touch</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
