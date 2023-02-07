/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                We cater. Let's get in touch.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="instagram"
                id="tooltip46149983"
                href="https://instagram.com/wichpressfoodtruck"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46149983">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                id="tooltip46149983"
                href="https://facebook.com/wichpressfoodtruck"
              >
                <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                </span>
              </Button>
                  <Button
                className="btn-icon-only rounded-circle"
                color="pinterest"
                id="tooltip844497435"
                href="mailto:shawn@wichpressfoodtruck.com"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-envelope"></i>
                </span>
              </Button>  
                <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                id="tooltip844497435"
                href="tel:8137244100"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-phone"></i>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip844497435">
                Contact us
              </UncontrolledTooltip>
             
            </Col>
          </Row>
          <hr></hr>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © 2023{" "}
                <a
                  href="/"
                  target="_blank"
                >
                  WichPress Food Truck
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
               
                <NavItem>
                  <NavLink
                    href="/about"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/menu"
                  >
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/contact-us"
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default DemoFooter;
