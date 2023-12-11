import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" id="back_color_set">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")} className="brandColor">
            Pal Kagrecha
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav_name mt-2" id="navDesign">
              <Link to="/about">About</Link>
              <Link to="/service">Service</Link>

              <Link to="/project">Portfolio</Link>

              <Link to="/touch">Contact Us</Link>

              {/* <Nav.Link to="/service">Service</Nav.Link>
              <Nav.Link to="/project">Portfolio</Nav.Link>
              <Nav.Link to="/touch">Contact Us</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
