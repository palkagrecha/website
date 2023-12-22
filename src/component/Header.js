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
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="brandColor mx-4"
          >
            Pal Kagrecha
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_name mt-2" id="navDesign">
              <Link to="/">Home</Link>

              <Link to="/about">About</Link>
              <Link to="/service">Service</Link>

              <Link to="/project">Portfolio</Link>

              <Link to="/contact">Contact </Link>

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
