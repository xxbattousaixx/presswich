import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
// Core Components
import Accordion1 from "components/accordions/Accordion1";

function HeaderIndex() {
  return (
    <>
      <div className="section section-hero section-shaped">
        <div className="page-header">
          <img
            alt="..."
            className="bg-image"
            style={{backgroundColor:'yellow'}}
            src={require("assets/img/ill/index_bg.svg").default}
          />
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  />
                 
                  <p className="lead">
                    <b className="display-3">Welcome</b>
                    <br></br>We are here to serve you<br/><br/>
                    Our food truck has been in business for over a decade and we are dedicated to serving your every food need.
                  </p>

                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/sections/ft2.jpg")}
                    style={{ width: "600px" }}
                  />


                  <div className="btn-wrapper mt-5">
                   
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <Accordion1/>
    </>
  );
}

export default HeaderIndex;
