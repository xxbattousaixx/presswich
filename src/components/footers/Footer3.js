import React from "react";

// reactstrap components
import { Button, NavLink, Container, Row, Col } from "reactstrap";

// Core Components

function Footer3() {
  return (
    <>
      <footer className="footer footer-simple bg-gradient-default">
        <Container>
          <Row>
            <Col md="3">
              <a
                className="footer-brand"
                href="/"
              >
                WichPress Food Truck
              </a>
            </Col>
            <Col md="6">
              <div className="column">
                <ul className="inline-menu">
               
                  <li>
                    <NavLink href="/menu">
                      Menu
                    </NavLink>
                  </li>
               
                  <li>
                    <NavLink href="/contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3" className="text-right">
              <ul className="social-buttons">    
                <li>
                  <Button
                    className="btn-icon mr-2"
                    color="facebook"
                    href="https://www.facebook.com/wichpressfoodtruck"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
               
                  <Button
                    className="btn-icon"
                    color="instagram"
                    href="https://www.instagram.com/wichpressfoodtruck"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
              <Button
                    className="btn-icon"
                    color="instagram"
                    href="https://www.twiter.com/wichpress"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                 <Button
                    className="btn-icon"
                    color="instagram"
                    href="https://www.pinterest.com/wichpress"
                    size="sm"
                    target="_blank"
                  >
                    <i className="fab fa-pinterest"></i>
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer3;
