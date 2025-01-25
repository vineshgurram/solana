import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
  NavItem,
} from "react-bootstrap";

import logo from "../assets/images/logo.svg";
import TopStrip from "./TopStrip";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bs-header fixed-top">
      <TopStrip />
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container>
            <Navbar>
              <Link to="/">
                <img src={logo} className="img-fluid" alt="Solana Logo" />
              </Link>
            </Navbar>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Learn</Nav.Link>
                  <Nav.Link href="#action2">Build</Nav.Link>
                  <Nav.Link href="#action2">Network</Nav.Link>
                  <Nav.Link href="#action2">Community</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
}
