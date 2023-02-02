import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
import Wobble from 'react-reveal/Wobble';
import Zoom from 'react-reveal/Zoom';
// Core Components

function HeaderPresentation() {
  return (
    <>
      <div className="section-hero section-shaped">
        <div className="page-header">
        <Zoom>  <div
            className="page-header-image "
            style={{backgroundColor:"limegreen",
              backgroundImage:
                "url(" + require("assets/img/sections/t1.jpeg") + ")",
            }}
          ></div></Zoom>
          <Container
            className="shape-container d-flex align-items-center py-lg"
            fluid
          >
            <div className="col px-0">
              <Row>
                <Col className="ml-5" lg="4">
                 <Wobble> <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/blue.png")}
                    style={{ width: "200px" }}
                  ></img>{" "}
                 
                  <h className="lead">
                   <br></br>
                   <a href="https://streetfoodfinder.com/WichPress"> <b style={{fontSize:"2rem"}}className="text-warning">WichPress Food Truck</b></a>
                  </h></Wobble>
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="/menu#headers"
                    >
                      <span className="btn-inner--icon">
                        <i className="fas fa-shopping-cart"></i>
                      </span>
                      <span className="btn-inner--text">Full Menu</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeaderPresentation;
