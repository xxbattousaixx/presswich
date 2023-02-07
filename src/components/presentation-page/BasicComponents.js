import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function BasicComponents() {
  return (
    <>
      <section  style={{backgroundColor:"gold",
              backgroundImage:
                "url(" + require("assets/img/vector7.jpg") + ")",
            }} className="section-basic-components">
        <Container>
        <br/><br/><br/>
          <Row>
            <Col className="mb-md-5" lg="5" md="10">
              <h1 className="display-3">
                WhichPress
                <span className="text-primary">
                  Food Truck
                </span>
              </h1>
              <p style={{fontFamily:'Satisfy', fontSize:'30px', color:'red'}} className="lead">
               A place to share and a place to enjoy. Local to the Tampa Bay area. Catering available per request.
              </p><br/>
            </Col>
            <Col lg="6" md="12">
              <div className="image-container">
              <div className="pr-3"> <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/logo.png")}
                ></img></div>
                <a href="/menu"><img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/logo.png")}
                ></img></a>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/logo.png")}
                ></img>
                <a href="/contact-us"><img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/social.png")}
                ></img></a>
                <img
                  alt="..."
                  className="w-100"
                  src={require("assets/img/presentation-page/truck.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/><br/>
      </section>
    </>
  );
}

export default BasicComponents;
