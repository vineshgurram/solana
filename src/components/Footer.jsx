import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/images/logo-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  return (
    <footer className="bs-footer">
      <Container>
        <Row>
          <Col md={6}>
            <div className="column-1">
              <div className="logo-wrapper mb-20">
                <Link to="/">
                  <img src={logo} className="img-fluid" alt="" />
                </Link>
              </div>
              <p className="puchline mb-20">Managed by Solana Foundation</p>
              <div className="social-icon-wrapper mb-20 d-flex align-items-center gap-2">
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-yt"></span>
                  </a>
                </div>
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-x"></span>
                  </a>
                </div>
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-discord"></span>
                  </a>
                </div>
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-rh"></span>
                  </a>
                </div>
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-gh"></span>
                  </a>
                </div>
                <div className="icon-box">
                  <a href="#" target="_blank">
                    <span className="icon icon-tg"></span>
                  </a>
                </div>
              </div>
              <p className="copyright mb-20">
                ©2025 Solana Foundation. All rights reserved.
              </p>
            </div>
          </Col>
          <Col md={2}>
            <div className="column-2">
              <h3 className="column-heading mb-20">Solana</h3>
              <div className="links-wrapper">
                <Nav className="d-block">
                  <NavItem>
                    <Nav.Link href="#action1">Grants</Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link href="#action1">Break Solana</Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link href="#action1">Careers</Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link href="#action1">Disclaimer</Nav.Link>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="column-2">
              <h3 className="column-heading mb-20">Get Connected</h3>
              <div className="links-wrapper">
                <Nav className="d-block">
                  <NavItem>
                    <Nav.Link href="#action1">Ecosystem</Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link href="#action1">Blog</Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link href="#action1">Newsletter</Nav.Link>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <button className="btn bs-btn typ-lang">
                <span className="icon icon-globe me-2"></span>EN
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
